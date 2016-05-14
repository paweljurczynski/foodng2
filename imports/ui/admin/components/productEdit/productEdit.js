import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './productEdit.html';

import {Categories} from '../../../../api/categories';
import {Products} from '../../../../api/products';

class ProductEdit {
    constructor($stateParams, $state, Notification, ProductsService) {
        'ngInject';

        this.ProductsService = ProductsService;

        this.product = ProductsService.getProductById($stateParams.id);
        this.ingredients = ProductsService.getUniqIngredients();
        this.categories = Categories.find().fetch();
        this.currentCategory = Categories.find({_id: this.product.categoryId});
    }

    updateProduct(product) {
        this.ProductsService.update(product);
    }
}

const name = 'productEdit';

// create a moduleProductsService.getProductById
export default angular.module(name, [
        angularMeteor,
        uiRouter,
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: ProductEdit
    }).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('admin.productsEdit', {
            url: '/Products/Edit/:id',
            template: '<product-edit></product-edit>'
        });
}


