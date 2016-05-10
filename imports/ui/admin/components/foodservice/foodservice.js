import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import Notifications from 'angular-ui-notification';
import 'checklist-model';

import {Utils} from '../../../../utils/Utils';
import './foodservice.html';

//COMPONENTS

import {name as ProductList} from '../productList/productList';
import {name as ProductAdd} from '../productAdd/productAdd';
import {name as ProductEdit} from '../productEdit/productEdit';
import {name as Navigation} from '../navigation/navigation';

//SERVICES
import {name as ProductsService } from '../../services/ProductsService';

class FoodService {}

const name = 'foodservice';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngAnimate,
    Notifications,
    'checklist-model',
    //COMPONENTS
    ProductList,
    ProductAdd,
    ProductEdit,
    Navigation,
    //SERVICES
    ProductsService
]).component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: name,
        controller: FoodService
    })
    .config(config);

function config($locationProvider, $urlRouterProvider, NotificationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/Products');

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