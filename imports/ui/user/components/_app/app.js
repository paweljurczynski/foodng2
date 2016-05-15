import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import Notifications from 'angular-ui-notification';
import 'checklist-model';

import {Utils} from '../../../../utils/Utils';
import './layout.html';

import 'offcanvas-bootstrap/dist/css/bootstrap.offcanvas.min.css';
import 'offcanvas-bootstrap/dist/js/bootstrap.offcanvas.min';


import {name as Restaurants} from '../restaurants/restaurants';
import {name as restaurantsOffer} from '../restaurantsOffer/restaurantsOffer';

import {name as CompaniesService} from '../../../common/services/CompaniesService';

//COMPONENTS

class appUser {}

const name = 'appUser';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngAnimate,
    Notifications,
    //COMPONENTS
    Restaurants,
    restaurantsOffer,
    //SERVICES
    CompaniesService
]).component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: name,
        controller: appUser
    })
    .config(config);

function config($locationProvider, $urlRouterProvider, NotificationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 60,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });
}