import fs from 'fs';
import { constants } from 'fs';
import express from 'express';
import * as path from 'path';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let app = express();
let userRouter = express.Router();
let userRouter2 = express.Router();

//////////////////////////////////////////////////////////////////////////////
// route groups express.Router()
// app.use('/city/', userRouter)
// userRouter.get('/show/:id', function(req, res) {
//     res.send(req.params.id);
// });
// userRouter.get('/edit/:id', function(req, res) {
//     res.send(req.params.id);
// });
// app.use('/country/', userRouter2)
// userRouter2.get('/list', function(req, res) {
//     res.send('HELLO');
// });
// userRouter2.get('/show/:id', function(req, res) {
//     res.send('show');
// });
// userRouter2.get('/edit/:id', function(req, res) {
//     res.send('edit');
// });
// app.listen(3000, ()=>{
//     console.log('Running');
// });

//////////////////////////////////////////////////////////////
//routing whith files
// app.get('/page/:num/', (req, res) => {
//     let path = __dirname + '/public/' + req.params.num + '.html';
//     fs.access(path, constants.F_OK).then(() => {
//         res.sendFile(path);
//     }).catch(() => {
//         res.status(404).send('not found');
//     });
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

///////////////////////////////////////////////////////////
//routing whith files
// app.get('/page/:num', (req, res) => {
//     res.sendFile(__dirname + '/public/' + req.params.num + '.html');
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

////////////////////////////////////////////////////////////////
//routing and array
// let users = [
//     {
//         name: 'user1',
//         age: '31',
//     },
//     {
//         name: 'user2',
//         age: '32',
//     },
//     {
//         name: 'user3',
//         age: '33',
//     },
// ];
// app.get('/users/:id/:field', (req, res) => {
//     let user = users[req.params.id];
//     console.log(user);
//     res.send(user[req.params.field]);
// });
// app.listen(3000, () => {
//     console.log('Running');
// })

////////////////////////////////////////////////////////////////
//routing and array
// let users = [
//     {
//         name: 'user1',
//         age: 31,
//     },
//     {
//         name: 'user2',
//         age: 32,
//     },
//     {
//         name: 'user3',
//         age: 33,
//     },
// ];
// app.get('/users/:id/', (req, res) => {
//     let user = users[req.params.id];
//     res.send(user.name + ' ' + user.age);
// });
// app.listen(3000, () => {
//     console.log('Running');
// })

//////////////////////////////////////////////////////////////////////
//routing and array
// let users = ['user1', 'user2', 'user3', 'user4', 'user5'];
// app.get('/test/:num', (req, res) => {
//     let num = req.params.num;
//     if (num > 0 && num < users.length) {
//         res.send('My number:' + users[num]);
//     } else {
//         res.status(404).send('not found');
//     }
// });
// app.listen(3000, () => {
//     console.log('Running');
// });
// let users = ['user1', 'user2', 'user3', 'user4', 'user5'];

// app.get('/test/:num', (req, res) => {
//     let num = req.params.num;
//     if (num => 0 && num <= 4) {
//         res.send(users[num]);
//     } else {
//         res.send('not found');
//     }
// });
// app.listen(3000, () => {
//     console.log('Running');
// })



////////////////////////////////////////////////////////////////////
//with array
// let users = ['user1', 'user2', 'user3', 'user4', 'user5'];

// app.get('/test/:num', (req, res) => {
//     res.send(users[req.params.num]);
// });
// app.listen(3000, () => {
//     console.log('Running');
// })


////////////////////////////////////////////////////////////////////////
//with array
// let arr = ['a', 'b', 'c'];

// app.get('/test/:num/', function(req, res) {
// 	res.send(arr[req.params.num]);
// });
// app.listen(3000, ()=>{
//     console.log('Running');
// })

//////////////////////////////////////////////////////////////////////////
//general 404 error
// app.get('/test/:num/', function (req, res) {
//     let num = req.params.num;

//     if (/\d+/.test(num)) {
//         res.send('My num: ' + num);
//     } else {
//         res.status(404).send('not found');
//     }
// });
// app.use(function (req, res) {
//     res.status(404).send('not found');
// });
// app.listen(3000, ()=>{
//     console.log('Running');
// })

