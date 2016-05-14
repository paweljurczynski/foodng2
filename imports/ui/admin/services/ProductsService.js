import angular from 'angular';
import {Products} from '../../../api/products';

class ProductsService {
    constructor($state, $stateParams, Notification) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
    }

    add(vmProduct) {
        let product = this.prepareProduct(vmProduct);

        Products.insert(product, (err, doc) => {
            if (err) {
                this.Notification.error(err.message);
            } else {
                this.Notification.success('Produkt "' + vmProduct.name + '" dodany!');
                this.$state.go('admin.products');
            }
        });
    }

    update(vmProduct) {
        let product = this.prepareProduct(vmProduct, true);
        Products.update({
                _id: this.$stateParams.id
            }, {
                $set: {
                    name: product.name,
                    ingredients: product.ingredients,
                    categoryId: product.categoryId,
                    prices: product.prices
                }
            },
            (err, doc) => {
                if (err) {
                    this.Notification.error(err.message);
                } else {
                    this.Notification.success('Produkt "' + vmProduct.name + '" zaktualizowany!');
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