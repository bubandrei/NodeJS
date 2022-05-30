import expressHandlebars from 'express-handlebars';
import express from 'express';
import bodyParser from 'body-parser';
const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
let app = express();
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});
app.post('/', (req, res) => {
    res.render('form', {
        body: req.body
    });
});
app.listen(3000, () => {
    console.log('Running');
});



/////////////////////////////////////////////////////////
//texarea
// app.get('/', (req, res) => {
//     res.render('form');
// });
// app.post('/', (req, res) => {
//     res.render('form', {
//         body: req.body
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

////////////////////////////////////////////////////////
//textarea in express
// app.get('/', (req, res) => {
//     res.render('form');
// });
// app.post('/', (req, res) => {
//     res.send(req.body.review);
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

//////////////////////////////////////////////////////////////////
//Save form value after POST in Express
// app.get('/', (req, res) => {
//     res.render('form');
// });
// app.post('/', (req, res) => {
//     res.render('form', {
//         body: req.body
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

//////////////////////////////////////////////////////////////////
//Sending a form using the POST method in Express
// app.get('/', (req, res) => {
//     res.render('form');
// });
// app.post('/', (req, res) => {
//     res.send(`${req.body.name} ${req.body.country} ${req.body.city}`);
// });
// app.listen(3000, () => {
//     console.log('Running');
// });



//////////////////////////////////////////////////////////////
//Sending a form using the POST method in Express
// app.get('/', (req, res) => {
//     res.render('form');
// });
// app.post('/target/', (req, res) => {
//     console.log(req.body);
//     res.send(`${req.body.name} ${req.body.country} ${req.body.city}`);
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

/////////////////////////////////////////////////////
//Hiding a form after submitting it in Express
// app.get('/', (req, res) => {
//     res.render('form', {
//         query: req.query,
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// });


//
// app.get('/', (req, res) => {
//     if (req.query.submit) {
//         let num1 = +req.query.test1;
//         let num2 = +req.query.test2;
//         let num3 = +req.query.test3;
//         let num4 = +req.query.test4;
//         let num5 = +req.query.test5;
//         let sum = num1 + num2 + num3 + num4 + num5;
//         res.send('result: ' + sum);
//     } else {
//         res.render('form');
//     }
// });
// app.listen(3000, () => {
//     console.log('Running');
// })


//////////////////////////////////////////////////////////////////
//Save form values ​​after submit
// app.get('/', (req, res) => {
//     res.render('form', {
//         query: req.query
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// })



/////////////////////////////////////////////////////////////////
//display the result near the form
// app.get('/', (req, res) => {
//     res.render('form',{
//         sum: +req.query.test1 + +req.query.test2 + +req.query.test3
//     });
// });

// app.listen(3000, () => {
//     console.log('Running');
// })
////////////////////////////////////////////
//Submitting a GET Form in Express
// app.get('/', (req, res) => {
//     res.render('form');
// });

// app.get('/target/', (req, res) => {
//     let num1 = +req.query.test1;
//     let num2 = +req.query.test2;
//     let num3 = +req.query.test3;
//     let sum = num1 + num2 + num3;
//     res.send('result: ' + sum);
// });

// app.listen(3000, () => {
//     console.log('Running');
// })