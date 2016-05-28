/**
 * Created by pawel on 28.05.16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './orderList.html';

class OrderList {
    constructor($scope, $reactive, OrdersServiceAdmin) {
        'ngInject';

        $reactive(this).attach($scope);

        this.zmienna = 4;
        
        this.helpers({
            orders: () => OrdersServiceAdmin.getOrders()
        });
    }
}

const name = 'orderList';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: OrderList
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('admin.orders', {
            url: '/Zamowienia',
            template: '<order-list></order-list>'
        });
}
