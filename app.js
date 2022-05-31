import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
let app = express();

let secret = '44';
app.use(cookieParser(secret));
app.use(expressSession({
    secret: secret,
}));

//////////////////////////////////////////////////////////////
//count
// app.get('/', function (req, res) {
//     // Update views
//     console.log(req.session.views);
//     req.session.views = (req.session.views || 0) + 1
//     // Write response
//     res.end(req.session.views + ' views')
// })
// app.listen(3000, () => {
//     console.log('Running');
// });


////////////////////////////////////////////////////
// session
// app.get('/save/', (req, res)=>{
//     req.session.value = '44/77';
//     res.send('June');
// });
// app.get('/read/', (req, res)=>{
//     let cookSession = req.session.value;
//     res.send(cookSession);
// });
// app.get('/remove/', (req, res)=>{
//     delete req.session.value;
//     res.send('August');
// });
// app.listen(3000, ()=>{
//     console.log('Running');
// });



//////////////////////////////////////////////////////
// app.get('/', (req, res) => {
// res.send('August');
// });
// app.listen(3000, ()=>{
//     console.log('Running');
// });