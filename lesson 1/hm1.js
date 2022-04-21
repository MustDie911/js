// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a = 'hello';
// console.log(a);
// alert(a);
// document.write(a);
//
// let b = 'owu';
// console.log(b);
// alert(b);
// document.write(b);
//
// let c = 'com';
// console.log(c);
// alert(c);
// document.write(c);
//
// let d = 'ua';
// console.log(d);
// alert(d);
// document.write(d);
//
// let e = 1;
// console.log(e);
// alert(e);
// document.write(e);
//
// let f = 10;
// console.log(f);
// alert(f);
// document.write(f);
//
// let g = -999;
// console.log(g);
// alert(g);
// document.write(g);
//
// let h = 123;
// console.log(h);
// alert(h);
// document.write(h);
//
// let i = 3.14;
// console.log(i);
// alert(i);
// document.write(i);
//
// let j = 2.7;
// console.log(j);
// alert(j);
// document.write(j);
//
// let k = 16;
// console.log(k);
// alert(k);
// document.write(k);
//
// let l = true;
// console.log(l);
// alert(l);
// document.write(l);
//
// let m = false;
// console.log(m);
// alert(m);
// document.write(m);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)

// let book = [
//     name = 'BookName',
//     pages = 999,
//     type = 'BookType'
// ]
// console.log(book);


// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

// let book = [
//     name = 'BookName',
//     pages = 999,
//     type = 'BookType',
//     author = [
//         name1 = 'Name1',
//         name2 = 'Name2',
//     ]
// ]
// console.log(book);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// let firstName = 'Artem';
// let middleName = 'St.';
// let lastName = 'Kozak';
// let person = firstName + ' ' + middleName + ' ' + lastName
// console.log(person)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

// let firstName = prompt('enter firstName');
// let middleName = prompt('enter middleName');
// let lastName = prompt('enter lastName');
// let person = firstName + ' ' + middleName + ' ' + lastName
// console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// console.log(typeof a);
// let b = '100';
// console.log(typeof b);
// let c = true
// console.log(typeof c);

// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

// let books = [
//     {
//         bookName: 'Aquarium',
//         numberOfPages: 351,
//         genre: 'Biography',
//         author: 'Victor Suvorov'
//     },
//     {
//         bookName: 'Kot',
//         numberOfPages: '145',
//         genre: 'Horror',
//         author: 'Mark Tes'
//     },
//     {
//         bookName: 'Boogi mean',
//         numberOfPages: 201,
//         genre: 'Horror',
//         author: 'Natan Show'
//     }
// ]
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// let height = 23;
// let width = 10;
// let S = height*width;
// console.log(S)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

// let heightC = 10;
// let dC = 4;
// let r = dC/2
// let v = Math.floor(Math.PI*(r**2)*heightC);
// console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

// let n = 3;
// let m = 4
// let k = Math.sqrt((3**2) + (Math.pow(4, 2)));
// console.log(k);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

//5 ? 6 -> true
// console.log(5<6);

// 5 ? 6 -> false
// console.log(5>6);

// 5 ? 6 -> false
// console.log(5 == 6);

// 5 ? 6 -> false
// console.log(5>=6);

// 10 ? 10 -> true
// console.log(10===10);

// 10 ? 10 -> true
// console.log(10 == 10);

// 10 ? 10 -> false
// console.log(10<10);

// 10 ? 10 -> false
// console.log(10>10);

// 10 ? 10 -> false
// console.log(10 !== 10)

// 123 ? '123' -> false
// console.log(123 === '123');

// 123 ? '123' -> true
// console.log(123 == '123')
