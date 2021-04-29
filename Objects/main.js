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

// let obj = {
//     test: undefined
// };
  
// alert( obj.test ); //  выведет undefined, значит свойство не существует?
// alert( "test" in obj ); // true, свойство существует!

//* Loop "for ... in"

// for (key in object) {
//     // тело цикла выполняется для каждого свойства объекта
// }

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // ключи
//     alert( key );  // name, age, isAdmin
//     // значения ключей
//     alert( user[key] ); // John, 30, true
//   }

//* OR

// let user = {
//     name: "John",
//     surname: "Smith"
//   };
//   user.age = 25; // добавим ещё одно свойство
  
//   // не целочисленные свойства перечислены в порядке создания
//   for (let prop in user) {
//     alert( prop ); // name, surname, age
//   }

//! Homework 

//? 1

// let user = {}

// user.name = 'John';
// user.surname = 'Smith';

// user.name = 'Pete'

// delete user.name;

//? 2 

// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }

//? 3

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;
// for( let key in salaries ) {
//     sum += salaries[key];
// }

// alert(sum);

//? 4

// function multiplyNumeric(obj) {
//     for( let key in obj) {
//         if (typeof obj[key] === "number"){
//             obj[key] *= 2;
//         };
//     }
// };

//! Copying objects and links

// let user = { name: 'Иван' };

// let admin = user;

// admin.name = 'Петя'; // изменено по ссылке из переменной "admin"

// alert(user.name); // 'Петя', изменения видны по ссылке из переменной "user"

//? Two objects are equal in case if they are the same objects

// let a = {};
// let b = a; // копирование по ссылке

// alert( a == b ); // true, т.к. обе переменные ссылаются на один и тот же объект
// alert( a === b ); // true

//! Two empty objects are not the same !

// let a = {};
// let b = {}; // два независимых объекта

// alert( a == b ); // false

//? We can also copy the objects 

// let user = {
//     name: "Иван",
//     age: 30
// };

// let clone = {}; // новый пустой объект

// // скопируем все свойства user в него
// for (let key in user) {
//     clone[key] = user[key];
// }

// // теперь в переменной clone находится абсолютно независимый клон объекта
// clone.name = "Пётр"; // изменим в нём данные

// alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – Иван.

//? We also can copy it by using Object.assign

// let user = { name: "Иван" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// // теперь user = { name: "Иван", canView: true, canEdit: true }

// console.table(user);

//* We can change name form objects 

// let user = { name: "Иван" };

// Object.assign(user, { name: "Пётр" });

// alert(user.name); // теперь user = { name: "Пётр" }

//* We can clone objects by using Object.assign 

// let user = {
//     name: "Иван",
//     age: 30
//   };
  
//   let clone = Object.assign({}, user);

//* We must know that Object.assign doesn clone objects from object

// let user = {
//     name: "Иван",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert( user.sizes === clone.sizes ); // true, один и тот же объект
  
//   // user и clone обращаются к одному sizes
//   user.sizes.width++;       // меняем свойство в одном объекте
//   alert(clone.sizes.width); // 51, видим результат в другом объекте

// function multiplyNumeric(obj) {
//     for( let key in obj ) {
//         if( typeof obj[key] === 'numeric' ) {
//             obj[key] *= 2;
//         }
//     }
// }

// эти объекты делают одно и то же (одинаковые методы)

//! OOП

// user = {
//     sayHi: function() {
//       alert("Привет");
//     }
//   };
  
//   // сокращённая запись выглядит лучше, не так ли?
//   user = {
//     sayHi() { // то же самое, что и "sayHi: function()"
//       alert("Привет");
//     }
//   };

//? This

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('b');

//! Cool thing wuth THIS

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }, this);
//     }
// };

// video.showTags();

//! "THIS" Homework

//TODO (1)

// function makeUser() {
//     return {
//       name: "Джон",
//       ref: this
//     };
//   };
  
// let user = makeUser();
  
// alert( user.ref.name ); // Каким будет результат?

//TODO (2)

// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

//TODO (3) 

//! not good

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//     }
//   };

//! NICE 

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   }
  
//   ladder.up().up().down().up().down().showStep(); // 1

//! Construction-Function

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Вася");

// alert(User.name); // Вася
// alert(User.isAdmin); // false

//? User Target 

// function User() {
//   alert(new.target);
// }

// // без "new":
// User(); // undefined

// // с "new":
// new User(); // function User { ... }

//? New user

// function User(name) {
//   if (!new.target) { // в случае, если вы вызвали без оператора new
//     return new User(name); // ...добавим оператор new за вас
//   }

//   this.name = name;
// }

// let vasya = User("Вася"); // переадресовывает вызовы на new User
// alert(vasya.name); // Вася

//? Method construction 

// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     alert( "Меня зовут: " + this.name );
//   };
// }

// let vasya = new User("Вася");

// vasya.sayHi(); // Меня зовут: Вася

/*
vasya = {
   name: "Вася",
   sayHi: function() { ... }
}
*/

//TODO Homework

//TODO (1)

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); // true

//TODO (2)

// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

//TODO (3)

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('Сколько нужно добавить?', 0);
//   };

// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

//! Symbol

// // Создаём новый символ - id
// let id = Symbol();

// // Создаём символ id с описанием (именем) "id"
// let id = Symbol("id");

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert(id1 == id2); // false

// let id = Symbol("id");
// alert(id); // TypeError: Cannot convert a Symbol value to a string

// let id = Symbol("id");
// alert(id.toString()); // Symbol(id), теперь работает

// let user = {
//   name: "Вася"
// };

// let id = Symbol("id");

// user[id] = 1;

// alert( user[id] ); // мы можем получить доступ к данным по ключу-символу

// let id = Symbol("id");

// user[id] = "Их идентификатор";

// let user = { name: "Вася" };

// // Объявляем в нашем скрипте свойство "id"
// user.id = "Наш идентификатор";

// // ...другой скрипт тоже хочет свой идентификатор...

// user.id = "Их идентификатор"
// // Ой! Свойство перезаписано сторонней библиотекой!

// let id = Symbol("id");

// let user = {
//   name: "Вася",
//   [id]: 123 // просто "id: 123" не сработает
// };

// let id = Symbol("id");
// let user = {
//   name: "Вася",
//   age: 30,
//   [id]: 123
// };

// for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)

// // хотя прямой доступ по символу работает
// alert( "Напрямую: " + user[id] );

// let id = Symbol("id");
// let user = {
//   [id]: 123
// };

// let clone = Object.assign({}, user);

// alert( clone[id] ); // 123

// // читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for("id"); // если символа не существует, он будет создан

// // читаем его снова в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for("id");

// // проверяем -- это один и тот же символ
// alert( id === idAgain ); // true

// // получаем символ по имени
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");

// // получаем имя по символу
// alert( Symbol.keyFor(sym) ); // name
// alert( Symbol.keyFor(sym2) ); // id

// let globalSymbol = Symbol.for("name");
// let localSymbol = Symbol("name");

// alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
// alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

// alert( localSymbol.description ); // name

//! Symbol.to.Primitive

// obj[Symbol.toPrimitive] = function(hint) {
//   // должен вернуть примитивное значение
//   // hint равно чему-то одному из: "string", "number" или "default"
// };

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500