import expressHandlebars from 'express-handlebars';
import express from 'express';

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
let app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');