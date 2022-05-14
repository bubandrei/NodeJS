import http, { request } from 'http';

// simple routing witn object
// let obj = {
// 	'/page1': '111',
// 	'/page2': '222',
// 	'/page3': '333',
// }
// http.createServer((request, response) => {
//     let text;
//     let status = 200;
//     switch (request.url) {
//         case '/page1':
//             text = obj['/page1'];
//             status;
//             break;
//         case '/page2':
//             text = obj['/page2'];
//             status;
//             break;
//         case '/page3':
//             text = obj['/page3'];
//             status;
//             break;
//         default:
//             text = 'page not found';
//             status = 404;
//     }
//     response.writeHead(status, { 'Content-Type': 'text/html' });
//     response.write(text);
//     response.end();
// }).listen(3000)



///////////////////////////////////////////////////////////
//simple routing
// http.createServer((request, response) => {
//     let text;
//     let status = 200;
//     switch (request.url) {
//         case '/page1':
//             text = '1';
//             status;
//             break;
//         case '/page2':
//             text = '2';
//             status;
//             break;
//         case '/page3':
//             text = '3';
//             status;
//             break;
//         default:
//             text = 'page not found';
//             status = 404;
//     }
//     response.writeHead(status, { 'Content-Type': 'text/html' });
//     response.write(text);
//     response.end();
// }).listen(3000)


//////////////////////////////////////////////////////////
// вывод url
// http.createServer((request, response) => {
//     if (request.url != '/favicon.ico') {
//         console.log(request.url);
//     }
//     console.log(request.method);
//     console.log(request.headers);

//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write('text');
//     response.end();
// }).listen(3000);

///////////////////////////////////////////////////////////
//count
// let i = 0;
// http.createServer((request, response) => {
//     if (i == 10) {
//         i = 'You are a winner';
//     }
//     else {
//         ++i;
//     }
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write(String(`${i}`));
//     response.end();
// }).listen(3000)


// счетчик запросов////////////////////////////////////
// let i = 0;
// http.createServer((request, response) => {
// 	response.setHeader('Content-Type', 'text/html');
// 	response.statusCode = 200;
// 	response.write(String(++i));
// 	response.end();
// }).listen(3000);

//////////////////////////////////////////////////////
//сервер при запросе отдаёт текущее время
// let date;
// setInterval(() => { date = new Date }, 1000);

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