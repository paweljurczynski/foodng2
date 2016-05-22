/**
 * Created by pawel on 22.05.16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';
import './orderForm.html';

class OrderForm {
    constructor($scope, $reactive, CartService ) {
        'ngInject';
        $reactive(this).attach($scope);
        this.cart = CartService.getCart();
        this.total = (cart) => CartService.getTotal(cart);
    }
}

const name = 'orderForm';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePathForUser(name),
        controllerAs: 'vm',
        controller: OrderForm
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('user.orderForm', {
            url: '/PotwierdzenieZamowienia',
            template: '<order-form></order-form>'
        });
}