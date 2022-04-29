// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function sq(a, b) {
//     let res = (a + b) * 2;
//     return res;
// }
// let sqr = sq(4, 5);
// console.log(sqr)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function SL(r) {
//     let s = Math.PI * Math.pow(r, 2);
//     return s;
// }
// let S = SL(5);
// console.log(S);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function f(r, h) {
//     let S = 2 * Math.PI * r * (h + r);
//     return S;
// }
// let SF = f(5, 10);
// console.log(SF)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let mas = [true, 123, 'name']
// function iterator(arr){
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// iterator(mas);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function f(txt) {
//     document.write(`<p>${txt}<p>`)
// }
// f(`text`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function f(txt) {
//     document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`)
// }
// f(`text`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function f(txt,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// f(`text`,15);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let mas = [true, 123, 'name']
//
// function iterator(arr) {
//     for (const item of arr) {
//         document.write(`<ul>`)
//         document.write(`<li>${item}</li>`);
//         document.write(`</ul>`)
//
//     }
// }
// iterator(mas);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let user = [
//     {id:1, name:'artem', age:21}
// ]
// function iter(u){
//     for (const uElement of u) {
//         document.write(`<div>${uElement.id}. ${uElement.name}, ${uElement.age}</div>`)
//     }
// }
// iter(user)

// - створити функцію яка повертає найменьше число з масиву

// let mas = [10,50,1,-15];
// function f(num){
//     let minimal = num[0];
//     for (const numElement of num) {
//         if (numElement<minimal){
//             minimal=numElement;
//         }
//     }
//     return minimal;
// }
// console.log(f(mas))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let num = [1,2,10];
//
// function f(arr){
//     let full = 0;
//     for (const arrElement of arr) {
//         full += arrElement
//     }
//     return full;
// }
//
// console.log(f(num))
