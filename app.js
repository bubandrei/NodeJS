import fs from 'fs';

////////////////////////////////////////////////////////////////////////////
//есть 3 файла с числами. Найдите сумму этих чисел и запишите в новый файл.
// let names = ['num1.txt', 'num2.txt', 'num3.txt'];
// let files = [];
// for (let name of names) {
//     files.push(fs.promises.readFile(name, 'utf8'));
// }
// Promise.all(files).then(data => {
//     let sum = 0;
//     for (let num of data) {
//         sum += +num;
//     }
//     fs.promises.writeFile('newFile.txt', sum);
// }).catch(err => {
//     console.log('win', err);

// })

///////////////////////////////////////////////////////////////
// fs.promises.readFile('file1.txt', 'utf-8').then(data => {
//     let arr = data.split(',');
//     for (let i = 0; i < arr.length; i++) {
//         let nameFile = 'num' + i + '.txt';
//         fs.promises.writeFile(nameFile, Number(arr[i]));
//     }
// }).catch(err => {
//     console.log('Big error');
// })




//////////////////////////////////////////////////////////////////
// fs.promises.readFile('file5.txt', 'utf-8').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('I am a Error', err)
// });


//Пусть в файле записано число.
// Прочитайте этот файл и выведите в консоль сумму цифр этого числа.
// fs.promises.readFile('readme.txt', 'utf8').then(data => {
//     let arr = data.split('');
//     let sum = arr.reduce((cur, num)=> +cur + +num, 0);
//     console.log(sum);
// });