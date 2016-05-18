import angular from 'angular';
import {Products} from '../../../../api/products';
import {Categories} from '../../../../api/categories';

class OrdersService {
    constructor (Notification, $state) {
        'ngInject';

        this.$state = $state;
        this.Notification = Notification;
        Meteor.subscribe('orders');

    }

    addOrder (order)
        {
            Meteor.call('addOrder', order, (err, results) => {
                if (err) {
                    this.Notification.error(err.message);
                } else {
                    this.Notification.success('Złożyłes zamowienie!');
                    this.$state.go('Products');
                }
            });
        }


    getOrders () {
    return orders.find();
}

    delete (orderId) {
    this.orders.remove({
        _id: orderId
    });
}
}


const name = "OrdersService";

export default angular.module(name, [])
    .service(name, OrdersService);