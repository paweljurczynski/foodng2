import { Meteor } from 'meteor/meteor';
import { Products } from '../api/products';

Meteor.startup(() => {

  if (Products.find().count() === 0) {
    let products = [{
      companyId: "DsadSdasdDsR3A",
      name: 'Margerita',
      ingredients: ['sos pomidorowy', 'mozzarella', 'świeża bazylia'],
      prices: [13.50, 18.50],
      categoryId: "Yhe9QSLoo9Gpumxkp",
    }, {
      companyId: "DsadSdasdDsR3A",
      name: 'Capricciosa',
      ingredients: ['sos pomidorowy', 'mozzarella', 'szynka', 'pieczarki', 'cebula', 'zioła'],
      prices: [17.50, 22.50],
      categoryId: "Yhe9QSLoo9Gpumxkp"
    }, {
      companyId: "DsadSdasdDsR3A",
      name: 'Carbonara',
      ingredients: ['sos śmietanowy', 'mozzarella', 'parmezan', 'bekon', 'pieczarki', 'cebula', 'świeżo mielony pieprz'],
      prices: [15.50, 26.50],
      categoryId: "Yhe9QSLoo9Gpumxkp"
    }, {
      companyId: "DsadSdasdDsR3A",
      name: 'Jakas mega pizza',
      ingredients: ['sos śmietanowy', 'mozzarella', 'parmezan', 'bekon', 'pieczarki', 'cebula', 'świeżo mielony pieprz'],
      prices: [null, null, 30],
      categoryId: "Yhe9QSLoo9Gpumxkp"
    }, {
      companyId: "DsadSdasdDsR3A",
      name: 'Sprite',
      ingredients: [],
      prices: [3, 5],
      categoryId: "NHw74zTyWvM6kDqde"
    }, {
      companyId: "DsadSdasdDsR3A",
      name: 'Coca-Cola',
      ingredients: [],
      prices: [4, 6],
      categoryId: "NHw74zTyWvM6kDqde"
    }, {
      companyId: "DsadSdasdDsR3A",
      name: '7up',
      ingredients: [],
      prices: [null, 6],
      categoryId: "NHw74zTyWvM6kDqde"
    }, {
      companyId: "DsadSdasdDsR3A",
      name: 'Pita z kurczakiem',
      ingredients: ['sos śmietanowy', 'mozzarella', 'parmezan', 'bekon', 'pieczarki'],
      prices: [10],
      categoryId: "KRkFRmxZy7Rprpfwz"
    }, {
      companyId: "DsadSdasdDsR3A",
      name: 'Pita teściowej ',
      ingredients: ['sos śmietanowy', 'mozzarella', 'parmezan', 'bekon', 'pieczarki'],
      prices: [11],
      categoryId: "KRkFRmxZy7Rprpfwz"
    }];

    _.each(products, product => Products.insert(product));
  }
});
