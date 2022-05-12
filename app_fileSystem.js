// import _ from 'lodash';
// var _ = require('lodash');
import fs from 'fs';

//Даны три файла с числами. Запишите в новый файл сумму этих чисел(стрелочные функции)
// fs.readFile('file1.txt', 'utf-8', (err, data) => {
//     if (!err) {
//         fs.readFile('file2.txt', 'utf-8', (err, data2) => {
//             if (!err) {
//                 fs.readFile('file3.txt', 'utf-8', (err, data3) => {
//                     if (!err) {
//                         let sum = +data + +data2 + +data3;
//                         fs.writeFile('file4.txt', sum, (err) => {
//                             if (err) {
//                                 console.log('Error result');
//                             }
//                         })

//                     } else {
//                         console.log('Error file3', err);
//                     }
//                 })
//             } else {
//                 console.log('Error file2', err);
//             }
//         })
//     } else {
//         console.log('Error file1', err);
//     }
// })
////////////////////////////////////////////////////////////////////////////////
//Даны три файла с числами. Запишите в новый файл сумму этих чисел.
// fs.readFile('file1.txt', 'utf-8', function (err, data) {
//     if (!err) {
//         fs.readFile('file2.txt', 'utf-8', function (err, data2) {
//             if (!err) {
//                 fs.readFile('file3.txt', 'utf-8', function (err, data3) {
//                     if (!err) {
//                         let sum = +data + +data2 + +data3;
//                         fs.writeFile('file4.txt',sum, function (err) {
//                             if (err) {
//                                 console.log('Error result');
//                             }
//                         })

//                     } else {
//                         console.log('Error file3', err);
//                     }
//                 })
//             } else {
//                 console.log('Error file2', err);
//             }
//         })
//     } else {
//         console.log('Error file1', err);
//     }
// })

/////////////////////////////////////////////////////////////////////
//Дан файл с числом. Запишите в этот файл квадрат этого числа.
// fs.readFile('file1.txt', 'utf-8', function (err, data) {
//     if (!err) {
//         fs.writeFile('file1.txt', data ** 2, function (err) {
//             if (err) {
//                 console.log('Ошибка', err);
//             }
//         });
//     } else {
//         console.log('Большая ошибка', err);
//     }
// })

///////////////////////////////////////////////////////////////////////
//Даны три файла с числами. Выведите в консоль сумму этих чисел.
// fs.readFile('file1.txt', 'utf-8', function (err, data) {
//     if (!err) {
//         fs.readFile('file2.txt', 'utf-8', function (err, data2) {
//             if (!err) {
//                 fs.readFile('file3.txt', 'utf-8', function (err, data3) {
//                     console.log(Number(data) + Number(data2) + Number(data3))
//                 })
//             }
//         })
//     }
// })

////////////////////////////////////////////////////////////////////////
//С помощью цикла создайте 10 файлов, содержащих целые числа от 1 до 10.
// for (let i = 1; i <= 5; i++) {
//     let x = 'text' + i + '.txt';
//     fs.writeFile(x, i, function (err) {
//         if (err) {
//             console.log('ошибка', err)
//         }
//     });
// }

////////////////////////////////////////////////////////////////////////
//Синхронные чтение и запись файла
// Исключительные ситуации
// try {
//     let num1 = Number(fs.readFileSync('file1.txt', 'utf-8'));
//     let num2 = Number(fs.readFileSync('file2.txt', 'utf-8'));
//     let num3 = Number(fs.readFileSync('file3.txt', 'utf-8'));

//     fs.writeFileSync('file4.txt', num1 + num2 + num3);
// } catch (err) {
//     console.log('при чтении файла возникла ошибка', err)
// }

////////////////////////////////////////////////////////////////////////
//Дан файл с текстом. Запустите таймер, который каждые 1 секунду в конец
// этого файла будет записывать восклицательный знак.
// let text = fs.readFileSync('file1.txt', 'utf-8');
// setInterval(() => {
//     console.log(text)
//     text += '!';
//     fs.writeFileSync('file1.txt', text)
// }, 1000)
// ////////////////////////////////////////////////////////////////



// for (let key in obj) {
//     fs.writeFileSync(key, obj[key])
// }
// let text = 'Hello';
// fs.writeFileSync('readme3.txt', text)
// let text = fs.readFileSync('readme.txt', 'utf8');
// let text2 = fs.readFileSync('readme2.txt', 'utf8')
// let sum = (x, y) => {
//     return  +x + +y
// }
// console.log(sum(text, text2));
