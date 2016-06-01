/**
 * Created by pawel on 14.05.16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './restaurants.html'

class Restaurants {
    constructor($scope, $reactive, CompaniesService ) {
        'ngInject';
        $reactive(this).attach($scope);

        this.helpers({
            restaurants: () => CompaniesService.getRestaurants()
        });
    }
    
    getRestaurantUrlName(name){
        return name.replace(' ', '-');
    }
}

const name = 'restaurants';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePathForUser(name),
        controllerAs: 'vm',
        controller: Restaurants
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('user.restaurants', {
            url: '/Restauracje',
            template: '<restaurants></restaurants>'
            // views: {
            //     'content': {
            //     }
            // }
        });
}