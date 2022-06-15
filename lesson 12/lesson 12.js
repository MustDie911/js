// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        let divFull = document.createElement('div');
        divFull.classList.add('divFull');
        for (const divFullElement of posts) {
            let divElement = document.createElement('div');
            divElement.classList.add('divElement');
            divElement.innerHTML = `<p>${divFullElement.userId}</p>
id: ${divFullElement.id};
title: ${divFullElement.title};
body: ${divFullElement.body}`;
            divFull.append(divElement);
            document.body.append(divFull);
            if (divFullElement.id % 2) {
                divElement.classList.add('change');
            }
        }
    })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment

// https://jsonplaceholder.typicode.com/comments
//