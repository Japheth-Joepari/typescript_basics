// setting the default type to string
let myName: string = "Japheth";
console.log(myName);

// you can use the || symbol to choose which type you want to use
let course: string | number = "React the complete guide";
course = 1245;
console.log(course);

// setting the default type to a number
let myAge: number = 24;

// This sets the default values to any
// and it accept any value
// not recomended
let arr;
arr = [1, 2, 3, 4, "terer"];
console.log(arr);

// Ths only works for array of strngs
let arry: string[];
arry = ["hferf", "frefewrfe", "ferferfe"];
console.log(arry);

// This is used to create an object with typescript
// let people: {};

// setting default values of an object
let peopleValue: {
  name: string;
  age: number;
};

peopleValue = {
  name: "candor",
  age: 22,
};
console.log(peopleValue);

// TYPE ALIAS
type People = {
  name: string;
  age: number;
};

let people: People;

people = {
  name: "Jeff",
  age: 1235,
};
console.log(people);
console.log(typeof people);

let newPeople: People[];

// TYPE INFERENCE
function sumNumbers(a: number, b: number) {
  return a + b;
}
let newResult = sumNumbers(12, 13);
console.log(newResult);

// GENERICS
function insertAtTheBegining(array: any, value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [8, 4, 5, 6];
const updatedArray = insertAtTheBegining(demoArray, -1);
console.log(updatedArray);

// MAIN GENERICS
// This helps us write types which are flexible
function addToTheEnd<T>(array: T[], value: T) {
  const result = [...array, value];
  return result;
}
const newItems = [648, 6987, 7, 5, 5, 6];
const updatedItems = addToTheEnd(newItems, 65874);
console.log(updatedItems);
