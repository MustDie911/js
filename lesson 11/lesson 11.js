//
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// const {userName, userAge} = document.forms.form;
// const btn = document.getElementById('btn');
// const key = 'user';
// const saver = (userName, userAge) => {
//     const obj = {
//         userName,
//         userAge
//     }
//     localStorage.setItem(key, JSON.stringify(obj));
// }
// btn.onclick = () => {
//     saver(userName.value, userAge.value);
// }


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// const {model, type, volume} = document.forms.car;
// const btn = document.getElementById('btn2');
// const key = "car";
//
// const saver = (model, type, volume) => {
//     const localStor = JSON.parse(localStorage.getItem(key)) || [];
//     localStor.push({model, type, volume});
//     localStorage.setItem(key, JSON.stringify(localStor));
// }
// btn.onclick = () => {
//     saver(model.value, type.value, volume.value);
// }