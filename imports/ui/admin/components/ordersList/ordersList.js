import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './ordersList.html';
import {Orders} from '../../../../api/orders';

class OrdersList {
    constructor($scope, $reactive, OrdersService){
        'ngInject';

        $reactive(this).attach($scope);
        
        this.OrdersService = OrdersService;

        this.helpers({
            orders: () => {
                let orders = OrdersService.getOrders();
                orders.observeChanges({
                    added: (id, fields) => {
                        console.log('Added');
                    },
                    changed: (id, fields) => {
                        console.log('Changed');
                    },
                    removed: () => {
                        console.log('doc removed');
                    }
                });
                return orders;
            }
        });

    }
}

const name = 'ordersList';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: OrdersList
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('admin.ordersList', {
            url: '/Orders',
            template: '<orders-list></orders-list>'
        });
}