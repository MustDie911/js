// - створити блок,

//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let htmlDivElement = document.createElement('div');
// let elementsByClassName3 = document.getElementsByTagName('div')
// htmlDivElement.setAttribute('class', 'wrap collapse alpha beta');
// document.body.append(htmlDivElement)
// htmlDivElement.style.width = '700px'
// htmlDivElement.style.height = '700px'
// htmlDivElement.style.backgroundColor = 'cornflowerblue';
// htmlDivElement.style.color = 'gold';
// htmlDivElement.style.fontSize = '70px';
// htmlDivElement.innerHTML = '<h1>Доброго вечора, ми з України<h1>';
// htmlDivElement.style.textAlign = 'center';
// document.body.appendChild(htmlDivElement.cloneNode(true))


// // - Є масив:
// let str = ['Main', 'Products', 'About us', 'Contacts'];
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// for (const string of str) {
//     let elementsByClassName = document.getElementsByClassName('menu')[0];
//     let htmlliElement = document.createElement('li');
//     htmlliElement.innerText = string;
//     elementsByClassName.appendChild(htmlliElement);
// }


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.className = 'coursesAndDurationArrayElement';
//     let htmlHeadingElement = document.createElement('h2');
//     htmlHeadingElement.innerText = `${coursesAndDurationArrayElement.title}`;
//     let htmlParagraphElement = document.createElement('p');
//     htmlParagraphElement.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
//     document.body.append(htmlHeadingElement, htmlParagraphElement);
//
// }


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray2 = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray2) {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.className = 'item';
//     let htmlHeadingElement = document.createElement('h1');
//     htmlHeadingElement.className = 'heading';
//     let htmlParagraphElement = document.createElement('p');
//     htmlParagraphElement.className = 'description';
//     document.body.append(htmlDivElement);
//     htmlDivElement.append(htmlHeadingElement,htmlParagraphElement);
// }