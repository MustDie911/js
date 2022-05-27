// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// console.log(document.getElementById("content").innerText);

// -- отримує текст з блоку з id "rules"
// console.log(document.getElementById("rules").innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
// let elementById = document.getElementById("content");
// elementById.innerHTML = '<p> Black Sabbath — британская рок-группа, образованная в Бирмингеме</p>'

// -- замініть текст параграфа з id 'rules' на будь-який інший
// let elementById2 = document.getElementById("rules");
// elementById2.innerHTML = '<p>Дебютный альбом Black Sabbath считается одним из первых хеви-метал-альбомов, заложившим, кроме того, фундамент и для последующего развития дум-метала.<p>'
//

// -- змініть кожному елементу колір фону на червоний
// elementById.style.backgroundColor = 'red'
//
// elementById2.style.backgroundColor = 'red'

// -- змініть кожному елементу колір тексту на синій
// elementById.style.color = 'blue'
// elementById2.style.color = 'blue'


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(document.getElementsByClassName("fc_rules"));

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let elementsByClassName = document.getElementsByClassName("fc_rules");
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.color = 'red'
// }

// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// // a) додає клас з назвою групи, елементу з ід main_header
//
// let elementById1 = document.getElementById( "main_header");
// elementById1.className = 'mar2022'
//
// // b) робить шириниу елементу ul 400px
// let elementsByTagName = document.getElementsByClassName("linkList");
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.width = '400px'
//     elementsByTagNameElement.style.border = '1px solid red'
//     elementsByTagNameElement.style.marginTop = '3px'
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
//     elementsByTagNameElement.style.width = '50%'
// }



// d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.getElementsByClassName("listElement2")
// for (const listElement2Element of listElement2) {
//     console.log(listElement2Element.innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let elementsByTagName1 = document.getElementsByTagName('li');
// for (const elementsByTagName1Element of elementsByTagName1) {
//     elementsByTagName1Element.style.backgroundColor = 'silver'
// }


// // f) отримує всі елементи 'a' та додає їм клас anchor
// let elementById3 = document.getElementsByTagName('a');
// for (const elementById3Element of elementById3) {
//     elementById3Element.className = 'anchor';
//
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     if (elementById3Element.innerText === 'link3'){
//         elementById3Element.style.fontSize = '40px';
//     }
// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     elementById3Element.classList.add(`element_${elementById3Element.innerText}`)
//
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let baggroundChanger = prompt('enter colour')
// let elementsByClassName1 = document.getElementsByClassName('sub-header');
// for (const elementsByClassName1Element of elementsByClassName1) {
//     elementsByClassName1Element.style.backgroundColor = baggroundChanger
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let txtChanger = prompt('enter colour')
// let elementsByClassName3 = document.getElementsByClassName('sub-header');
// for (const elementsByClassName1Element of elementsByClassName3) {
//     if (elementsByClassName1Element.innerText === 'content 2 segment') {
//         elementsByClassName1Element.style.color = txtChanger;
//     }
// }



// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let txtChanger2 = prompt('enter text')
// let elementsByClassName2 = document.getElementsByClassName('content_1');
// for (const elementsByClassName1Element of elementsByClassName2) {
//         elementsByClassName1Element.innerHTML = txtChanger2;
// }


// l) отримати елементи p та змінити їм padding на 20px

// let elementsByTagName2 = document.getElementsByTagName('p');
// for (const elementsByTagName2Element of elementsByTagName2) {
//     elementsByTagName2Element.style.padding = '20px'
// }



// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementsByClassName1 = document.getElementsByClassName('text2');
// for (const elementsByClassName1Element of elementsByClassName1) {
//     elementsByClassName1Element.innerText = 'mar-2022';
// }

