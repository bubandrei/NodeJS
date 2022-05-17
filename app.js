import fs from 'fs';
import http from 'http';

http.createServer(async (request, response) => {
    let lpath = 'root/layout.html';
    let cpath = 'page' + request.url + 'content.html';
    let tpath = 'page' + request.url + 'title.html';
    let layout = await fs.promises.readFile(lpath, 'utf8');
    let content = await fs.promises.readFile(cpath, 'utf8');
    let title = await fs.promises.readFile(tpath, 'utf8');

    layout = layout.replace(/\{% get content %\}/, content);
    layout = layout.replace(/\{% get title %\}/, title);

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(layout);
    response.end();
}).listen(3000);

///////////////////////////////////////////////////////////////////////////////
//stat server
// function getMimeType(path) {
//     let mimes = {
//         html: 'text/html',
//         jpeg: 'image/jpeg',
//         jpg: 'image/jpeg',
//         png: 'image/png',
//         svg: 'image/svg+xml',
//         json: 'application/json',
//         js: 'text/javascript',
//         css: 'text/css',
//         ico: 'image/x-icon',
//     };

//     let exts = Object.keys(mimes);
//     let extReg = new RegExp('\\.(' + exts.join('|') + ')$');

//     let ext = path.match(extReg)[1];

//     if (ext) {
//         return mimes[ext];
//     } else {
//         return 'text/plain';
//     }
// }

// http.createServer(async (request, response) => {
//     if (request.url != '/favicon.ico') {
//         let text;
//         let status;
//         let path = 'root' + request.url;
//         try {
//             if ((await fs.promises.stat(path)).isDirectory()) {
//                 status = 200;
//                 path += 'index.html';
//             }
//             text = await fs.promises.readFile(path, 'utf-8');
//         } catch (err) {
//             status = 404;
//             text = 'page not found';
//         }
//         response.writeHead(status, { 'Content-Type': getMimeType(path) });
//         response.write(text);
//         response.end();
//     }
// }).listen(3000);

// http.createServer(async (request, response) => {
//     if (request.url != '/favicon.ico') {
//         let data;
//         let type;

//         if (request.url === '/file1.html') {
//             data = await fs.promises.readFile('file1.html', 'utf8');
//             type = 'text/html';
//         }

//         if (request.url === '/image.png') {
//             data = await fs.promises.readFile('image.png');
//             type = 'image/png'; // правильно укажем mime-тип
//         }

//         response.writeHead(200, { 'Content-Type': 'type' });
//         response.write(data);
//         response.end();
//     }
// }).listen(3000);

// http.createServer(async (request, response) => {
//     if (request.url != '/favicon.ico') {
//         let data;
//         let type;
//         if (request.url === '/file1.html') {
//             data = await fs.promises.readFile('file1.html', 'utf-8')
//             type = 'text/html';
//         }
//         if (request.url === 'style.css') {
//             data = await fs.promises.readFile('style.css', 'utf-8');
//             type = 'text/css';
//         }
//         response.writeHead(200, {'Content-Type': type});
//         response.write(data);
//         response.end();
//     }
// }).listen(3000);

///////////////////////////////////////////////////////////////////////////
//сервер на основе объекта
// let obj = {
//     '/page1': 'file1.html',
//     '/page2': 'file2.html',
//     '/page3': 'file3.html',
// }
// http.createServer(async(request, response) => {
//     let text;
//     let status = 200;
//     switch (request.url) {
//         case '/page1':
//             text = await fs.promises.readFile(obj['/page1'], 'utf-8');
//             status;
//             break;
//         case '/page2':
//             text = await fs.promises.readFile(obj['/page2'], 'utf-8');
//             status;
//             break;
//         case '/page3':
//             text = await fs.promises.readFile(obj['/page3'], 'utf-8');
//             status;
//             break;
//         default:
//             text = 'ERROR';
//             status = 404;
//     }
//     response.writeHead(status, {'Content-Type': 'text/html'});
//     response.write(text);
//     response.end();
// }).listen(3000);

////////////////////////////////////////////////////////////////////////
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