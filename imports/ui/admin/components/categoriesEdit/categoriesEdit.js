import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './categoriesEdit.html';

import {Categories} from '../../../../api/categories';


class CategoryEdit {
    constructor($scope, $stateParams, $reactive, $state, CategoriesService) {
        'ngInject';

        let reactiveContext = $reactive(this).attach($scope);
        this.CategoriesService = CategoriesService;
        this.editingCategory = CategoriesService.getCategoryById($stateParams.id);
    }

    addHeader(name) {
        this.editingCategory.priceTypes.push(name);
    }

    deleteHeader(name) {
        let index = this.editingCategory.priceTypes.indexOf(name);
        this.editingCategory.priceTypes.splice(index, 1);
    }

    updateCategory(category) {
        this.CategoriesService.update(category);
    }

}


const name = 'categoriesEdit';

export default angular.module(name, [
        angularMeteor,
        uiRouter,
    ]).component(name, {
            templateUrl: Utils.getTemplatePath(name),
            controllerAs: 'vm',
            controller: CategoryEdit
        }
    ).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('CategoryEdit', {
            url: '/Categories/Edit/:id',
            template: '<categories-edit></categories-edit>'
        });
}