import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './categoriesList.html'
import { Categories } from '../../../../api/categories'


class CategoriesList {
    constructor($scope, $reactive, CompaniesService) {
        'ngInject';

        console.log('enter to categories ctrl');

        $reactive(this).attach($scope);

        this.helpers({
            categories() {
                return Categories.find({});
            },
                companies: () => CompaniesService.getViewModelsForCurrentUser()

    });
    }
    delete(_id, name) {
        swal({
            title: "Jesteś pewien?",
            text: "Próbujesz usunąć kategorię: '" + name + "'. Spowoduje to usunięcie także dowiązań produktów do tej kategorii.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Tak, usuń ją!",
            cancelButtonText: "Anuluj",
            closeOnConfirm: false,
            html: false
        }, function() {
           Categories.remove({_id});
            swal("Usunięto!",
                "Kategoria '" + name + "' została usunięta.",
                "success");
        });
    }
}

const name = 'categoriesList';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: CategoriesList
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('Categories', {
            url: '/Categories',
            template: '<categories-list></categories-list>'
        });
}