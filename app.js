import expressHandlebars from 'express-handlebars';
import express from 'express';

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
let app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.get('/page/:num', (req, res) => {
    res.render(req.params.num);
})

app.listen(3000, () => {
    console.log('Running');
});