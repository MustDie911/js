// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// document.getElementById('btn').addEventListener('click',function () {
//     document.getElementById("text").hidden = true
// });

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let htmlInputElement = document.createElement('input');
htmlInputElement.type = 'number';
let htmlButtonElement = document.createElement('button');
htmlButtonElement.innerText='chek';
document.body.append(htmlInputElement,htmlButtonElement);

htmlButtonElement.addEventListener('click',function () {
    if (htmlInputElement.value >= 18) {
        alert('access is allowed')
    } else {
        alert('access denied')
    }
    htmlInputElement.value = '';
})


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let elementById = document.getElementById('btn');
// elementById.addEventListener('click',function () {
//     console.log(document.forms.firstForm.firstInput.value);
//     console.log(document.forms.firstForm.SecondInput.value);
//     console.log(document.forms.secondForm.thirdInput.value);
//     console.log(document.forms.secondForm.thirdInput.value);
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const num1 = document.createElement('input');
//
// const num2 = document.createElement('input');
//
// const text = document.createElement('input');
// const button = document.createElement('button');
// button.innerText = 'OK';
// document.body.append(num1, num2, text, button);
// button.addEventListener('click', function (){
//     const tr = num1.value;
//     const td = num2.value;
//     const inptext = text.value;
//     function createTable (tr, td, text) {
//         const table = document.createElement('table');
//         document.body.append(table);
//         for (let i = 0; i < tr; i++) {
//             const tr = document.createElement('tr');
//             table.appendChild(tr);
//             for (let j = 0; j < td; j++) {
//                 const td = document.createElement('td');
//                 td.innerText = `${text}`;
//                 td.style.border = '2px solid black';
//                 td.style.color = 'black'
//                 tr.appendChild(td);
//
//             }
//
//         }
//
//     }
//     createTable(tr, td, inptext);
// })
