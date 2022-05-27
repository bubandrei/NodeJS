import expressHandlebars from 'express-handlebars';
import express from 'express';
import { appendFile } from 'fs';

//////////////////////////////////////////////////////////////////
//Local Helpers in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         date: function (newDate) {
//             return newDate.split('-').reverse().join('-');
//         }

//     }
// })

// let app = express();
// app.engine('hbs', handlebars.engine);
// app.set('view engine', 'hbs');

// app.get('/page/1/', (req, res) => {
//     res.render('index', {
//         date1: '12 - 03 - 2032',
//         date2: '13 - 04 - 2043',
//         date3: '14 - 05 - 2054',
//         helpers: {
//             year: function () {
//                 return this.date1;
//             }
//         }
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// })


///////////////////////////////////////////////////////////
//HTML code generation in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         link: function (href, ancor) {
//             return '<a href="' + href + '">' + ancor + '</a>';
//         }
//     }
// });

// let app = express();
// app.engine('hbs', handlebars.engine);
// app.set('view engine', 'hbs');

// app.get('/page/1/', (req, res) => {
//     res.render('index');
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         sum: function () {
//             return this.name + '-' + this.cost + ' amount ' + this.amount + ' value ' + this.cost * this.amount;
//         }
//     }
// });

// let app = express();
// app.engine('hbs', handlebars.engine);
// app.set('view engine', 'hbs');

// app.get('/page/1/', (req, res) => {
//     res.render('index', {
//         purchases: [
//             {
//                 name: 'purch1',
//                 cost: 1000,
//                 amount: 5
//             },
//             {
//                 name: 'purch2',
//                 cost: 2000,
//                 amount: 6
//             },
//             {
//                 name: 'purch3',
//                 cost: 3000,
//                 amount: 7
//             },
//         ],
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

///////////////////////////////////////////////////////////////
//Passing Objects to Helpers in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         sum: function (purchase) {
//             return purchase.cost * purchase.amount;
//         }
//     }
// });

// let app = express();
// app.engine('hbs', handlebars.engine);
// app.set('view engine', 'hbs');

// app.get('/page/1/', (req, res) => {
//     res.render('index', {
//         purchase: {
//             name: 'food',
//             cost: 1000,
//             amount: 5
//         }
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

///////////////////////////////////////////////////////////////
//Helper combinations in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         square: function (num) {
//             return num * num;
//         },
//         cube: function (num) {
//             return num * num * num;
//         },
//         sum: function (num1, num2) {
//             return num1 + num2;
//         }
//     }
// })

// let app = express();
// app.engine('hbs', handlebars.engine);
// app.set('view engine', 'hbs');

// app.get('/page/1/', (req, res) => {
//     res.render('index');
// });
// app.listen(3000, () => {
//     console.log('Running');
// })

/////////////////////////////////////////////////////////////
//Helper context in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         date: function () {
//             return this.split('-').reverse().join('-');
//         }
//     }
// })
// let app = express();
// app.engine('hbs', handlebars.engine);
// app.set('view engine', 'hbs');
// let obj = {
//     date1: '12 - 03 - 2027',
//     date2: '13 - 04 - 2028',
//     date3: '14 - 05 - 2029'
// }
// app.get('/page/1/', (req, res) => {
//     res.render('index', {obj});
// });
// app.listen(3000, () => {
//     console.log('Running');
// })

/////////////////////////////////////////////////////////////
//Passing Parameters to Helpers in Handlebars with variables

// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         date: function (newDate) {
//             return newDate.split('-').reverse().join('-');
//         }

//     }
// })

// let app = express();
// app.engine('hbs', handlebars.engine);
// app.set('view engine', 'hbs');

// app.get('/page/1/', (req, res) => {
//     res.render('index', {
//         date1: '12 - 03 - 2022',
//         date2: '13 - 04 - 2023',
//         date3: '14 - 05 - 2024'
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// })
/////////////////////////////////////////////////////////////
//Passing Parameters to Helpers in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         date: function (newDate) {
//             return newDate.split('-').reverse().join('-');
//         }

//     }
// })

/////////////////////////////////////////////////////////////
//Passing Parameters to Helpers in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         word: (str) => {
//             return str[0].toUpperCase() + str.slice(1);
//         }
//     }
// })

/////////////////////////////////////////////////////////////
//Passing Parameters to Helpers in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         sum: function (num1, num2, num3) {
//             return num1 + num2 + num3;
//         }
//     }
// })



/////////////////////////////////////////////////////////////
//Passing Parameters to Helpers in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         num: function (number) {
//             return Math.round(number);
//         }
//     }
// });

/////////////////////////////////////////////////////////////
//Passing Parameters to Helpers in Handlebars
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         square: function (num) {
//             return Math.sqrt(num);
//         }
//     }
// });

////////////////////////////////////////////////////////////
// helpers getDate
// const handlebars = expressHandlebars.create({
//     defaultLayout: 'main',
//     extname: 'hbs',
//     helpers: {
//         getDate: function () {
//             let date = new Date();

//             let year = date.getFullYear();
//             let month = date.getMonth() + 1;
//             let day = date.getDate();

//             return year + '-' + month + '-' + day;
//         }
//     }
// });

// let app = express();
// app.engine('hbs', handlebars.engine);
// app.set('view engine', 'hbs');

// app.get('/page/1/', (req, res) => {
//     res.render('index');
// });
// app.listen(3000, () => {
//     console.log('Running');
// })