function newFunction(name, age, country) {
  var name = name || "Juan";
  var age = age || 32;
  var country = country || "CO";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "Juan", age = 32, country = "CO") {
  console.log(name, age, country);
}

newFunction2(); // toma el valor de los parámetros por defecto

newFunction2("Diego", "20", "MX"); // muestra los parámetros que le pasamos

// `template literals`

let hello = "hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilinea
let lorem =
  "Quit consequatur. commodi. Ipsum vel duis yet minima \n" +
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
// Es6 multilínea
let lorem2 = `Otra frase épica que necesitamos 
Ahora es otra frase.
`;

console.log(lorem);
console.log(lorem2);

// desestructuración

let person = {
  name: "Juan",
  age: "32",
  country: "CO",
};

console.log(person.name, person.age, person.country);

// ES6
let { name, age } = person;

console.log(name);

// Spread Operator

let team1 = ["Oscar", "Juan", "Ricardo"];

let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2]; // trae los valores del arreglo

console.log(education);

// declaracion de variables

var hola = "hola"; // esta disponible en el scope global

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global let";
  console.log(globalLet); // solo está disponible en el código
}

console.log(globalVar); // Global var es accesible en el scope global
// console.log(globalLet); // Global let no es es accesible da un error

// Const permite estableces una variable

const a = "b";
a = "a"; // no se puede asignar un valor a una constante
console.log(a);

// anteriormente con var

var a = "b";
a = "a"; // con var si se puede reasignar las variables
console.log(a);

/******* Arrow Functions, Promesas y Parámetros en objetos */
let name = "Juan";
let age = 32;

// es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

// arrow functions

const names = [
  { name: "Juan", age: 32 },
  { name: "Pedro", age: 22 },
];
// ES5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

//ES6

let listOfNames2 = names.map((item) => console.log(item.name));

// varios parámetros
const listOfNames3 = (name, age, country) => {
  //code...
};
// un solo parámetro
const listOfNames4 = (name) => {
  // code...
};

const square = (num) => num * num;

/*****Promesa */
const helloPromise = () => {
  return new Promise((reject, resolve) => {
    if (false) {
      resolve("hey!");
    } else {
      reject("Upss!!");
    }
  });
};

// ejecutamos nuestra promesa

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

/*** Clases, Módulos y Generadores ****/

class Calculatator {
  constructor() {
    // constructor de la clase Calculator
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    // método
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculatator();
console.log(calc.sum(2, 3));

// importar una función de un modulo externo
import { hello } from "./module";

hello();

// generator

// es una función especial que retorna una serie de valores

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
