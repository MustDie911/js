// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let txt1 = 'hello world';
// console.log(txt1.length);
// let txt2 = 'lorem ipsum';
// console.log(txt2.length);
// let txt3 = 'javascript is cool';
// console.log(txt3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let txt1 = 'hello world';
// console.log(txt1.toUpperCase());
// let txt2 = 'lorem ipsum';
// console.log(txt2.toUpperCase());
// let txt3 = 'javascript is cool';
// console.log(txt3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let txt1 = 'HELLO WORLD';
// console.log(txt1.toLowerCase());
// let txt2 = 'LOREM IPSUM';
// console.log(txt2.toLowerCase());
// let txt3 = 'JAVASCRIPT IS COOL';
// console.log(txt3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '))
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(value => value + ''))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//     let nums = [11,21,3];
// let sortNums = (arr, direction) =>{
//     if (direction === 'ascending' ){
//         arr.sort((a,b) => a-b)
//     } else if (direction === 'descending'){
//         arr.sort((a,b) => b-a)
//     }
//     return arr;
// }
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'));


//
//
// - є масив
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort(function (d1, d2) {
//     return d2.monthDuration - d1.monthDuration;
// }));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter(d => d.monthDuration >= 5);
// console.log(filter)

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
let cards = [
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {value: 'joker'},
    {value: 'joker'}
];

// - знайти піковий туз
// console.log(cards.find(value => value.cardSuit === 'clubs' && value.value === 'ace'));

// - всі шістки
// console.log(cards.filter(value => value.value === '6'));

// - всі червоні карти
// console.log(cards.filter(value => value.color === 'red'));

// - всі буби
// console.log(cards.filter(value => value.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
// console.log(cards.filter(value => value.cardSuit === 'clubs' && value.value > '8' || value.value === '10' && value.cardSuit === 'clubs' || value.value === 'joker'));
