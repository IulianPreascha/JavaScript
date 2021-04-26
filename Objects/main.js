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

// let user = {
//     name: "John",
//     age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")

//? How to calculate properties ?

// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag.apple ); // 5, если fruit="apple"

//! Property from variable

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// let user = makeUser("John", 30);
// console.table(user);

//* We can also use 

// function makeUser(name, age) {
//     return {
//       name, // то же самое, что и name: name
//       age   // то же самое, что и age: age
//       // ...
//     };
// }

//* We can also use both of them 

// let user = {
//     name,  // тоже самое, что и name:name
//     age: 30
//   };


//! Restrictions on property names

// эти имена свойств допустимы
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
  
//   alert( obj.for + obj.let + obj.return );  // 6

//* one more 

// let obj = {
//     0: "Тест" // то же самое что и "0": "Тест"
//   };
  
//   // обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
//   alert( obj["0"] ); // Тест
//   alert( obj[0] ); // Тест (то же свойство)

//? How to check if we have this variable in the object ?

// let user = {name: 'John', age: 30};

// alert( 'age' in user );
// alert( 'blabla' in user);

//! we need 'in' to check if variable exist in object

let obj = {
    test: undefined
};
  
alert( obj.test ); //  выведет undefined, значит свойство не существует?
alert( "test" in obj ); // true, свойство существует!
