//! Empty objects 

// let user = new Object(); // синтаксис "конструктор объекта"
// let user1 = {};  // синтаксис "литерал объекта"

// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30,        // под ключом "age" хранится значение 30
//     "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
//   };

// user.isAdmin = true;
// user.birthday = '27 martch';
// delete user.age;

// // console.log('%c My Friends', 'color: orange; font-weight: bold');
// console.log(user);

//? Const can be changed 

// const user = {
//     name: 'John',
// }

// user.name = 'Pete';

// console.log(user.name);

//? How to console.log a name with 2 words ??

// let user = {};

// // присваивание значения свойству
// user["likes birds"] = true;

// // получение значения свойства
// alert(user["likes birds"]); // true

// // удаление свойства
// delete user["likes birds"];

//! OR

// let key = "likes birds";

// // то же самое, что и user["likes birds"] = true;
// user[key] = true;

// alert(key);

//? How to acces key ?

let user = {
    name: "John",
    age: 30
};

let key = prompt("Что вы хотите узнать о пользователе?", "name");

// доступ к свойству через переменную
alert( user[key] ); // John (если ввели "name")


