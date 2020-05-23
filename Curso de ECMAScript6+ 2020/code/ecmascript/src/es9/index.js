/** rest operator u operador de reposo */
const obj = {
  name: "Juan",
  age: 32,
  country: "CO",
};

let { name, ...all } = obj;
// ... operador de reposo o rest operator para separar los elementos
// extraemos name y todo lo demás se coloca en este valor ALL
console.log(name, all); // Juan {age: 32, country: 'CO'} desestructura name
/******** */
let { country, ...all } = obj;

console.log(all); // {name: 'Juan', age: 32 } excluye country

/** spread operator u operador de propagación */

const obj = {
  name: "Juan",
  age: 32,
};

const obj1 = {
  ...obj, // une el objeto obj1 con el obj
  country: "CO",
};

console.log(obj1); //  name: 'Juan', age: 32, country: 'CO' }

/** Promise.finally() */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("hello World"), 3000)
      : reject("Test Error");
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo")); // finalizó la promesa

/** Expresiones regulares regEX por grupos*/

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
