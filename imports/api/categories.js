/**
 * Created by pawel on 06.05.16.
 */
import { Mongo } from 'meteor/mongo';

const Categories = new Mongo.Collection('categories');

let CategoriesSchema = new SimpleSchema({
    "companyId": {
        type: String,
        label: "Firma"
    },
    "name": {
        type: String,
        label: "Nazwa kategorii",
        min: 3
    },
    "priceTypes": {
        type: [String],
        label: "Nagłówki cennika",
        minCount: 1,
        defaultValue: ["Cena"]
    }
});

Categories.attachSchema(CategoriesSchema);

Categories.allow({
    insert: () => {
        return true;
    },
    update: () => {
        return true;
    },
    remove: () => {
        return true;
    }
})

export { Categories };