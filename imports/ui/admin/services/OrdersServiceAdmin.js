/**
 * Created by pawel on 28.05.16.
 */
import angular from 'angular';
import {Orders} from '../../../api/orders';

class OrdersServiceAdmin {
    constructor($state, $stateParams, Notification) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
    }

    getOrders(){
        return Orders.find();
    }

}
const name = 'OrdersServiceAdmin';

export default angular.module(name, [])
    .service(name, OrdersServiceAdmin);