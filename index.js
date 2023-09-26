"use strict";
// Write a program that uses filter to remove all negative numbers from an array of numbers
let negativeArray = [1, 3, -6, 3, -654, 334, 0, 8, 1, -72, 0, -4, -6, 4, 2,];
let arrayResult = negativeArray.filter((value) => value >= 0);
console.log(arrayResult);
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let numbers = [1, 2, 3, 4, 5];
let multipliedArray = numbers.map((value) => value * 2);
console.log(multipliedArray);
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let fruits = ["apple", "banana", "cherry", "date", "grape"];
let fruitsResults = fruits.filter((value) => value.length > 5);
console.log(fruitsResults);
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenSquares = numbersArray.filter((value) => value % 2 == 0).map((item) => item * item);
console.log(evenSquares);
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let celsius = [0, 10, 20, 30, 40];
let fahrenheitTemp = celsius.map((Celsius) => (Celsius * 9) / 5 + 32);
console.log(fahrenheitTemp);
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let num = [3, 6, 9, 12, 15, 18];
let doubledOdd = num.filter((value) => value % 2 !== 0).map((item) => item * 2);
console.log(doubledOdd);
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((name) => {
    console.log(`${name}!`);
});
