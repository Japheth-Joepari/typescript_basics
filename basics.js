var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// setting the default type to string
var myName = "Japheth";
console.log(myName);
// you can use the || symbol to choose which type you want to use
var course = "React the complete guide";
course = 1245;
console.log(course);
// setting the default type to a number
var myAge = 24;
// This sets the default values to any
// and it accept any value
// not recomended
var arr;
arr = [1, 2, 3, 4, "terer"];
console.log(arr);
// Ths only works for array of strngs
var arry;
arry = ["hferf", "frefewrfe", "ferferfe"];
console.log(arry);
// This is used to create an object with typescript
// let people: {};
// setting default values of an object
var peopleValue;
peopleValue = {
    name: "candor",
    age: 22
};
console.log(peopleValue);
var people;
people = {
    name: "Jeff",
    age: 1235
};
console.log(people);
console.log(typeof people);
var newPeople;
// TYPE INFERENCE
function sumNumbers(a, b) {
    return a + b;
}
var newResult = sumNumbers(12, 13);
console.log(newResult);
// GENERICS
function insertAtTheBegining(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [8, 4, 5, 6];
var updatedArray = insertAtTheBegining(demoArray, -1);
console.log(updatedArray);
// MAIN GENERICS
function addToTheEnd(array, value) {
    var result = __spreadArray(__spreadArray([], array, true), [value], false);
    return result;
}
var newItems = [648, 6987, 7, 5, 5, 6];
var updatedItems = addToTheEnd(newItems, 65874);
console.log(updatedItems);
