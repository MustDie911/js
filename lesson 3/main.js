// cw
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let num = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0
// while (i < num.length){
//     console.log(num[i])
//     i++
// }

// for (const number of num) {
//     console.log(number)
// }

// let i = 0
// while (i < num.length){
//     if (i%2 !==0){
//         console.log(num[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < num.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(num[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0
// while (i < num.length) {
//     if (i % 2 === 0) {
//         console.log(num[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < num.length; i++) {
//     if (i % 2 === 0) {
//         console.log(num[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < num.length; i++) {
//     if (num[i]%3 === 0){
//         num[i]="okten";
//     }
// }
// console.log(num)

// 8. вивести масив в зворотньому порядку.

// for (let i = num.length-1; i >= 0; i--) {
//     console.log(num[i])
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let num = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = num.length-1
// while (i >=0){
//     console.log(num[i])
//     i--
// }

// for (let i = num.length-1; i >= 0; i--) {
//     console.log(num[i])
// }

// let i = num.length - 1 ;
// while (i>=0){
//     if (i % 2 !== 0) {
//         console.log(num[i])
//     }
//     i--;
// }

// for (let i = num.length - 1; i>=0; i--) {
//     if (i % 2 !== 0) {
//         console.log(num[i])}
//     }

// let i = num.length - 1;
// while (i>=0) {
//     if (num[i]%2 === 0) {
//         console.log(num[i])
//     }
//     i--;
// }

// for (let i = num.length-1; i >= 0; i--) {
//     if (num[i] % 2 === 0) {
//         console.log(num[i])
//     }
// }

// hw
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

// let num = [1,2,3,4,5];
// console.log(num);
// let str = ['one','two','car','cat','sky'];
// console.log(str);
// let full = [true,false,1,'project','cloud'];
// console.log(full);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let nul = [];
// nul [1] = 'Good Luck !';
// nul [2] = 'Have Fun !';
// nul [3] = 'GLHF';
// nul [4] = 322;
// console.log(nul);
// document.write(nul);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let test = 1; test <= 10; test++) {
//     document.write('<div> test </div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let test = 1; test <= 10; test++) {
//     document.write(`<div> test ${test} </div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let test =0;
// while(test<20){
//     document.write(`<h1>text</h1>`);
//     test++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let test = 1;
// while(test<21){
//     document.write(`<h1>${test}text</h1>`);
//     test++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let n = 1; n <= 10; n++) {
//     console.log(n);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'];
// for (let s=0;s<str.length;s++){
//     console.log(str[s])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let all = [1,6,'user',true,3,false,'project','cloud','car','sky'];
// for (let r=0; r<all.length;r++){
//     console.log(all[r]);
// }
// let row = [1, 6, 'user', true, 3, false, 'project', 'cloud', 'car', 'sky'];
// for (b = 0; b < row.length; b++) {
//     if (typeof row[b] === 'boolean') {
//         console.log(row[b])
//     }
// }
// let str = [1, 6, 'user', true, 3, false, 'project', 'cloud', 'car', 'sky'];
// for (s=0;s<str.length; s++){
//     if(typeof str[s] === 'string'){
//         console.log(str[s])
//     }
// }
// let num = [1, 6, 'user', true, 3, false, 'project', 'cloud', 'car', 'sky'];
// for(n = 0; n <num.length; n++) {
//     if(typeof num[n] === 'number'){
//         console.log(num[n])
//     }
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let full =[];
// full [1] = 'Good Luck !';
// full [2] = '3';
// full [3] = '85';
// full [4] = true;
// full [5] = 'pokten';
// full [6] = 'apple';
// full [7] = 322;
// full [8] = false;
// full [9] = 322;
// full [10] = 25;
// for (f=0; f<full.length; f++){
//     console.log(full[f]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let t = 0; t < 10; t++) {
//     console.log(t);
//     document.write(t);
// }
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let t = 0; t < 100; t++) {
//     console.log(t);
//     document.write(t);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let t = 0; t < 100; t+=2) {
//     console.log(t);
//     document.write(t);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let t = 0; t < 100; t++) {
//     if (t % 2 === 0) {
//         console.log(t);
//         document.write(t);
//     }
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let t = 0; t < 100; t++) {
//     if (t % 2 !==0 ) {
//         console.log(t);
//         document.write(t);
//     }
// }