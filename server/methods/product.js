/**
 * Created by Karol on 19.07.2016.
 */
import {Meteor} from 'meteor/meteor'
import {Products} from '../../imports/api/products'

Meteor.methods({
    'products.add': (product) => {
        Products.insert({
            companyId: "DsadSdasdDsR3A",
            name: product.name,
            categoryId: product.categoryId,
            prices: prices,
            ingredients: product.ingredients
        });
    },
    'products.update': (product) => {
        Products.update({
                _id: this.$stateParams.id
            }, {
                $set: {
                    name: product.name,
                    ingredients: product.ingredients,
                    categoryId: product.categoryId,
                    prices: product.prices
                }
            }
        );
    }
    
});