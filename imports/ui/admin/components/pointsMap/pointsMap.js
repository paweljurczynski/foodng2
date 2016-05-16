import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';
import 'angular-simple-logger';
import 'angular-google-maps';

import './pointsMap.css';
import './pointsMap.html';

class PointsMap {
    constructor($scope) {
        'ngInject';

        this.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8,
            events: {}
        };

        this.marker = {
            options: {
                draggable: true
            },
            events: {}
        };
    }
}

const name = 'pointsMap';

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
        controller: PointsMap
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('admin.pointsMap', {
            url: '/Points/Map',
            template: '<points-map></points-map>'
        });
}
