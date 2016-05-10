/**
 * Created by pawel on 10.05.16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './productAdd.html';

import {Categories} from '../../../../api/categories';
import {Products} from '../../../../api/products';

class ProductAdd {
    constructor($stateParams, $state, Notification, ProductsService) {
        'ngInject';

        this.ProductsService = ProductsService;

        this.currentCategory = null;
        this.ingredients = ProductsService.getUniqIngredients();
        this.categories = Categories.find().fetch();

    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    changeCategory(categoryId) {
        this.currentCategory = Categories.findOne({
            _id: categoryId
        });
    }

    addProduct(product) {
        this.ProductsService.add(product);
    }
}

const name = 'productAdd';

// create a moduleProductsService.getProductById
export default angular.module(name, [
        angularMeteor,
        uiRouter,
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: ProductAdd
    }).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('ProductAdd', {
            url: '/Products/Add',
            template: '<product-add></product-add>'
        });
}


