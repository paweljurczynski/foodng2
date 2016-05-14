import angular from 'angular';
import {Points} from '../../../api/points';

class PointsService{
    constructor($state, $stateParams, Notification) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
        let editingPoint = {};
        this.editingPoint = editingPoint;


        Meteor.subscribe("points");
    }



    getPoints() {
        return Points.find({
            companyId: "DsadSdasdDsR3A"
        });
    }

    getLocalizationForCurrentPoint () {
        let result = editingPoint.location.address;
        console.log(result);
        return result;
    }

    add (point) {
        point.companyId = "DsadSdasdDsR3A";
        Meteor.call('addPoint', point, function(err, data) {
            if (err) {
                this.Notification.error(err.message);
            } else {
                this.Notification.success('Punkt "' + point.name + '" dodany!');
                this.$state.go('Points');
            }
        });
    }

    remove (pointId) {
        Meteor.call('removePoint', pointId, (err, results) => {
            if (err) {
                this.Notification.error(err.message);
            } else {
                swal("Usunięto!",
                    "Punkt '" + name + "' został usunięty.",
                    "success");
            }
        })
    }

    update (point) {
        Meteor.call('updatePoint', $stateParams.id, point, (err, doc) => {
            if (err) {
                this.Notification.error(err.message);
            } else {
                this.Notification.success('Punkt "' + point.name + '" zaktualizowany!');
                this.$state.go('Points');
            }
        });
    }

    getPointById (_id) {
        editingPoint = Points.findOne({
            _id
        });
        return editingPoint;
    }
}
const name = 'PointsService';

export default angular.module(name, [])
    .service(name, PointsService);
