// alert("Hello");

// let age = prompt('Сколько тебе лет?', 100);

// alert(`Тебе ${age} лет!`); // Тебе 100 лет!

// let isBoss = confirm("Ты здесь главный?");

// alert( isBoss ); // true, если нажата OK

// let name = prompt("Ваше имя?", "");
// alert(`Тебя зовут ${name}.`)

// alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
// alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
// alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)

// alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
// alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)

//! Обратите внимание, если хотя бы один операнд является строкой, то второй будет также преобразован в строку.
// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// let apples = "2";
// let oranges = "3";

// alert( apples + oranges ); // "23", так как бинарный плюс объединяет строки
// alert( +apples + +oranges );

//! Инкремент/декремент можно использовать в любых выражениях

// let counter = 1;
// alert( 2 * ++counter ); // 4

// let counter = 1;
// alert( 2 * counter++ ); // 2, потому что counter++ возвращает "старое" значение

// let counter = 1;
// alert( 2 * counter );
// counter++;
// alert(counter);

// alert("" + 1 + 0)

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12

//! let result = условие ? значение1 : значение2;

// let age = prompt('Сколько вам лет?', '');
// let accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed);

// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );

// let name = prompt('Какое "официальное" название JavaScript?', "");
// if(name == 'ECMAScript') {
//     alert("Правильно!");
// } else {
//     alert("Не знаете? “ECMAScript”!");
// }

let value = prompt("Напишите число", "");
if (value > 0) {
    alert("1");
} else if (value < 0) {
    alert("-1");
} else {
    alert("0");
}