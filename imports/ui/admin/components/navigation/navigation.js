import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Utils } from '../../../../utils/Utils';
import './navigation.html';

const name = 'navigation';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl: Utils.getTemplatePath(name),
  controllerAs: name
});
