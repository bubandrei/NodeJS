import expressHandlebars from 'express-handlebars';
import express from 'express';
const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
let app = express();
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

///////////////////////////////////////////////////
///HANDLEBARS/////////////////////////////
// layout change
// app.get('/page/1/', (req, res) => {
//     res.render('index', {
//       layouts: 'main'
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

////////////////////////////////////////////////////////
//if/else
// app.get('/page/1/', (req, res) => {
//     res.render('index', {
//         show1: true,
//         show2: false,
//         show3: true,
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// });


/////////////////////////////////////////////////
//each
// let product = ['prod1', 'prod2', 'prod3'];
// app.get('/page/1/', (req, res) => {
//     res.render('index', { product });
// });
// app.listen(3000, () => {
//     console.log('Running');
// });


//////////////////////////////////////////////////
// app.get('/page/1/', (req, res) => {
//     res.render('index', {product});
// });
// app.listen(3000, () => {
//     console.log('Running');
// })

/////////////////////////////////////////////////////
//arr
// let products = ['prod1', 'prod2', 'prod3'];

// app.get('/page/1/', (req, res) => {
//     res.render('index', {products});
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

////////////////////////////////////////////////////
// let product = {
// 	name: 'prod',
// 	cost: 1000
// }

// app.get('/page/1/', (req, res) => {
//     res.render('index', {product});
// });
// app.listen(3000, () => {
//     console.log('Running');
// })


///////////////////////////////////////////////////
// app.get('/page/1/', (req, res) => {
//     console.log(req);
//     res.render('index.hbs');
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

//////////////////////////////////////////////////////////////
//title
// let titles = {
//     index: '?????????????? ????????????????',
//     about: '?? ??????',
//     conctacs: '????????????????',
//     price: '?????? ??????????'
// }
// app.get('/page/:page/', (req, res) => {
//     let name = req.params.page;
//     res.render(name, { title: titles[name] });
// });
// app.listen(3000, () => {
//     console.log('Running');
// })
//////////////////////////////////////////////////////////////////
//tags
// app.get('/page/1/', (req, res) => {
//     res.render('page1', {text: '<b>aaa</b>'});
// });
// app.listen(3000, () => {
//     console.log('Running');
// })

//////////////////////////////////////////////////////////////////////
//Data transfer
// let obj = {
//     picture: 'image.png',
//     url: 'https://www.google.com/',
//     text1: 'Hello'
// };
// app.get('/page/1/', (req, res) => {
//     res.render('page1', obj);
// });
// app.listen(3000, () => {
//     console.log('Running');
// })

//////////////////////////////////////////////////////////////////////
//content in five variables
// let obj = {
//     text1: 'aaaaa', text2: 'bbbbb', text3: 'ccccc', text4: 'ddddd', text5: 'eeeee'
// }
// app.get('/page/1/', (req, res) => {
//     res.render('page1', obj);
// });
// app.listen(3000, () => {
//     console.log('Running');
// });




// app.get('/page/:page/', (req, res) => {
//     let num = req.params.page;
//     if (num > 0 && num < 4) {
//         res.render('page' + num);
//     } else {
//         res.status(404).send('not found');
//     }
// })
// app.listen(3000, () => {
//     console.log('Running');
// });