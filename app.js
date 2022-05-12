import fs from 'fs';


fs.promises.readFile('file1.txt', 'utf-8').then(data => {
    let arr = data.split(',');
    for (let i = 0; i < arr.length; i++) {
        let nameFile = 'num' + i + '.txt';
        fs.promises.writeFile(nameFile, Number(arr[i]));
    }
}).catch(err => {
    console.log('Big error');
})




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