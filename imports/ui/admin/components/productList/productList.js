import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Utils } from '../../../../utils/Utils';

import './productList.html';
import { Products } from '../../../../api/products';

class ProductList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      products() {
        return Products.find({});
      }
    });
  }
}

const name = 'productList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
]).component(name, {
  templateUrl: Utils.getTemplatePath(name),
  controllerAs: name,
  controller: ProductList
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('Products', {
      url: '/Products',
      template: '<product-list></product-list>'
    });
}
