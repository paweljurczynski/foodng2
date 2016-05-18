import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';


import './cartList.html';

class CartList{
    constructor ($reactive, $scope, $state, OrdersService, CartService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.cart = CartService.getCart();

        this.total(cart)
        CartService.getTotal(cart);
    }

        deleteFromCart (productId) {
            CartService.deleteFromCart(productId);
            this.cart = _.without(this.cart, _.findWhere(this.cart, { _id: productId }));
             swal({
                title: "Jesteś pewien?",
                 text: "Próbujesz produkt ze swojego koszyka.",
                 type: "warning",
                 showCancelButton: true,
                 confirmButtonColor: "#DD6B55",
                 confirmButtonText: "Tak, usuń go!",
                cancelButtonText: "Anuluj",
                 closeOnConfirm: false,
                 html: false
             }, function () {
                 CartService.deleteFromCart(productId);
                swal("Usunięto!",
                     "Produkt został usunięty z koszyka",
                     "success");
             });
        }

        saveCart (cart, total) {
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








const name = "cartList";

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePathForUser(name),
        controllerAs: 'vm',
        controller: CartList
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('user.cartList', {
            url: '/Cart',
            template: '<cart-list></cart-list>'

        });
}