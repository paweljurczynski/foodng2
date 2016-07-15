/**
 * Created by pawel on 11.05.16.
 */
import angular from 'angular';
import {Categories} from '../../../api/categories';
import {Products} from '../../../api/products';
import {Meteor} from 'meteor/meteor';

class CategoriesService {
    constructor($state, $stateParams, Notification, CompaniesService) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
        this.CompaniesService = CompaniesService;
        this.currentCompanies = CompaniesService.getViewModelsForCurrentUser();
    }

    getCategories() {
        return Categories.find().fetch();
    }

    getCompaniesWithCategories() {
        return _.map(this.currentCompanies, company => {
            return {
                _id: company._id,
                name: company.name,
                categories: company.categories
            }
        });
    };

    getCategoryById(_id) {
        let category = _.first(Categories.find({_id}).fetch());
        console.log('category', category);
        return category;
    }

    update(category) {
        Meteor.call('categories.update', category, err => {
            if (err) {
                this.Notification.error(err.message);
            } else {
                this.Notification.success('Kategoria "' + category.name + '" zaktualizowana!');
                this.$state.go('admin.categories');
            }
        });
    }

    add(category) {
        Meteor.call('categories.add', category, (err,res) => {
            if (err) {
                this.Notification.error(err.message);
            } else {
                this.Notification.success('Kategoria "' + category.name + '" dodana!');
                this.$state.go('admin.categories');
            }
        });
    }

    remove(id) {
        Meteor.call('categories.remove', id, err => {
            if (err) {
                this.Notification.error(err.message);
            } else {
                this.Notification.success('Kategoria usunięta!');
            }
        });
    }
}
const name = 'CategoriesService';

export default angular.module(name, [])
    .service(name, CategoriesService);