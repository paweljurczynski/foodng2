/**
 * Created by pawel on 11.05.16.
 */
import angular from 'angular';
import {Companies} from '../../../api/companies';
import {Categories} from '../../../api/categories';
import {Products} from '../../../api/products';

class CompaniesService {
    constructor($state, $stateParams, Notification) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
        this.currentCompany = Companies.findOne({
            "ownerId": "TempId"
        });
    }

    getCurrentCompanyId() {
        console.log(currentCompany);
        return this.currentCompany._id;
    }

    getCompaniesForCurrentUser() {
        console.log(this.getCurrentCompanyId());
        return Companies.find({
            _id: this.getCurrentCompanyId()
        }).fetch();
    }

    getViewModelForCompany(company) {
        let vmCompany = {
            _id: company._id,
            name: company.name,
            categories: this._getCategoriesWithProducts(company)
        };

        return vmCompany;
    }

    getViewModelsForCurrentUser() {
        let currentCompany = Companies.findOne({
            "ownerId": "TempId"
        });

        var arr = [1,2,3];
        

        console.log(Companies.find().fetch(), currentCompany);

        let result = _.map(Companies.find().fetch(), () => {
            return this.getViewModelForCompany(currentCompany);
        });

        console.log(result);

        return result;
    }

    _getCategoriesWithProducts(company) {
        let productsForThisCompany = Products.find({
            "companyId": company._id
        }).fetch();
        let categoriesForThisCompany = Categories.find({
            "companyId": company._id
        }).fetch();

        let viewModelCategories = _.map(categoriesForThisCompany, (category) => {
            let viewModelProducts = [];
            _.each(productsForThisCompany, (product) => {

                let isCategoryInProduct = product.categoryId === category._id;
                if (isCategoryInProduct) {
                    viewModelProducts.push(product);
                }
            });
            return {
                _id: category._id,
                name: category.name,
                priceTypes: category.priceTypes,
                products: viewModelProducts
            };
        });

        return viewModelCategories;
    }
}
const name = 'CompaniesService';

export default angular.module(name, [])
    .service(name, CompaniesService);