/////////////////////////////////////////////////////////////////
// params route
// app.get('/test/:num', (req, res) => {
//     let num = req.params.num;
//     if (num > 0 && num < 10) {
//         res.send('My number:' + num);
//     } else {
//         res.status(404).send('not found');
//     }
// });
// app.listen(3000, () => {
//     console.log('Running');
// })



//////////////////////////////////////////////////////////////////
//Optional parameters in routes
// app.get('/test/:num1/:num2?/', (req, res) => {
//     res.send(`Hello`);
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

////////////////////////////////////////////////////////////////////
//route priority
// app.get('/test/show/all/', (req, res) => {
//     res.send('Move to 1');
// });
// app.get('/test/show/:num/', (req, res) => {
//     res.send(req.params.num);
// });
// app.get('/test/:num1/:num2/', (req, res) => {
//     res.send(`${+req.params.num1 + +req.params.num2}`);
// });
// app.listen(3000, () => {
//     console.log('Running');
// });


///////////////////////////////////////////////////////////////////////
//regular
// app.get(/admin|user(name)?/, (req, res) => {
//     res.send('HELLO');
// });
// app.listen(3000, () => {
//     console.log('Running');
// });



/////////////////////////////////////////////////////////////////////////
//regular
// app.get('/user(name)?', (req, res) => {
//     res.send('regular');
// });
// app.listen(3000, () => {
//     console.log('Running');
// });



//////////////////////////////////////////////////////////////////////
//three params
// app.get('/test/:num1/:num2/:num3', (req, res) => {
//     res.send(`${+req.params.num1 + +req.params.num2 + +req.params.num3}`);
// });
// app.listen(3000, () => {
//     console.log('Running');
// })


/////////////////////////////////////////////////////////////////
//2 params
// app.get('/test/:num1/:num2/', (req, res) => {
//     res.send(`${+req.params.num1 + +req.params.num2}`);
// });
// app.listen(3000, () => {
//     console.log('Running');
// })

///////////////////////////////////////////////////////////////////
//params
// app.get('/test/:num/', (req, res) => {
//     res.send(`${req.params.num ** 2}`);
// });
// app.listen(3000, () => {
//     console.log('Running');
// })
/////////////////////////////////////////////////////////////////////
// app.get  table
// let employees = [
//     {
//         surname: 'surname1',
//         name: 'user1',
//         salary: 1000,
//     },
//     {
//         surname: 'surname2',
//         name: 'user2',
//         salary: 2000,
//     },
//     {
//         surname: 'surname3',
//         name: 'user3',
//         salary: 3000,
//     },
// ];
// app.get('/test/', (req, res) => {
//     let result = '<table>';
//     for (let elem of employees) {
//         result += '<tr><td>' + elem.surname + '</td>' + '<td>' + elem.name + '</td>' + '<td>' + elem.salary + '</td></tr>';
//     }
//     result += '</table>';
//     res.send(result);
// });
// app.listen(3000, () => {
//     console.log('Running')
// });

///////////////////////////////////////////////////////////////
// object app.get
// let users = [
//     {
//         name: 'user1',
//         age: 31,
//     },
//     {
//         name: 'user2',
//         age: 32,
//     },
//     {
//         name: 'user3',
//         age: 33,
//     },
// ];

// app.get('/test/', (req, res) => {
//     let result = '<ul>';
//     for (let elem of users) {
//         result += '<li>' + elem.name + ' ' + elem.age + '</li>';
//     }
//     result += '</ul>';
//     res.send(result);
// });
// app.listen(3000, () => {
//     console.log("Running");
// });


//////////////////////////////////////////////////////////////
//array list
// let arr = ['user1', 'user2', 'user3', 'user4', 'user5'];
// app.get('/test/', (req, res) => {
//     let result = '<ul>';
//     for (let elem of arr) {
//         result += '<li>' + elem + '</li>';
//     }
//     result += '</ul>';
//     res.send(result);
// });
// app.listen(3000, () => {
//     console.log('Running');
// });

/////////////////////////////////////////////////////////////
// let str = `<div>
// 	<p>text1</p>
// 	<p>text2</p>
// 	<p>text3</p>
// </div>`;

// app.get('/test/', (req, res) => {
//     res.send(str);
// });
// app.listen(3000, () => {
//     console.log('Running');
// })

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