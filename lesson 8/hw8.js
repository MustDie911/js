// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// let contentId = document.getElementById(`content`).innerText;
// console.log(contentId)

// -- отримує текст з блоку з id "rules"

// let rulesId = document.getElementById(`rules`).innerText;
// console.log(rulesId)

// -- замініть текст параграфа з id 'content' на будь-який інший

// document.getElementById(`content`).innerText = `123`

// -- замініть текст параграфа з id 'rules' на будь-який інший

// document.getElementById(`rules`).innerText = `321`

// -- змініть кожному елементу колір фону на червоний

// let contentChangeColour =  document.body.children;
// for (const changes of contentChangeColour) {
//     changes.style.backgroundColor = 'red';
// }

// -- змініть кожному елементу колір тексту на синій

// for (const contentChangeColourElement of contentChangeColour) {
//     contentChangeColourElement.style.color = 'blue'
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log


// let listRules = document.getElementById(`rules`).classList;
// console.log(listRules);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let fc_rules = document.getElementsByClassName('fc_rules');
// for (let fcRule of fc_rules) {
//     fcRule.style.color='black';
// }