import express from "express";
import cookieParser from "cookie-parser";

let app = express();
let secret = '44';
app.use(cookieParser(secret));

//////////////////////////////////////////////////
// cookie options
// app.get('/', (req, res) => {
//     res.cookie('main', 'Show cookie', {
//         domain: 'site.com',
//         path: '/show/',
//         maxAge: 1000 * 60 * 60,
//         secure: true,
//         httpOnly: true
//     });
//     res.send('Enabled')
// });
// app.listen(3000, () => {
//     console.log('Running');
// });


//////////////////////////////////////////////////
/////cookie
// app.get('/', (req, res) => {
//     res.cookie('main', 'Show cookie');
//     res.send('Enabled')
// });
// app.get('/show/', (req, res) => {
//     res.send(req.cookies);
// });
// app.listen(3000, ()=>{
//     console.log('Running');
// });

///////////////////////////////////////////////////
//cookie(save, read, remove)
// app.get('/', (req, res) => {
//     res.cookie('general', 'june');
//     res.send('Summer');
// });
// app.get('/read/', (req, res) => {
//     console.log(req.cookies);
//     res.send('Best Summer');
// });
// app.get('/remove/', (req, res) => {
// res.clearCookie('general');
// res.send('July');
// });

// app.listen(3000, () => {
//     console.log('Running');
// });


//////////////////////////////////////////////////
//cookie-parsie
// app.get('/', (req, res)=>{
//     res.send('hello world');
// });
// app.listen(3000, ()=>{
//     console.log('Running');
// });
