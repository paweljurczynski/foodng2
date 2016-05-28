import angular from 'angular';
import {Products} from '../../../api/products';
import {Categories} from '../../../api/categories';

class CartService {
    constructor($state, $stateParams, Notification, localStorageService) {
        'ngInject';

        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;
        this.localStorageService = localStorageService;
        this.cart = localStorageService.get('cart') || [];
            }

    addToCart(productId, priceIndex) {
        let currentProduct = _.findWhere(this.cart, {'_id': productId, 'selectedPriceIndex': priceIndex});
        if (currentProduct) {
            currentProduct.qty++;
            this.Notification.success('Dodano do koszyka "' + currentProduct.name + '".');
        } else {
            let product = Products.findOne({_id: productId});
            let category = Categories.findOne({_id: product.categoryId});
            Object.assign(product, {
                    categoryName: category.name,
                    size: category.priceTypes[priceIndex],
                    selectedPriceIndex: priceIndex,
                    price: product.prices[priceIndex],
                    qty: 1
            });

            console.log('Product from CartService: ', product);

            this.cart.push(product);
            this.Notification.success('Dodano do koszyka "' + product.name + '".');
        }

        this.localStorageService .set('cart', this.cart);
    };

    updateCart(newCart) {
        this.localStorageService .set('cart', newCart);
    }

    clearCart() {
        this.localStorageService .set('cart', []);
        this.cart = [];
    }

    deleteFromCart(productId) {
        this.cart = _.without(this.cart, _.findWhere(this.cart, {_id: productId}));
        this.updateCart(this.cart);
    }

    getTotal(cart = this.getCart()) {
        let total = _.reduce(cart, (acc, product) => {
            let productTotal = product.price * product.qty;
            return acc + productTotal;
        }, 0);

        return total;
    }

    getCart() {
        return this.cart;
    }
}

const name = 'CartService';

export default angular.module(name, [])
    .service(name, CartService);
