/**
 * Created by pawel on 31.05.16.
 */
import angular from 'angular';


class UserService {
    constructor($state, $stateParams, Notification) {
        'ngInject';

        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
    }

    getUserData() {
        let _id = Meteor.userId();
        if (_id) {
            // Meteor.users.update({_id}, {
            //     $set: {
            //         profile: {
            //             userData: {
            //                 name: 'Paweł',
            //                 surname: 'Jurczyński',
            //                 phoneNumber: '667484943',
            //                 city: 'Nierada',
            //                 street: 'Targowa',
            //                 houseNumber: '210',
            //                 flatNumber: ''
            //             }
            //         }
            //     }
            // });

            let userData = Meteor.user().profile.userData || {};

            userData.email = _.first(Meteor.user().emails).address;

            return userData;
        } else {
            this.Notification.error('Nie jesteś zalogowany');
        }
    }

    setUserData(userData){
        let _id = Meteor.userId();
        if (_id) {
            Meteor.users.update({_id}, {
                $set: {
                    profile: {
                        userData
                    }
                }
            });
        }else {
            this.Notification.error('Nie jesteś zalogowany');
        }
    }
}

const name = 'UserService';

export default angular.module(name, [])
    .service(name, UserService);
