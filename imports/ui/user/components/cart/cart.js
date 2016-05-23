import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';


import './cart.html';

class Cart {
    constructor($reactive, $scope, $state, OrdersService, CartService) {
        'ngInject';

        $reactive(this).attach($scope);
        this.CartService = CartService;
        this.cart = CartService.getCart();
        this.total = (cart) => CartService.getTotal(cart);
    }

    deleteFromCart(productId) {
        this.CartService.deleteFromCart(productId);
        this.cart = _.without(this.cart, _.findWhere(this.cart, {_id: productId}));
    }

    saveCart(cart, total) {
        let order = {
            userId: "UserId",
            //orderId: incrementCounter('countCollection', 'defaultCounter'),
            products: CartService.getCart(),
            total: total(cart),
            address: "Przykładowy adres (pozniej pobierany z formularza)"
        }

        swal({
            title: "Jesteś pewien?",
            text: "Przyciskiem zamów potwierdzasz zamówienie.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Zamów",
            cancelButtonText: "Anuluj",
            closeOnConfirm: false,
            html: false
        }, function () {
            OrdersService.addOrder(order);
            CartService.reset();
        });
    }
}


const name = "cart";

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePathForUser(name),
        controllerAs: 'vm',
        controller: Cart
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('user.cart', {
            url: '/Cart',
            template: '<cart></cart>'

        });
}