// Object.entries devuelve la clave y los valores de un arreglo
const data = {
  frontend: "Juan",
  backend: "Ana",
  desing: "Isabel",
};

const entries = Object.entries(data);
console.log(entries); // [['frontend', 'Juan']['backend', 'Ana']]
console.log(entries.length); // 3 *elementos del objeto*

// Object.values() devuelve los valores de un objeto
const data = {
  frontend: "Juan",
  backend: "Ana",
  desing: "Isabel",
};

const values = Object.values(data);
console.log(values); // ['Juan', 'Ana', 'Isabel']
console.log(values.length); // 3 # d elementos

// padding ES8 agrgar una cadena vacia o elementos a un string

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " ------"));

// Async/Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
