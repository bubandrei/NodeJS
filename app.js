import expressHandlebars from 'express-handlebars';
import express from 'express';

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
let app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.get('/page/1/', function (req, res) {
    res.render('page1');
});

app.get('/page/2/', function (req, res) {
    res.render('page2');
});

app.get('/page/3/', function (req, res) {
    res.render('page2');
});
app.listen(3000, ()=>{
    console.log('Running');
});