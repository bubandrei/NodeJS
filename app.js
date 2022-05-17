import express from 'express';
let app = express();

//////////////////////////////////////////////////////////////
// res.redirect
// app.get('/1/', (req, res) => {
//     res.send('page12346');
// });
// app.get('/2/', (req, res) => {
//     res.redirect(301, '/1/');
// });
// app.get((req, res) => {
//     res.status(404).send('ERROR');
// })
// app.listen(3000, () => {
//     console.log('Running');
// })


////////////////////////////////////////////////////////////////
// status 403
// app.get('/1/', (req, res) => {
//     res.send('page12346');
// });
// app.get('/2/', (req, res) => {
//     res.status(403).send('STOP');
// });
// app.get((req, res) => {
//     res.status(404).send('ERROR');
// })
// app.listen(3000, () => {
//     console.log('Running');
// })



//////////////////////////////////////////////////////////////
// app.use
// app.get('/1/', (req, res) => {
//     res.send('new page 1');
// });
// app.get('/2/', (req, res) => {
//     res.send('page222222222222222222')
// })
// app.use((req, res) => {
//     res.status(404).send('not found');
// })
// app.listen(3000, () => {
//     console.log('running')
// })