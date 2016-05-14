/**
 * Created by pawel on 11.05.16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';

import './home.html'

class Home {
    constructor($scope, $reactive) {
        'ngInject';
    }
}

const name = 'home';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: Home
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('Home', {
            url: '/Home',
            template: '<home></home>'
        });
}