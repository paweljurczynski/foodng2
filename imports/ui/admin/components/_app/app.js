import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import Notifications from 'angular-ui-notification';
import 'checklist-model';

import {Utils} from '../../../../utils/Utils';
import './layout.html';

//AdminLTE
import 'jquery-slimscroll/jquery.slimscroll.js';
import 'admin-lte/dist/js/app.js';

//COMPONENTS
import {name as ProductList} from '../productList/productList';
import {name as ProductAdd} from '../productAdd/productAdd';
import {name as ProductEdit} from '../productEdit/productEdit';
import {name as CategoriesList} from '../categoriesList/categoriesList';
import {name as CategoryAdd}    from '../categoriesAdd/categoriesAdd';
import {name as CategoryEdit} from '../categoriesEdit/categoriesEdit';
import {name as OrderList} from '../orderList/orderList';

//SERVICES
import {name as ProductsService} from '../../services/ProductsService';
import {name as CompaniesService} from '../../../common/services/CompaniesService';
import {name as CategoriesService} from '../../services/CategoriesService';
import {name as OrdersServiceAdmin} from '../../services/OrdersServiceAdmin';

class appAdmin {
}

const name = 'appAdmin';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngAnimate,
    Notifications,
    'checklist-model',
    //COMPONENTS
    ProductList,
    ProductAdd,
    ProductEdit,
    CategoriesList,
    CategoryAdd,
    CategoryEdit,
    OrderList,
    //SERVICES
    ProductsService,
    CompaniesService,
    CategoriesService,
    OrdersServiceAdmin
]).component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: name,
        controller: appAdmin
    })
    .config(config);

function config($locationProvider, $urlRouterProvider, NotificationProvider, $stateProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/admin/products');

    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 60,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });

}