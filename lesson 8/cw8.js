// cw
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let main_headerId = document.getElementById(`main_header`);
// console.log(main_headerId)

// b) робить шириниу елементу ul 400px

// let ulCollection = document.getElementsByTagName('ul');
// for (const ulCollectionElement of ulCollection) {
//     ulCollectionElement.style.width = '400px';
//     ulCollectionElement.style.backgroundColor = 'cornflowerblue';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liCollection = document.getElementsByTagName('li');
// for (const liCollectionElement of liCollection) {
//     liCollectionElement.style.width = '50%';
//     liCollectionElement.style.backgroundColor = 'grey';
//     liCollectionElement.style.margin = '5px';
// }
// let txt2 = liCollection[1].children[0];
// txt2.innerText = 'not_a_link'


// f) отримує всі елементи 'a' та додає їм клас anchor

// let a = document.getElementsByTagName('a');
// console.log(a);
// for (let aElement of a) {
//     aElement.classList.add('anchor')
//     console.log(aElement);
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let a = document.getElementsByTagName('a');
// console.log(a);
// for (let aElement of a) {
//     console.log(aElement);
//     if (aElement.innerText === 'link3') {
//         aElement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let a = document.getElementsByTagName('a');
// console.log(a);
// for (let aElement of a) {
//     console.log(aElement);
//     let newClass = aElement.innerText
//     aElement.classList.add(`element_${newClass}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeaderColour = document.getElementsByClassName('sub-header');
// console.log(subHeaderColour);
// for (const sub of subHeaderColour) {
//     sub.style.color = prompt('pink,red,gold');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let sh = document.getElementsByClassName('sub-header');
// for (const c of sh) {
//     console.log(c);
//     if (c.innerText === 'content 2 segment') {
//         c.style.color = prompt('pink,red,gold');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = document.getElementsByClassName('content_1');
// console.log(text[0].innerText);
// text[0].innerText = prompt('введіть текст');

// l) отримати елементи p та змінити їм padding на 20px

// let p = document.getElementsByTagName('p');
// for (const pElement of p) {
//     pElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let txt = document.getElementsByClassName('text2');
// console.log(txt)
// txt[0].innerText = 'dec-2021';


