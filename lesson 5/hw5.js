// Все стірлочними!!!!!!!!!

//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [1,2,3];
// let avr = (str)=>{
//     let sum = 0;
//     for (const strElement of str) {
//         sum = strElement + sum;
//     }
//     return sum/str.length
// }
// console.log(avr(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let array = [2, 4, 5, 1, 2, 3, 8];
// let foo = (arr) => {
//     let min = arr[0];
//     let max = arr[0];
//     for (const minElement of arr) {
//         if (min > minElement) {
//             min = minElement
//         }
//         if (max < minElement) {
//             max = minElement
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(foo(array));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let randomizer = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// console.log(randomizer())

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let randomizer = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// console.log(randomizer(20))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let mas = [1,2,3]
//     mas.reverse(mas);
// console.log(mas);

//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let S = (a, b) => 2 * (a + b);
// console.log(S(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let S = (r) => Math.PI * Math.pow(r,2);
// console.log(S(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let S = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r, 2);
// console.log(S(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let mas = [true, 123, 'name'];
// let mass = (massive) => {for (const mas of massive) {}}
// console.log(mas)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolore eaque fugit possimus quam rem repudiandae velit vitae! Aspernatur assumenda explicabo in laudantium nisi non optio quam rem rerum sint?<p>`);
// let par = (p) => {
//     for (const paragraph of p) {
//     }
// }
// document.write(paragraph)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let li = (txt) => document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`);
// li('123')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let listCreation = (txt, size) =>
// {
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`<li> ${txt} </li>`);
//     } document.write(`</ul>`);
// }
// listCreation('123', 25);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1, 'txt', true];
// let arrlist = (arr) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         let arrElement;
//         arrElement = arr[i];
//         document.write( `<li> ${arrElement } </li>`)
//     }
//     document.write(`</ul>`);
// }
// arrlist(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let user = [
//     {id:1, name:'artem', age:21}
// ]
// let print = (l) =>
// {
//     for (const lElement of l) {
//         document.write(`<div>${lElement.id}. ${lElement.name} ${lElement.age}</div>`)
//     }
// }
// print (user);

// - створити функцію яка повертає найменьше число з масиву

// let arr3 = [1, 2, 11, -11];
// let sm = (array) =>
// { let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//
//     } return min;}
// console.log(sm(arr3));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1,2,10];
// let sum = (array) => {
//     let item = 0;
//     for (let i = 0; i < array.length; i++) {
//         item += array[i];
//
//     } return item;
// }
//
// console.log(sum (arr));






