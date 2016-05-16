import { Mongo } from 'meteor/mongo';

const Points = new Mongo.Collection("points");

let PointsSchema = new SimpleSchema({
   // "companyId": {
     //   type: String,
       // label: "Firma"
   // },
    "name": {
        type: String,
        label: "Nazwa punktu",
        min: 3
    },
   // "location": {
      //  type: Object,
       // label: "Lokalizacja"
  // },
   // "locationtype": {
     //   label: "Typ lokalizacji",
      //  type: String
    //},
    "locationaddress": {
        label: "Adres punktu",
        type: String
    },
    "locationcoordirnates": {
        label: "Wspolrzedne",
        type: [Number],
        minCount: 2,
        decimal: true
   }
});

Points.attachSchema(PointsSchema);

Points.allow({
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

export { Points };
