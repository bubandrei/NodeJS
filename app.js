import express from 'express';
import * as path from 'path';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let app = express();

//////////////////////////////////////////////////////////////
//app.use
// app.use(express.static(__dirname + '/public/'));
// app.get('/test.html', (req, res) => {
//     res.sendFile(__dirname + '/test.html');
// });
// app.get('/image', (req, res) => {
//     res.sendFile(__dirname + '/image.png');
// })
// app.listen(3000, () => {
//     console.log('Running');
// });

////////////////////////////////////////////////////////////////
//app.use express.static
// app.use(express.static(__dirname + '/public/'));
// app.get('/test.html', (req, res) => {
//     res.sendFile(__dirname + '/test.html');
// });
// app.listen(3000, ()=>{
//     console.log('Running');
// });

//////////////////////////////////////////////////////////////
//__dirname
// app.get('/1/', (req, res) => {
//     res.sendFile(__dirname + '/file1.html');
// });
// app.get('/2/', (req, res) => {
//     res.sendFile(__dirname + '/page/dir/name/title.html');
// });

// app.listen(3000, () => {
//     console.log('Running');
// })

///////////////////////////////////////////////////////////
//res.send
// app.get('/1/', (req, res) => {
//     res.send('page1234666667777');
// });
// app.get('/2/', (req, res) => {
//     res.type('text/plain');
//     res.send('NEW page');
// });
// app.get((req, res) => {
//     res.status(404).send('ERROR');
// })
// app.listen(3000, () => {
//     console.log('Running');
// })



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