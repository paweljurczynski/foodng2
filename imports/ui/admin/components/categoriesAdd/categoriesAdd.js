import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';


import './categoriesAdd.html';

import {Categories} from '../../../../api/categories';

class CategoryAdd{
    constructor($scope, $state, CategoriesService){
        'ngInject';

        this.CategoriesService = CategoriesService;

        this.companies = CategoriesService.getCompaniesWithCategories();

        this.newCategory = {
            priceTypes: []
         };
    }

    addHeader(header){
        this.newCategory.priceTypes.push(header);
    }
    
    deleteHeader (name){
        var index = vm.newCategory.priceTypes.indexOf(name);
        vm.newCategory.priceTypes.splice(index, 1);
    }


    addCategory(category){
        this.CategoriesService.add(category);
    }
}
const name = 'categoriesAdd';

export default angular.module(name, [
        angularMeteor,
        uiRouter,
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: CategoryAdd
    }).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('admin.categoriesAdd', {
            url: '/Categories/Add',
            template: '<categories-add></categories-add>'
        });
}