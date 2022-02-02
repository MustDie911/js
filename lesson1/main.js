// cw

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

// let x = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
// let res = x[0] + x[1] + x[2] + x[3] + x[4] + x[5] + x[6] + x[7] + x[8] + x[9];
// console.log(res);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let book0 = {
//     name: 'book_name',
//     pages: 999,
//     genre: 'genre_name',
// }
// console.log(book0)

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

// let book1 = {
//     name: 'book_name',
//     pages: 999,
//     genre: 'genre_name',
//     author: 'author_name',
// }
// console.log(book1)

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

// let books = [book0,book1];
// console.log(books[0],books[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// const h = 23;
// const w = 10;
// const s = h * w;
// console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

// const hC = 10;
// const dC = 4;
// const rC = dC / 2;
// const v = Math.PI * rC ** 2*10;
// console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

// let n = 3;
// let m = 4;
// let k = Math.sqrt(n**2 + m**2);
// console.log(k);


// HW

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hello = 'hello';
// console.log(hello);
// alert(hello);
// document.write(hello);
// hello = "goodbye";
// console.log(hello)
// alert(hello);
// document.write(hello);
//
// let owu = 'owu';
// console.log(owu);
// alert(owu);
// document.write(owu);
// owu = "noowu";
// console.log(owu)
// alert(owu);
// document.write(owu);
//
// let com = 'com';
// console.log(com);
// alert(com);
// document.write(com);
// com = 'moc';
// console.log(com);
// alert(com);
// document.write(com);
//
// let ua = 'ua';
// console.log(ua);
// alert(ua);
// document.write(ua);
// ua = 'usa';
// console.log(ua);
// alert(ua);
// document.write(ua);
//
// let one = '1';
// console.log(one);
// alert(one);
// document.write(one);
// one = '2';
// console.log(one);
// alert(one);
// document.write(one);
//
// let ten = '10';
// console.log(ten);
// alert(ten);
// document.write(ten);
// ten = '11';
// console.log(ten);
// alert(ten);
// document.write(ten);
//
// let nine = '-999';
// console.log(nine);
// alert(nine);
// document.write(nine);
// nine = '-777';
// console.log(nine);
// alert(nine);
// document.write(nine);
//
// let ott = '123';
// console.log(ott);
// alert(ott);
// document.write(ott);
// ott = '321';
// console.log(ott);
// alert(ott);
// document.write(ott);
//
//
// let pi = '3.14';
// console.log(pi);
// alert(pi);
// document.write(pi);
// pi = '2.28';
// console.log(pi);
// alert(pi);
// document.write(pi);
//
// let ts = '2.7';
// console.log(ts);
// alert(ts);
// document.write(ts);
// ts = '7.2';
// console.log(ts);
// alert(ts);
// document.write(ts);
//
// let st = '16';
// console.log(st);
// alert(st);
// document.write(st);
// st = '17';
// console.log(st);
// alert(st);
// document.write(st);
//
// let tr = true;
// console.log(tr);
// alert(tr);
// document.write(tr);
// tr = false;
// console.log(tr);
// alert(tr);
// document.write(tr);
//
// let fl = false;
// console.log(fl)
// alert(fl);
// document.write(fl);
// fl = true;
// console.log(fl)
// alert(fl);
// document.write(fl);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let fn = 'Артем';
// let mn = 'Саніславович';
// let ln = 'Козак';
// let person = ln + (' ') + fn + (' ') + mn;
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// prompt("Вітаю Артем Станіславович. Тобі 21 рік");


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// console.log(typeof a);
// let b = '100';
// console.log(typeof b);
// let c = true;
// console.log(typeof c);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

// 5 ? 6 -> true
// console.log(5 < 6);
//
// 5 ? 6 -> false
// console.log(5 > 6);
//
// 5 ? 6 -> false
// console.log(5 == 6);
//
// 5 ? 6 -> false
// console.log(5 >= 6);
//
// 10 ? 10 -> true
// console.log(10 == 10);
//
// 10 ? 10 -> true
// console.log(10 === 10);
//
// 10 ? 10 -> false
// console.log(10 > 10);
//
// 10 ? 10 -> false
// console.log(10 < 10);
//
// 10 ? 10 -> false
// console.log(10 !== 10);
//
// 123 ? '123' -> false
// console.log(123 < '123');
//
// 123 ? '123' -> true
// console.log(123 == '123');


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = "20";
// let a = 5;
// // сложение элементов строки
// document.write(str + a + "<br/>");
// // оператор вычитания
// document.write(str - a + "<br/>");
// // оператор умножения
// document.write(str * "2" + "<br/>");
// // оператор деления
// document.write(str / 2 + "<br/>");

