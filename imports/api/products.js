import { Mongo } from 'meteor/mongo';

const Products = new Mongo.Collection('products');

ProductsSchema = new SimpleSchema({
    "companyId": {
        type: String,
        label: "Firma"
    },
    "name": {
        type: String,
        label: "Nazwa"
    },
    "ingredients": {
        type: [String],
        label: "Składniki",
        optional: true
    },
    "prices": {
        type: [Number],
        label: "Ceny",
        minCount: 1,
        decimal: true
    },
    "categoryId": {
        type: String,
        label: "Kategoria"
    }
});

Products.attachSchema(ProductsSchema);

Products.allow({
    insert: () => {
        return true;
    },
    update: () => {
        return true;
    },
    remove: () => {
        return true;
    }
});

export { Products };
