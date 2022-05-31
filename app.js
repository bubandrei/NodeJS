import express from "express";
import cookieParser from "cookie-parser";

let app = express();
let secret = '44';
app.use(cookieParser(secret));

app.get('/', (req, res)=>{
    res.send('hello world');
});
app.listen(3000, ()=>{
    console.log('Running');
});
