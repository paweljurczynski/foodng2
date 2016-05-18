import angular from 'angular';
import localStorage from 'angular-local-storage';
import {Products} from '../../../../api/products';
import {Categories} from '../../../../api/categories';

class CartService {
    constructor($state, $stateParams, Notification) {
        'ngInject';

        this.$state = $state;
        this.$stateParams = $stateParams;
        this.Notification = Notification;

        let cart = localStorage.get('cart') ? localStorage.get('cart') : [];
        let currentProduct = _.findWhere(cart, {'_id': productId, 'selectedPriceIndex': priceIndex});


    }

    addToCart (productId, priceIndex) {


            if (currentProduct) {
                currentProduct.qty++;
                this.Notification.success('Dodano do koszyka "' + currentProduct.name + '".');
            } else {
                let product = Products.findOne({_id: productId});
                let productCategory = Categories.findOne({_id: this.product.categoryId});
                this.product.size = productCategory.priceTypes[priceIndex];
                this.product.selectedPriceIndex = priceIndex;
                this.product.qty = 1;
                cart.push(product);
                this.Notification.success('Dodano do koszyka "' + product.name + '".');
            }

            store.set('cart', cart);
        };

        updateCart(newCart) {
            localStorage.set('cart', newCart);
        }

        reset () {
            localStorage.clear('cart');
        }

        deleteFromCart(productId)  {
            cart = _.without(cart, _.findWhere(cart, {_id: productId}));
            this.updateCart(cart);
        }

        getTotal (cart) {
            let total = _.reduce(cart, (acc, product) => {
                let productTotal = product.prices[product.selectedPriceIndex] * product.qty;
                return acc + productTotal;
            }, 0);

            return total;
        }

        getCart () {
            return cart;
        }
    }

    const name = 'CartService';

    export default angular.module(name, [])
.service(name, CartService);
