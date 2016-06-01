import angular from 'angular';
import angularMeteor from 'angular-meteor';

import 'sweetalert/dist/sweetalert.css';
import 'sweetalert/dist/sweetalert.min.js';

import 'angular-ui-notification/dist/angular-ui-notification.min.css';
import '../imports/utils/error-messages';

import 'angular-i18n/angular-locale_pl-pl';
import {name as appAdmin} from '../imports/ui/admin/components/_app/app';
import {name as appUser} from '../imports/ui/user/components/_app/app';

import uiRouter from 'angular-ui-router';

class MainView {}

const name = 'app';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    'accounts.ui',
    appAdmin,
    appUser
]).component(name, {
        controllerAs: 'vm',
        controller: MainView
    })
    .config(config);


function config($locationProvider, $urlRouterProvider, $stateProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('admin', {
            url: '/Admin',
            templateUrl: 'imports/ui/admin/components/_app/layout.html'
        })
        .state('user', {
            url: '/User',
            templateUrl: 'imports/ui/user/components/_app/layout.html'
        });

    $urlRouterProvider.otherwise('/User/Restauracje');
}
