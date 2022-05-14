import http, { request } from 'http';

//сервер при запросе отдаёт текущее время
// let date = new Date();
// http.createServer((request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;
//     response.write(`<div>${date}</div>`);
//     response.end();
// }).listen(3000);


// http.createServer((request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;
//     response.write('<b>Hello World!</b>');
//     response.end();
// }).listen(3000)

/////////////////////////////////////////////////////////
// http.createServer((request, response) => {
//     response.setHeader('Cache-Control', 'no-cache')
//     response.statusCode = 200;
//     response.write('Hello');
//     response.end();
// }).listen(3000);



/////////////////////////////////////////////////////////
// http.createServer((request, response) => {
//     response.write('text1');
//     response.write('text2');
//     response.write('text3');
//     response.write('I want to move to another country')
//     response.end();
// }).listen(3000)