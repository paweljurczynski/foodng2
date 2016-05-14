import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';
import 'angular-simple-logger';
import 'angular-google-maps';

import './pointsAdd.html';

import {Points} from '../../../../api/points';

class PointsAdd {
    constructor($state, $stateParams, CompaniesService, PointsService){
        'ngInject';
        
        this.CompaniesService = CompaniesService;
        this.PointsService = PointsService;

        var formattedAddress, latitude, longitude;

        GoogleMaps.load({
            libraries: 'geometry,places'
        });
        
        Template.pointMap.onRendered(function() {
            this.autorun(function() {
                if (GoogleMaps.loaded()) {
                    $(".geocomplete").geocomplete({
                            map: '.map-canvas',
                            mapOptions: {
                                scrollwheel: true
                            },
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
    addPoint (vmPoint) {
    let point = {
        name: vmPoint.name,
        location: {
            type: 'point',
            address: formattedAddress,
            coordirnates: [latitude, longitude]
        }
    };
    console.log([longitude, latitude], longitude, latitude);
    console.log(point);
    PointsService.add(point);
}

    
    
    
}

const name = 'pointsAdd';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter,
        'uiGmapgoogle-maps',
        'nemLogging'
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: PointsAdd
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('admin.pointsEdit', {
            url: '/Points/Add',
            template: '<points-add></points-add>'
        });
}

