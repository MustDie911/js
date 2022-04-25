// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('enter number');
// if (x === 0){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('від 0 до 59');
// if (time >= 0 && time <= 15) {
//     console.log('1');
// } else if (time > 15 && time <= 30) {
//     console.log('2');
// } else if (time > 30 && time <= 45) {
//     console.log('3');
// } else if (time > 45 && time <= 59) {
//     console.log('4');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let num = +prompt('від 1 до 31');
// if (num >= 1 && num <= 10) {
//     console.log('1');
// } else if (num > 10 && num <= 20) {
//     console.log('2');
// } else if (num > 20 && num <= 31) {
//     console.log('3');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let weekday = +prompt('Enter day number')
// switch (weekday) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('you must enter day number');
// }

//     - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох . Також потрібно врахувати коли введені рівні числа.

// let num1 = +prompt('Enter the first num')
// let num2 = +prompt('Enter the second num')
//
// if (num1 > num2) {
//     console.log(`Your first number is ${num1} more than your second number is ${num2}`)
// } else if (num1 < num2) {
//     console.log(`Your second number is ${num2} more than the first number is ${num1}`)
// } else if (num1 === num2){
//     console.log(`Your numbers ${num1} and ${num2} are the same`)
// } else {
//     console.log('Enter num')
// }