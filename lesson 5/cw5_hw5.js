// cw
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let num = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     }
//     else if (b<a && b<c){
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }
// num(5,6,3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let num = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     }
//     else if (b>a && b>c){
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }
// num(5,6,3)

// - створити функцію яка повертає найбільше число з масиву

// let num = [100, 200, 300];
// const maxNum = (numMax) => {
//     let max = numMax[0];
//     for (const max1 of numMax) {
//         if(max1>max){
//             numMax = max1;
//         }
//     }
//     return numMax;
// };
// document.write(`${maxNum(num)}`);

// - створити функцію яка повертає найменьше число з масиву

// let nums = [100,99,50]
// let minNum = (arr) =>{
//     let minElement = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<minElement){
//             minElement = arr[i]
//         }
//     }
//     return minElement
// }
// console.log(minNum(nums))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let num = [1,2,10];
// let sum = (array)=>{
//     let sumNum = 0;
//     for (const arrayElement of array) {
//         sumNum = arrayElement + sumNum;
//     }
//     return sumNum;
// }
// console.log(sum(num))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let sumarr = [3,7,9];
// let sumstr = (array) =>{
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum=arrayElement+sum;
//     }
//     return sum/array.length;
// }
// console.log(sumstr(sumarr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const element of arg) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(minMax(555,87458,-8556,0))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let rand = (length)=> {
//     let arr = [];
//     for (let i = 0; i < length; i++){
//         arr.push(Math.floor(Math.random()*100));
//     }
// return arr
// };
// console.log(rand(100))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let num = (length,limit) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random() * limit));
//     }
//     return emptyArray;
// }
// console.log(num(10,100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [1, 2, 3]
// const rev = (arr) => {
//     let arrRev = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         arrRev[ri] = arr[i];
//     }
//
//     return arrRev;
// }
// console.log(rev(array));



// hw
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника

// let s = (a,b) =>{
//     return a*b;
// };
// console.log(s(2,4));

// - створити функцію яка обчислює та повертає площу кола

// let s = (r) => {
//     return 3.14*r**2;
// };
// console.log(s(2));

// - створити функцію яка обчислює та повертає площу циліндру

// let s = (r,h)=>{
//     return 2*3.14*r*h;
// }
// console.log(s(10,20))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['123', 1, 2, 3, true];
// let arrayFunc = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// };
// arrayFunc(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraph = (text) =>{
//     for (let i = 1; i < 11; i++) {
//         document.write(`<p>${text}</p>`)
//     }
// }
// paragraph('lorem ipsum');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let paragraph = (text) => {
//     for (let i = 0; i < 3; i++) {
//         document.write(`<ul><li>${text}</li></ul>`)
//     }
// }
// paragraph('lorem ipsum');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let paragraph2 = (text) => {
//     for (let i = 0; i < 3; i++) {
//         document.write(`<ul><li>${text}</li></ul>`)
//     }
// }
// paragraph2('lorem ipsum2');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = ['123', 1, 2, 3, true];
//
// let arrayFunc = (array) => {
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ol>`)
//
// }
// arrayFunc(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let user = [{id: 1, name: "Artem", age: 21}];
// let arr = (array)=>{
//     for (const arrayElement of array) {
//         document.write(`${arrayElement.id}. ${arrayElement.name} ${arrayElement.age}`)
//     }
// }
// arr(user);
