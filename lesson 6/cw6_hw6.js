// cw

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let name = (str, s) => {
//     let newArr = [];
//     if (str.includes(s)) {
//         let a = str.split(s)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n1, '.');
// name(n2, '-');
// name(n3, '_');

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random = (length, num) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * num));
//     }
//     return arr;
// };
// let res = random(10, 100);
// console.log(res);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// res.sort(( a, b ) =>  a - b);
// console.log(res)
// res.sort(( a, b ) =>  b - a);
// console.log(res)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let f = (length, num) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * num));
//     }
//     return arr.filter(value => value % 2 === 0);
// };
// console.log(f(10, 100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let random = (length, num) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * num));
//     }
//     return arr.map(value => value.toString());
// };
// console.log(random(10, 100));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') return arr.sort((a, b) => a - b);
//     if (direction === 'descending') return arr.sort((a, b) => b - a);
// };
// console.log(sortNums([3,11,21], 'descending') );


// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let sortMonthDuration = coursesAndDurationArray.sort((a,b)=>{
//     return b.monthDuration - a.monthDuration
// })
// console.log(sortMonthDuration);
// //
// let filterMonthDuration = coursesAndDurationArray.filter((element)=>{
//     return element.monthDuration > 5
// })
// console.log(filterMonthDuration);

// hw
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.length);
//
// let loremIpsum = 'lorem ipsum';
// console.log(loremIpsum.length);
//
// let javascriptIsCool = 'javascript is cool';
// console.log(javascriptIsCool.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let helloWorld = 'hello world';
// console.log(helloWorld.toLocaleUpperCase());
//
// let loremIpsum = 'lorem ipsum';
// console.log(loremIpsum.toLocaleUpperCase());
//
// let javascriptIsCool = 'javascript is cool';
// console.log(javascriptIsCool.toLocaleUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let helloworld = 'HELLO WORLD';
// console.log(helloworld.toLocaleLowerCase());
//
// let loremipsum = 'LOREM IPSUM';
// console.log(loremipsum.toLocaleLowerCase());
//
// let javascriptiscool = 'JAVASCRIPT IS COOL';
// console.log(javascriptiscool.toLocaleLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str);
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray= str=>  str.split(' ');
// let str = 'Каждый охотник желает знать';
// let azaza = 'яка перетворює рядок на масив слів.'
// console.log(stringToarray(str));
// console.log(stringToarray(azaza));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let logDelete_characters = (str, length = 1) => {
//     console.log(str.slice(0, length));
// }
//
//     let str = 'Каждый охотник желает знать';
// logDelete_characters(str, 7);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let logInsert_dash = str => console.log(str.split(' ').join('-').toLocaleUpperCase());
//     let str = "HTML JavaScript PHP";
//     let azaza = 'яка перетворює рядок на масив слів.'
//
// logInsert_dash(str)
// logInsert_dash(azaza)


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let logUpperStart = (str) =>{
//     console.log(str.replace(str[0], str[0].toLocaleUpperCase()));
// }
// logUpperStart('hello');
// logUpperStart('alex');

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// function capitalize(str) {
//    let strArr = str.toLocaleLowerCase().split(' ');
//     for (let i = 0; i < strArr.length; i++) {
//         strArr[i] = strArr[i].charAt(0).toLocaleUpperCase() + strArr[i].substr(1);
//     }
//     return strArr.join(' ')
// }
//
// console.log(capitalize('skdjnvkds csjdnckjsdkn cbskjoicsdo ciosd'));
