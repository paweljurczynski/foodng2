/**
 * Created by pawel on 25.05.16.
 */
import angular from 'angular';
import {Orders} from '../../../api/orders';

class OrdersService {
    constructor($state, $stateParams, Notification, CartService) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
        this.CartService = CartService;
    }

    createOrder(userData, total){
        console.log(userData, total);
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
        }, () => {
            Orders.insert({
                userData,
                total: this.CartService.getTotal(),
                products: this.CartService.getCart()
            });
            this.CartService.clearCart();
            swal("Zrobione!",
                "Zamówienie złożone.",
                "success");
        });

    }
}
const name = 'OrdersService';

export default angular.module(name, [])
    .service(name, OrdersService);