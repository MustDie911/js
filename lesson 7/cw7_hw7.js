// cw
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car(model, brand, year, maxSpeed, v) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.v = v;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let car = new Car('skyline r34', 'nissan', 2002, 300, 2.8)
// console.log(car)
// car.drive();
// car.info();
// car.newMaxSpeed(10);
// car.drive();
// car.changeYear(2004);
// car.info();
// car.addDriver('Artem')
// console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class CarClass{
//     model
//     prod
//     year
//     maxSpeed
//     vol
//
//     constructor(model, prod, year, maxSpeed, vol, drive) {
//         this.model = model;
//         this.prod = prod;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.vol = vol;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info () {
//         console.log(`модель - ${this.model}, виробник - ${this.prod}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, обем двигуна - ${this.vol}`);
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     changeYear (newValue){
//         this.year=newValue;
//     }
//     addDriver (driver){
//         this.driver=driver;
//         console.log(`водій - ${this.driver}`)
//     }
// }
// let  car = new CarClass('skyline r34 gt-r', "nissan", '1998', 250, '2.8')
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(35);
// car.changeYear(2000);
// car.addDriver('Artem');
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella {
//     name
//     age
//     size
//
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let cinderellas = [
//     new Cinderella('cinderella1', 18, 36),
//     new Cinderella('cinderella2', 19, 37),
//     new Cinderella('cinderella3', 20, 38),
//     new Cinderella('cinderella4', 21, 39),
//     new Cinderella('cinderella5', 22, 40),
//     new Cinderella('cinderella6', 23, 41),
//     new Cinderella('cinderella7', 24, 42),
//     new Cinderella('cinderella8', 25, 43),
//     new Cinderella('cinderella9', 26, 43),
//     new Cinderella('cinderella10', 27, 44),
// ]
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let prince = new Prince('prince', 25, 37);
// let pair = (cinderellas, prince) => {
//     for (const item of cinderellas) {
//         if (item.size === prince.shoe) {
//             return `your Cinderella: ${item.name}`
//         }
//     }
// };
// console.log(pair(cinderellas, prince))


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let cind = cinderellas.find((item)=>item.size === prince.shoe);
// console.log(cind);


// hw
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let user1 = new User(1,'Sam','James','asdqwe@gmail.com',"0501231234")
// console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let users = [
//     new User(8, 'artem', 'kozak', 'kozak@gmail.com', '0961234567'),
//     new User(7, 'oleg', 'moses', 'moses@gmail.com', '0985674545'),
//     new User(3, 'roma', 'surnmane1', 'surnmanek2@gmail.com', '0961234567'),
//     new User(6, 'vasya', 'surnmane2', 'surnmanek1@gmail.com', '0961234567'),
//     new User(4, 'ivan', 'surnmane3', 'surnmanek3@gmail.com', '0961234567'),
//     new User(25, 'olga', 'surnmane4', 'surnmanek4@gmail.com', '0961234567'),
//     new User(11, 'dima', 'surnmane5', 'surnmanek5@gmail.com', '0961234567'),
//     new User(35, 'anton', 'surnmane6', 'surnmanek6@gmail.com', '0961234567'),
//     new User(69, 'anna', 'surnmane7', 'surnmanek7@gmail.com', '0961234567'),
//     new User(2, 'vika', 'surnmane8', 'surnmanek8@gmail.com', '0961234567'),
// ]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUsers = users.filter(value => value.id % 2 === 0);
// console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sorted = users.sort((a, b) => a.id - b.id);
// console.log(sorted);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// let clientOrders =[
//     new Client(25,'artem','kozak','artem@gmail.com',"0967874554",['ball','ps5','psp','vacuum_cleaner','torch','adapter_usb','adapter_hdmi','earpods']),
//     new Client(29,'1artem','1kozak','ar1tem@gmail.com',"0965874554",['ball','ps5','psp','torch','adapter_usb','adapter_hdmi','earpods']),
//     new Client(24,'a2rtem','k2ozak','art2em@gmail.com',"0961874554",['ball','ps5','psp','vacuum_cleaner','adapter_usb','earpods']),
//     new Client(21,'ar3tem','ko3zak','arte3m@gmail.com',"0961874554",['ball']),
//     new Client(88,'art4em','koz4ak','artem4@gmail.com',"0967874554",['ball','ps5','psp','torch','adapter_usb','adapter_hdmi']),
//     new Client(485,'arte5m','koza5k','artem@5gmail.com',"0969874554",['ball','psp','vacuum_cleaner','torch','adapter_usb','earpods']),
//     new Client(2,'artem6','kozak6','artem@g6mail.com',"0966874554",['ball','ps5','psp','vacuum_cleaner','torch','adapter_usb','adapter_hdmi']),
//     new Client(9,'arte7m','koza7k','artem@gm7ail.com',"0967874554",['ball','psp','vacuum_cleaner','torch','adapter_usb','earpods']),
//     new Client(4,'art8em','koza8k','artem@gma8il.com',"0963874554",['ball','ps5','psp','vacuum_cleaner','adapter_usb','adapter_hdmi','earpods']),
//     new Client(7,'ar9tem','koz9ak','artem@gmai9l.com',"0967874554",['ball','ps5','torch','adapter_usb','adapter_hdmi','earpods']),
//
// ]
// console.log(clientOrders)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sorted = clientOrders.sort((a, b) => a.order.length - b.order.length);
// console.log(sorted)