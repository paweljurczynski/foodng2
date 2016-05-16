import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Utils} from '../../../../utils/Utils';
import './pointsList.html';

import {Points} from '../../../../api/points';

class PointsList {
    constructor ($reactive, $scope, PointsService) {
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
            // points: () => PointsService.getPoints()
            points(){
                return Points.find();
            }
        });
    }
        delete (pointId, name)
        {
            swal({
                title: "Jesteś pewien?",
                text: "Próbujesz usunąć punkt '" + name + "' ze swojej firmy",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Tak, usuń go!",
                cancelButtonText: "Anuluj",
                closeOnConfirm: false,
                html: false
            }, function () {
                PointsService.remove(pointId);
            });
        }

}

const name = 'pointsList';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: Utils.getTemplatePath(name),
        controllerAs: 'vm',
        controller: PointsList
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('admin.points', {
            url: '/Points',
            template: '<points-list></points-list>'
        });
}

