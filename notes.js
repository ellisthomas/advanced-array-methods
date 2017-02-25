var fruits = ["apple", "banana", "cherry"];

// 1A : Write a function called outputFuritOld that consoles every fruit in a fruit array.

// function outputFruitOld (array) {
// 	for (i = 0; i < array.length; i++){
// 		console.log(array[i]);
// 	}
// }

// outputFruitOld(fruits);


// //  1B Rewrite using forEach array method

// function outputFruits (element, index, array){
// 	console.log(element);
// 	console.log("array [" + index + "] " + element);
// }

// fruits.forEach(outputFruits);

// fruits.forEach(function(fruit){
// 	console.log(fruit);
// })


// 2A: Write a function called backwardFruitsOld that reverses the letters in each word in the fruits array.

// function backwardFruitsOld(array) {
// 	var backwardsFruit = [];
// 	for ( var i = 0; i < array.length; i++){
// 		backwardsFruit.push(array[i].split("").reverse().join(""));
// 	}
// 	console.log(backwardsFruit);
// }


// backwardFruitsOld(fruits);



// // 2B: Rewrite using a map array method


// var backwardsFruit = fruits.map(function(fruit){
// 	return fruit.split("").reverse().join("");
// });
// console.log(backwardsFruit);


// 3A: Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

// function fiveLettersOnlyOld (array){
// 	var filteredFruits = [];
// 	for (var i = 0; i < array.length; i++){
// 		if(array[i].length === 5){
// 			filteredFruits.push(array[i]);
// 		}
// 	}
// 	console.log(filteredFruits);
// }

// fiveLettersOnlyOld(fruits);

// // 3B: Rewrite using filter array method

// function filterIt(cat) {
// 	if (cat.length === 5){
// 		return cat;
// 	}
// }
// var filteredFruits = fruits.filter(filterIt);
// console.log(filteredFruits);


// var numbers = [0, 1, 2, 3, 4];

// // 4B: Write a function called addzOld that returns the sum of an array.

// function addzOld(array) {
// 	var sum = 0;
// 	for (var i = 0; i < array.length; i++) {
// 		sum = sum + array[i];
// 	}
// 	console.log(sum);
// }
// addzOld(numbers);

// // 4B: Rewrite using reduce array method

// var sum = [0,1,2,3,4,].reduce(function(previousValue, currentValue, index){
// 	console.log("current index", index);
// 	console.log("previousValue", previousValue);
// 	console.log("currentValue", currentValue);
// 	return previousValue + currentValue;
// });
// console.log(sum);




// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
// 2.  Remove any integers greater than 19.
// 3.  Multiply each remaining number by 1.5 and then subtract 1.
// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chainingResult = integers.sort(function(a,b){return b-a}).filter(function(num){
	return num < 19}).map(function(num){return (num *1.5)-1}).reduce(function(prev, curr){
		return prev + curr
	});

console.log("Result ", chainingResult);




w 








































