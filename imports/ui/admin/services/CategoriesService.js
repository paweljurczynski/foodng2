/**
 * Created by pawel on 11.05.16.
 */
import angular from 'angular';
import {Categories} from '../../../api/categories';
import {Products} from '../../../api/products';

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

    getCompaniesWithCategories  ()  {
        return _.map(this.currentCompanies, company => {
            return {
                _id: company._id,
                name: company.name,
                categories: company.categories
            }
        });
    };


    getCategoryById  (_id)  {
        let category = _.first(Categories.find({_id}).fetch());
        console.log('category', category);
        return category;
}


    delete (_id)  {
        Categories.remove({
            _id
        });
    }


    update  (category)  {
        Categories.update({
                _id: this.$stateParams.id
            }, {
                $set: {
                    name: category.name,
                    priceTypes: category.priceTypes
                }
            },
            (err, doc) => {
                if (err) {
                    this.Notification.error(err.message);
                } else {
                    this.Notification.success('Kategoria "' + category.name + '" zaktualizowana!');
                    this.$state.go('Categories');
                }
            }
        );
    }


    add  (vmCategory) {
        let category = {
            name: vmCategory.name,
            priceTypes: vmCategory.priceTypes,
            companyId: "DsadSdasdDsR3A"
        }

        Categories.insert(category, (err, doc) => {
            if (err) {
                this.Notification.error(err.message);
            } else {
                this.Notification.success('Kategoria "' + category.name + '" dodana!');
                this.$state.go('Categories');
            }
        });
    }


    removeCategory (categoryId)  {
        Categories.remove({
            "_id": categoryId
        });
    }
}
const name = 'CategoriesService';

export default angular.module(name, [])
    .service(name, CategoriesService);