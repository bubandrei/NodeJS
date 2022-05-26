import expressHandlebars from 'express-handlebars';
import express from 'express';


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

let app = express();
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.get('/page/1/', (req, res) => {
    res.render('index');
});
app.listen(3000, () => {
    console.log('Running');
})