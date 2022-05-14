import http from 'http';
http.createServer((request, response) => {
    response.write('text1');
    response.write('text2');
    response.write('text3');
    response.write('I want to move to another country')
    response.end();
}).listen(3000)