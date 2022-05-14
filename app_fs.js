// import fs from 'fs';
// import { constants } from 'fs';

// import { access } from 'fs/promises';

// fs.access('1.txt', constants.F_OK).then(() => {
// 	console.log('file exists');
// }).catch(() => {
// 	console.error('file does not exists');
// });




// fs.readFile('1.txt', 'utf8').then(data => {
// 	console.log(data);
// });



// async function func() {
//     let data = await fs.promises.readFile('readme.txt', 'utf8');
//     console.log(data);
// }

// func();

//////////////////////////////////////////////////////////////////////////////////
//Дан массив имен файлов. Переберите этот массив циклом и создайте файлы с
// этими именами, записав при создании в каждый файл случайное число.
// После этого в цикле прочитайте содержимое всех файлов и найдите сумму их чисел.
// Запишите ее в новый файл.
// let arr = ['1.txt', '2.txt', '3.txt'];
// let sum = 0;
// async function func() {
//     try {
//         for (let item of arr) {
//             await fs.promises.writeFile(item, Math.random());
//         }
//         for (let file of arr) {
//             sum += Number(await fs.promises.readFile(file, 'utf-8'));
//             await fs.promises.writeFile('newSum.txt', sum)
//         }
//     } catch (error) {
//         console.log('enough');
//     }
// }
// func();

/////////////////////////////////////////////////////////////////////////////////////
//Даны два файла с числами. Найдите сумму этих чисел и запишите результат в третий файл.
// async function func() {
//     try {
//         let num1 = await fs.promises.readFile('num1.txt', 'utf-8');
//         let num2 = await fs.promises.readFile('num2.txt', 'utf-8');
//         await fs.promises.writeFile('num3.txt', +num1 + +num2)
//     } catch (error) {
//         console.log('ошибка')
//     }
// }
// func();

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