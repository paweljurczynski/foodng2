/**
 * Created by pawel on 10.05.16.
 */
import { Mongo } from 'meteor/mongo';

const Orders = new Mongo.Collection("orders");

// let OrdersSchema =  new SimpleSchema({
//     "companyId": {
//         type: String,
//         label: "Firma"
//     },
//     "name": {
//         type: String,
//         label: "Nazwa punktu",
//         min: 3
//     },
//     "location": {
//         type: Object,
//         label: "Lokalizacja"
//     },
//     "location.type": {
//         label: "Typ lokalizacji",
//         type: String
//     },
//     "location.address": {
//         label: "Adres punktu",
//         type: String
//     },
//     "location.coordirnates": {
//         label: "Wspolrzedne",
//         type: [Number],
//         minCount: 2,
//         decimal: true
//     }
// });

Orders.allow({
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

export { Orders }
