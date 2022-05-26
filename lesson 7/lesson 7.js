// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this['id'] = id;
//     this['name'] = name;
//     this['email'] = email;
//     this['phone'] = phone;
// }
//
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let user1 = new User(13, 'artem', 'kozak', '123@net', '0121231211');
// let user2 = new User(24, 'dima', 'dem', '123d@net', '0121231212');
// let user3 = new User(35, 'tol1', 'dems1', '123t@net', '0121231213');
// let user4 = new User(42, 'tol2', 'dems2', '123t@net', '0121231213');
// let user5 = new User(15, 'tol3', 'dems3', '123t@net', '0121231213');
// let user6 = new User(65, 'tol4', 'dems4', '123t@net', '0121231213');
// let user7 = new User(78, 'tol5', 'dems5', '123t@net', '0121231213');
// let user8 = new User(84, 'tol6', 'dems6', '123t@net', '0121231213');
// let user9 = new User(93, 'tol7', 'dems7', '123t@net', '0121231213');
// let user10 = new User(1, 'tol8', 'dems8', '123t@net', '0121231213');
//
// let users = function (...user) {
//     let userArray = [];
//     userArray.push(...user);
//     return userArray;
// }
// let user = users(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(user.filter(value => value.id % 2 === 0));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(user.sort((id1, id2) => {
//     return id1.id - id2.id
// }));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this['id'] = id;
//         this['name'] = name;
//         this['surname'] = surname;
//         this['email'] = email;
//         this['phone'] = phone;
//         this['order'] = order;
//
//     }
// }
//
// let client1 = new Client(13, 'artem', 'kozak', '123@net', '01234567890', ['someStaff', 'someStaff','someStaff','someStaff','someStaff','someStaff','someStaff']);
// let client2 = new Client(12, 'artem2', 'kozak2', '1231@net', '01234567890', ['someStaff']);
// let client3 = new Client(122, 'artem3', 'kozak3', '1232@net', '01234567890', ['someStaff', 'someStaff']);
// let client4 = new Client(14, 'artem4', 'kozak4', '1233@net', '01234567890', ['someStaff', 'someStaff','someStaff']);
// let client5 = new Client(123, 'artem5', 'kozak5', '1234@net', '01234567890', ['someStaff', 'someStaff','someStaff','someStaff']);
// let client6 = new Client(1, 'artem6', 'kozak6', '1235@net', '01234567890', ['someStaff', 'someStaff','someStaff','someStaff','someStaff']);
// let client7 = new Client(22, 'artem7', 'kozak7', '1236@net', '01234567890', ['someStaff', 'someStaff','someStaff','someStaff','someStaff','someStaff']);
// let client8 = new Client(35, 'artem8', 'kozak8', '1237@net', '01234567890', ['someStaff', 'someStaff','someStaff','someStaff','someStaff','someStaff','someStaff']);
// let client9 = new Client(17, 'artem9', 'kozak9', '1238@net', '01234567890', ['someStaff', 'someStaff','someStaff']);
// let client10 = new Client(54, 'artem10', 'kozak10', '1239@net', '01234567890', ['someStaff', 'someStaff','someStaff']);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let client = function (...client) {
//     let clientArray = [];
//     clientArray.push(...client);
//     return clientArray;
// }
// let clients = client(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
// console.log(clients.sort(function (c1, c2) {
//     return c1.order.length - c2.order.length
// }));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// function Car(model, prod, year, maxSpeed, eV) {
//     this['model'] = model;
//     this['prod'] = prod;
//     this['year'] = year;
//     this['maxSpeed'] = maxSpeed;
//     this['eV'] = eV;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//    this.info = function () {
//        console.log(`model - ${this.model}, prod - ${this.prod}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, eV - ${this.eV}`)
//     };
//    //  //  //  //  //  //  //  //   or
//     this.info2 = function () {
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`)
//         }
//     }
//     this.newMaxSpeed = function (addSpeed) {
//         this.maxSpeed = maxSpeed + addSpeed;
//     }
//     this.newYear = function (changeYear) {
//         this.year=changeYear;
//     }
//     this.driver = function (newDriver) {
//         this.newDriver = newDriver;
//     }
//
// }
//
// let car1 = new Car('Y', 'Tesla', 2020, 290, 0)
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
// car1.drive()
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
// car1.info()
// car1.info2()
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// car1.newMaxSpeed(120);
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// car1.newYear(2022)
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// car1.driver('Art')
// console.log(car1)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class car {
//     constructor(model, prod, year, maxSpeed, Ev) {
//         this['model'] = model;
//         this['prod'] = prod;
//         this['year'] = year;
//         this['maxSpeed'] = maxSpeed;
//         this['Ev'] = Ev;
//     };
//
//     drive(maxSpeed) {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info() {
//         for (const item in this) {
//             console.log(`${item} — ${this[item]}`)
//         }
//     }
//     increaseMaxSpeed (newSpeed){
//         console.log(`нова швидкість ${this.maxSpeed = this.maxSpeed+newSpeed}`)
//     }
//     changeYear (newValue){
//         console.log(this.year = newValue);
//     }
//     addDriver (driver){
//         console.log(this.driver = driver);
//     }
// }
//
// let car1 = new car('S600', 'Mercedes', 2021, 280, 6.0);
// car1.drive();
// car1.info()
// car1.increaseMaxSpeed(20)
// car1.changeYear(2022)
// car1.addDriver('tom')



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class cind {
    constructor(name, age, size) {
        this['name'] = name;
        this['age'] = age;
        this['size'] = size;
    };
}
let cind1= new cind('tanya',20,36);
let cind2= new cind('anna',21,30);
let cind3= new cind('nata',22,31);
let cind4= new cind('lera',23,32);
let cind5= new cind('nastya',24,33);
let cind6= new cind('vika',25,34);
let cind7= new cind('nika',26,35);
let cind8= new cind('ira',19,36);
let cind9= new cind('sasha',18,37);
let cind10= new cind('inna',25,38);

let cinds = function (...cind) {
    let cindArray = [];
    cindArray.push(...cind);
    return cindArray;
}
let cinderelas = cinds(cind1,cind2,cind3,cind4,cind5,cind6,cind7,cind8,cind9,cind10);
console.log(cinderelas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class prince {
    constructor(name, age, bootSize) {
        this['name'] = name;
        this['age'] = age;
        this['bootSize'] = bootSize;
    };
}
let prince1 = new prince('petro',25,31)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let finder = (cinderelas,prince1)=>{
    for (const item of cinderelas) {
        if (item.size===prince1.bootSize){
            return`${item.name}`
        }
    }
}

console.log(finder(cinderelas, prince1));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// console.log(cards.find(value => value.cardSuit === 'clubs' && value.value === 'ace'));
console.log(cinderelas.find(value => value.size === prince1.bootSize));
