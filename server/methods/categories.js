import {Meteor} from 'meteor/meteor';
import {Categories} from '../../imports/api/categories';

Meteor.methods({
    'categories.add': (category) => {
        Categories.insert({
            name: category.name,
            priceTypes: category.priceTypes,
            companyId: "DsadSdasdDsR3A"
        });
    },
    'categories.update': (category) => {
        Categories.update({
            _id: this.$stateParams.id
        }, {
            $set: {
                name: category.name,
                priceTypes: category.priceTypes
            }
        });
    },
    'categories.remove': (_id) => {
        Categories.remove({ _id });
    }
});
