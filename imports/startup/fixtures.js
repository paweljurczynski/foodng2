import {Meteor} from 'meteor/meteor';
import {Products} from '../api/products';
import {Categories} from '../api/categories';
import {Companies} from '../api/companies';

Meteor.startup(()=> {
    if (Meteor.isServer) {
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

        if (Categories.find().count() === 0) {
            let categories = [{
                _id: "Yhe9QSLoo9Gpumxkp",
                companyId: "DsadSdasdDsR3A",
                name: 'Pizza',
                priceTypes: ['Średnia (30 cm)', 'Duża (40 cm)', 'Mega (50 cm)']
            }, {
                _id: "NHw74zTyWvM6kDqde",
                companyId: "DsadSdasdDsR3A",
                name: 'Napoje',
                priceTypes: ['Mały (0.5 L)', 'Duży (1 L)']
            }, {
                _id: "KRkFRmxZy7Rprpfwz",
                companyId: "DsadSdasdDsR3A",
                name: 'Pity',
                priceTypes: ['Cena']
            }];


            _.each(categories, category => Categories.insert(category));
        }

        // if (Points.find().count() === 0) {
        //     let points = [{
        //         companyId: "DsadSdasdDsR3A",
        //         name: "Pizzeria Piecykowa - Nierada"
        //         // sellers: [],
        //         // workers: []
        //     }, {
        //         companyId: "DsadSdasdDsR3A",
        //         name: "Pizzeria Piecykowa - Wrzosowa"
        //         // sellers: [],
        //         // workers: []
        //     }];

        //     _.each(points, point => Points.insert(point));
        // }

        if (Companies.find().count() === 0) {
            let companies = [{
                _id: "DsadSdasdDsR3A",
                ownerId: "TempId",
                name: "Pizzeria Piecykowa"
            }];

            _.each(companies, company => Companies.insert(company));
        }
    }
});
