import angular from 'angular';
import {Products} from '../../../api/products';

class ProductsService {
    constructor($state, $stateParams, Notification) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
    }

    add(product) {

        Meteor.call('products.add', product, (err, doc) => {
            if (err) {
                this.Notification.error(err.message);
            } else {
                this.Notification.success('Produkt "' + product.name + '" dodany!');
                this.$state.go('admin.products');
            }
        });
    }

    update(product) {
            Meteor.call('products.update', product, (err, doc) => {
                if (err) {
                    this.Notification.error(err.message);
                } else {
                    this.Notification.success('Produkt "' + product.name + '" zaktualizowany!');
                    this.$state.go('admin.products');
                }
            }
        );
    }

    getProductById(productId) {
        return _.first(Products.find({_id: productId}).fetch());
    }

    getUniqIngredients() {
        return _.uniq(_.flatten(Products.find().fetch().map(x => x.ingredients)));
    }

    prepareProduct(product, isEdit = false) {
        let prices = _.toArray(product.prices);

        let vmProduct = {
            companyId: "DsadSdasdDsR3A",
            name: product.name,
            categoryId: product.categoryId,
            prices: prices,
            ingredients: product.ingredients,
        }

        return vmProduct;
    }
}
const name = 'ProductsService';

export default angular.module(name, [])
    .service(name, ProductsService);