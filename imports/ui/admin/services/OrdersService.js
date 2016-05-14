import {Meteor} from 'meteor/meteor';
import angular from 'angular';
import {Orders} from '../../../api/orders';

class OrdersService {
    constructor($state, $stateParams, Notification) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;

        Meteor.subscribe('orders');

    }



    addOrder (order) {
    Meteor.call('addOrder', order, (err, results) => {
        if (err) {
            this.Notification.error(err.message);
        } else {
            this.Notification.success('Złożyłes zamowienie!');
            this.$state.go('Products');
        }
    });
}

    getOrders(){
    return Orders.find();
}

    delete(orderId) {
    Orders.remove({
        _id: orderId
    });
}
}

const name = 'OrdersService';

export default angular.module(name, [])
    .service(name, OrdersService);
