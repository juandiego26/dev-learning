// includes para saber si hay un valor dentro de un array o string

let numbers = [1, 3, 7, 8];

if (numbers.includes(9)) {
  console.log("Si se encuentra el valor 7");
} else {
  console.log("No se encuentra.");
}

// exponencial

let base = 4;
let exponent = 3;
let result = base ** exponent;

// antes
console.log(Math.pow(base, exponent));
//ES7
console.log(result);
