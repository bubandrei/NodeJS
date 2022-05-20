import expressHandlebars from 'express-handlebars';
import express from 'express';

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
let app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.get('/page/:page/', (req, res) => {
    let num = req.params.page;
    if (num > 0 && num < 4) {
        res.render('page' + num);
    } else {
        res.status(404).send('not found');
    }
})
app.listen(3000, () => {
    console.log('Running');
});