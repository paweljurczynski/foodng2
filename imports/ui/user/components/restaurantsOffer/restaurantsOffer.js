/**
 * Created by pawel on 14.05.16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './restaurantsOffer.html'

class RestaurantsOffer {
    constructor($scope, $stateParams, $reactive, CompaniesService, CartService) {
        'ngInject';
        $reactive(this).attach($scope);
        console.log($stateParams);
        this.CartService = CartService;
        this.helpers({
            restaurant: () => CompaniesService.getRestaurantById($stateParams.restaurantId)
        });
    }

    addToCart(productId, priceIndex){
        this.CartService.addToCart(productId, priceIndex);
    }
}

const name = 'restaurantsOffer';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePathForUser(name),
        controllerAs: 'vm',
        controller: RestaurantsOffer
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        
        .state('user.restaurantsOffer', {
                url: '/Restarurants/:restaurantId',
                // params: {
                //     restaurantName: {
                //         value: '',
                //         squash: true
                //     },
                //     restaurantId: {
                //         value: ''
                //     }
                // },
                template: '<restaurants-offer></restaurants-offer>'
            }
        )
    ;
}