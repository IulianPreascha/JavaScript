//! Methods 

// let str = "Привет";

// alert( str.toUpperCase() ); // ПРИВЕТ

// let n = 1.23456;

// alert( n.toFixed(2) ); // 1.23

//TODO Homework 

// let str = "Привет";

// str.test = 5;

// alert(str.test);

//! Numbers 

// alert( Math.round(6.35 * 10) / 10);

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// }

// alert(`Число: ${readNumber()}`);

//! Strings

// let single = 'single-quoted';
// let double = "double-quoted";

// let backticks = `backticks`;

// function sum(a, b) {
//   return a + b;
// }

// alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;

// alert(guestList); // список гостей, состоящий из нескольких строк

//? OR 

// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// alert(guestList); // список гостей, состоящий из нескольких строк

//? UNICODE

// // ©
// alert( "\u00A9" );

// // Длинные юникодные коды
// // 佫, редкий китайский иероглиф
// alert( "\u{20331}" );
// // 😍, лицо с улыбкой и глазами в форме сердец
// alert( "\u{1F60D}" );

//? ONE MORE SLASH

// alert( `The backslash: \\` ); // The backslash: \

//? STRING LENGTH

// alert( `My\n`.length ); // 3

//? Access to symbols

// let str = `Hello`;

// // получаем первый символ
// alert( str[0] ); // H
// alert( str.charAt(0) ); // H

// // получаем последний символ
// alert( str[str.length - 1] ); // o

//? FOR .. of

// for (let char of "Hello") {
//   alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
// }

//? Changing register

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

alert( 'Interface'[0].toLowerCase() ); // 'i'