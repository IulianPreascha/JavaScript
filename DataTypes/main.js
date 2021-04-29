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

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);