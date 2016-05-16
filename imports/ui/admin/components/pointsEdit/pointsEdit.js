import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';
import 'angular-simple-logger';
import 'angular-google-maps';

import {name as PointsMap} from '../pointsMap/pointsMap';

import './pointsEdit.html';

import {Points} from '../../../../api/points';

class PointsEdit {
    constructor($state, $stateParams, PointsService) {
        'ngInject';

        this.PointsService = PointsService;

        var formattedAddress, latitude, longitude;
        GoogleMaps.load({
            libraries: 'geometry,places'
        });
        this.point = PointsService.getPointById($stateParams.id);

        Template.pointMap.onRendered(function() {
            this.autorun(function() {
                if (GoogleMaps.loaded()) {


                    $(".geocomplete").geocomplete({
                            map: '.map-canvas',
                            mapOptions: {
                                scrollwheel: true
                            },
                            location: PointsService.getLocalizationForCurrentPoint(),
                            details: '.details'
                        })
                        .bind("geocode:result", function(event, result) {
                            formattedAddress = result.formatted_address;
                            latitude = result.geometry.location.lat();
                            longitude = result.geometry.location.lng();
                        });
                }
            });
        });

    }



    updatePoint (point) {
        this.PointsService.update(point);
    }

}

const name = 'pointsEdit';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter,
        'uiGmapgoogle-maps',
        'nemLogging',
        PointsMap
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: PointsEdit
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('admin.pointsEditor', {
            url: '/Points/Editor/:id',
            template: '<points-edit></points-edit>'
        });
}

