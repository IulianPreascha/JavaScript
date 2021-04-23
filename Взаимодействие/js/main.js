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

// let value = prompt("Напишите число", "");
// if (value > 0) {
//     alert("1");
// } else if (value < 0) {
//     alert("-1");
// } else {
//     alert("0");
// }

// let result = (a + b < 4) ? "Мало" : "Много";

// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' :
// '';
// alert(message);

// let age = 101;
// if( age < 14 || age > 90) {
//     alert("hui");
// }
// age;

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// let userName = prompt("Кто там?", '');

// if (userName == "Админ") {

//     let pass = prompt('Пароль?', '');

//     if (pass == "Я Главный") {
//         alert("Здравствуйте!");
//     }
//     else if (pass == '' || pass == null) {
//         alert("Отменено");
//     }
//     else {
//         alert("Неверный пароль");
//     }
// }
// else if (userName == '' || userName == null) {
//     alert("Отменено");
// }
// else {
//     alert("Я вас не знаю");
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
  
//       // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
  
//     }
//   }
  
//   alert('Готово!');

// for (let i = 2; i < 10; i++) {
    
//     if(i % 2 == 0) 
//     alert(i);
    
// }

// let i = 0;

// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// let number;

// do {
//     number = prompt('pune cifra pula', 0);
// } while (number <= 100 && number);

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }

// let browser;

// if (browser == 'edge') {
//     alert( "You've got the Edge!" );
// } else if (browser == 'chrome' || browser == 'firefox') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// switch (number) {
//     case 0: 
//         alert('Вы ввели число 0');
//         break;
//     case 1: 
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3: 
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// function showMessage(a, b) { // аргументы: from, text
//     alert(a + ': ' + b);
//   }
  
//   showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
//   showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return prompt('А родители разрешили?');
//     }
//   }
  
//   let age = prompt('Сколько вам лет?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
//   } else {
//     alert( 'Доступ закрыт' );
//   }

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // простое
//     }
//   }
  
// showPrimes(10);

//! GOVNO

// let n;
// let x;
// let sum;

// function powNumber(n,x) {
//     while(x) {
//         sum = n * n;
//         x--;
//     }
//     alert(sum);
// }

// powNumber(3,3);

//! NORMAL

// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "Вы согласны." );
//   }
  
//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }
  
//   // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);

// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () => alert('Привет') :
//   () => alert("Здравствуйте!");

// welcome(); // теперь всё в порядке

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// function pow(x, n) {
//   if (n < 0) {
//     alert("Отрицательные значения 'n' не поддерживаются");
//     return;
//   }

//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

//! Worst code

// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
// }
// else
// {
//   alert(pow(x,n))
// }

//! Good code

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n < 0) {
//   alert(`Степень ${n} не поддерживается,
//     введите целую степень, большую 0`);
// } else {
//   alert( pow(x, n) );
// }

//? shwowPrime 
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

alert( showPrimes(10) );


// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }