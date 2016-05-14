import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './productList.html';
import {Products} from '../../../../api/products';

class ProductList {
    constructor($scope, $reactive, CompaniesService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.zmienna = 4;
        
        this.helpers({
            products() {
                return Products.find({});
            },
            companies: () => CompaniesService.getViewModelsForCurrentUser()
        });
    }

    delete(_id, name) {
        swal({
            title: "Jesteś pewien?",
            text: "Próbujesz usunąć " + name + ".",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Tak, usuń go!",
            cancelButtonText: "Anuluj",
            closeOnConfirm: false,
            html: false
        }, function () {
            Products.remove({
                _id
            });
            swal("Usunięto!",
                "Produkt " + name + " został usunięty.",
                "success");
        });
    }
}

const name = 'productList';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: ProductList
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('admin.products', {
            url: '/Products',
            template: '<product-list></product-list>'
        });
}
