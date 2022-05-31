import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

let app = express();

let secret = '44';
app.use(cookieParser(secret));
app.use(expressSession({
    secret: secret,
}));
app.use(cookieParser(secret));

app.get('/', (req, res) => {
res.send('August');
});
app.listen(3000, ()=>{
    console.log('Running');
});