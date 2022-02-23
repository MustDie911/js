// cw
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

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

// function sum(arr) {
//     let res = 0;
//     for (const arrElement of arr) {
//      res = res + arrElement;
//     }
//     return res;
// }
// let number = sum([10,20,20]);
// console.log(number)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function  average(arr)
// {
//     if(arr.length === 0)
//         return 0;
//     let sum = 0;
//
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// let k = [1, 2, 3];
// console.log(average(k));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function returnMinLogMax(){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         let argument = arguments[i];
//         if (argument > max){
//             max = argument;
//         } else if (argument < min){
//             min = argument;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(returnMinLogMax(1,2,3));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arr =[];
// function arrNums (arr){
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random()*100))
//     }
// }
// arrNums(arr);
// console.log(arr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = []
// function limit(arr, size = 1) {
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
// }
// limit(arr, 24);
// console.log(arr);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverse (arr){
//     let newArr=[];
//     for (let i = arr.length-1; i >= 0 ; i--) {
//         newArr.push(arr[i])
//     }
//     return newArr;
// }
// let arrDefault = [1,2,3];
// console.log(arrDefault);
// console.log(reverse(arrDefault));

// hw
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function s(a,b) {
//     return a * b;
// }
// console.log(s(10,20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function Circle(r){
//     let radius= r**2;
//     let sCircle = 3.14 * radius;
//     return SCircle;
// }
// console.log (sCircle)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(r, h) {
//     let sCylinder = 2 * 3.14 * r * h;
//     return sCylinder;
// }
// console.log(cylinder)

// - створити функцію яка приймає масив та виводить кожен його елемент

// function array(arr){
//     for (const item of arr){
//         console.log(item)
//     }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function par(text) {
//     document.write('<p>${text}</p>')
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function uls(arg) {
//     document.write(`<ul>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`</ul>`)
// }
// uls('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ul(text, num){
//     document.write('<ul>');
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write('</ul>');
// }
// ul('li', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let fullArray = [true,3,'lenovo'];
// function min (array){
//     document.write('<ol>')
//     for (let i = 0; i < array.length; i++){
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write('</ol>')
// }
// min(fullArray)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let fullArray = {
//     id: 1,
//     name: 'Thomas',
//     age: 21
// }
//
// function object(array) {
//     for (let arrayElement in array) {
//         console.log(arrayElement)
//         document.write(`<div>`);
//         document.write(`${arrayElement}: ${array[arrayElement]}`);
//         document.write(`</div>`);
//     }
// }
//
// object(fullArray)