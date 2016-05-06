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
  
  delete(_id, name){
    swal({
      title: "Jesteś pewien?",
      text: "Próbujesz usunąć " + name + ".",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Tak, usuń go!",
      cancelButtonText: "Anuluj",
      closeOnConfirm: false,
      html: false
    }, function() {
      Products.remove({
        _id
      });
      swal("Usunięto!",
          "Produkt " + name + " został usunięty.",
          "success");
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
