/**
 * Created by pawel on 25.05.16.
 */
import angular from 'angular';
import {Orders} from '../../../api/orders';

class OrdersService {
    constructor($state, $stateParams, Notification, CartService, UserService) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
        this.CartService = CartService;
        this.UserService = UserService;
    }

    createOrder(userData) {
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
            let userFromCurrentUser = Meteor.user().profile.userData;
            if (!userFromCurrentUser || !_.isEqual(userFromCurrentUser, userData)) {
                // swal({
                //     title: 'Czy chcesz zapisać te dane w Twoim profilu?',
                //     text: 'Zamawiąjąc kolejnym razem nie będziesz musiał ich ponownie wprowadzać',
                //     type: "info",
                //     showCancelButton: true,
                //     confirmButtonColor: "#DD6B55",
                //     confirmButtonText: 'Zapisz',
                //     cancelButtonText: 'Anuluj',
                //     closeOnConfirm: false,
                //     html: false
                // }, () => {
                    this.UserService.setUserData(userData);
                //     swal("OK!", "Zapisano!", "success");
                // });
            }
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