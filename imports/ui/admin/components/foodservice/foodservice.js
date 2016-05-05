import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import {Utils} from '../../../../utils/Utils';
import './foodservice.html';

import {name as ProductList} from '../productList/productList';
import {name as Navigation} from '../navigation/navigation';

class FoodService {}

const name = 'foodservice';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngAnimate,
    ProductList,
    Navigation
]).component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: name,
        controller: FoodService
    })
    .config(config);

function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/Products');
}
