import express from "express";
let app = express();

//Request object in Express
////////////////////////////////////////////////////////
//IP
// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.ip);
// });
//acceptsLanguages
// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.acceptsLanguages);
// });
//HEADERS
// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.headers);
// });
//SECURE
// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.secure); // выведет false
// });
//PROTOCOL
// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.protocol); // выведет 'http'
// });
//GET
// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.query.get1); // выведет '1'
// });
//query
// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.query); // содержит объект {get1: '1', get2: '2'}
// });
//PATH
// app.get('/dir/page.html', function (req, res) {
//     console.log(req.path); // выведет '/dir/page.html'
// });
//original URL
// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.originalUrl); // выведет '/dir/page.html?get1=1&get2=2'
// });
//URL
// app.get('/dir/page.html', function(req, res) {
// console.log(req.url); // выведет '/dir/page.html?get1=1&get2=2'
// });

///////////////////////////////////////////////////
//multiply url
// app.get('/', function (req, res) {
//     res.send('hello world');
// });
// app.get('/1/', (req, res) => {
//     res.send('page1');
// });
// app.get('/2', (req, res) => {
//     res.send('page2');
// });
// app.get('/3/', (req, res) => {
//     res.send('page3');
// });
// app.listen(3000, function () {
//     console.log('running');
// });
