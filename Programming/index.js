// Find largest Number
// function large(arr) {
//     let largestNum = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= largestNum) {
//             largestNum = arr[i]
//         }
//     }
//     return largestNum
// }
// console.log(large(arr));


//// sum of all elements
// let arr = [10, 20, 30, 40, 50]
// let sum = 0;
// for (let array of arr) {
//     sum = array + sum
// }
// console.log(sum);


// // find the duplicate values in an array
// let arr = [10, 20, 30, 40, 50, 60];
// function duplicateValues(arr){
//     let dup = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== dup){
//             dup = arr[i]
//         }else{
//             return -1
//         }
//     }
//     return dup
// }
// console.log(duplicateValues(arr));

// //Merge two arrays
// let arr1 = [10, 20, 30, 40, 50, 60];
// let arr2 = [70, 80, 90, 100]

// function mergeArray(arr1, arr2) {
//     let first = []
//     for (let i = 0; i < arr1.length - 1; i++) {
//         first.push(arr1[i])
//     }
//     for (let j = 0; j < arr2.length - 1; j++) {
//         first.push(arr2[j])
//     }
//     return first
// }
// console.log(mergeArray(arr1, arr2));

///////find the intersection of two arrays
// function intersection(arr1, arr2) {
//     let inter1 = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 inter1.push(arr1[i])
//             }
//         }
//     }
//     return inter1;
// }
// let arr1 = [10, 20, 30, 40, 50, 60];
// let arr2 = [70, 80, 90, 100, 50, 60, 20]
// console.log(intersection(arr1, arr2));

// // //Rotate Array
// function rotateArray(arr) {
//     let rotatearray = []
//     let first = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== first) {
//             rotatearray.unshift(arr[i])
//         } else {
//             rotatearray.push(arr[i])
//         }
//     }
//     return rotatearray;
// }
// let arr = [70, 80, 90, 100, 50, 60]
// console.log(rotateArray(arr));


//// find the index of an element
// function findIndex(arr) {
//     arr.map((val, i) => {
//         console.log(val, i);
//     })
// }
// let arr = [70, 80, 90, 100, 50, 60]
// console.log(findIndex(arr));

//// Flatten a multi-dimention array
// function flat

// let arr = [1, 2, 3, [4, 5, 6, 7], 8, [10, 20, 30, 40, 50]]
// console.log(flatArray(arr));


// //// Count occurences of an element

//error
// function occurences(arr) {
//     let repeated = []
//     let repeated2 = []
//     arr.map((val, index, array) => {
//         console.log(array[index]);
//         if(array[index] === index){
//             repeated.push(array[index])
//         }else{
//             repeated2.push(array[index])
//         }
//     })
//     return [repeated, repeated2]
// }
// let arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7]
// console.log(occurences(arr));





// Write a function to reverse a string.
// let str = 'jeelani'
// let reverse = str.split('').reverse().join('')
// console.log(reverse);

// Write a function to check if a number is even or odd.
// let num = 23
// if(num % 2 == 0){
//     console.log('Even Number');
// }else{
//     console.log('odd Number');
// }

// Write a function to find the factorial of a number.
// function factorial(num){
//     let factNumber = 1;
//     for (let i = 1; i <= num; i++) {
//         factNumber = factNumber * i
//     }
//     return factNumber
// }
// let num = 5
// console.log(factorial(num));

// Write a function to check if a string is a palindrome.
// function palindrom(num) {

//     let pal = Number(num.toString().split('').reverse().join(''))
//     if (pal === num) {
//         return 'The Number is palindrom'
//     } else {
//         return 'Not a palindrom Number'
//     }
// }
// let num = 1212
// console.log(palindrom(num));

// Write a function to find the greatest common divisor (GCD) of two numbers.

// Write a function to convert a number from one base to another.

// Write a function to count the number of vowels in a string.
// function vowels(str) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if(str[i].toLowerCase() === 'a'){
//             count++
//         }else if(str[i].toLowerCase() === 'e'){
//             count++
//         }else if(str[i].toLowerCase() === 'i'){
//             count++
//         }else if(str[i].toLowerCase() === 'o'){
//             count++
//         }else if(str[i].toLowerCase() === 'u'){
//             count++
//         }
//     }
//     return count;
// }
// let str = 'abcdefghijklmnopqrstuvwxayz'
// console.log(vowels(str));

// Write a function to capitalize the first letter of each word in a string.
// function capitalizeFirstLetter(str) {
//     return str.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1)
//     }).join(' ')
// }

// const testString = "hello world! this is a test.";
// console.log(capitalizeFirstLetter(testString));


// Write a function to generate a random number within a given range.
// function randomNumber(range) {
//     return Math.floor(Math.random() * range)
// }
// let range = 6
// console.log(randomNumber(range));

// Write a function to sum all numbers in an array.
// function summAll(sumAll) {
//     let sum = 0;
//     for (let num of sumAll) {
//         sum += num
//     }
//     return sum
// }
// let sumAll = [1, 3, 2, 4, 5, 6, 7, 9, 8]
// console.log(summAll(sumAll));


// Arrays =================
// Write a function to find the maximum number in an array.
// function maxNumber(maxArr) {
//     let maxNumber = maxArr[0]
//     let max;
//     for (let i = 0; i < maxArr.length; i++) {
//         if (maxNumber > maxArr[i]) {
//             max = maxNumber
//         } else {
//             max = maxArr[i]
//         }
//     }
//     return max
// }
// let maxArr = [2, 1, 4, 3, 6, 5, 7, 8, 9, 12]
// console.log(maxNumber(maxArr));

// Write a function to find the minimum number in an array.
// function maxNumber(maxArr) {
//     let maxNumber = maxArr[0]
//     let max;
//     for (let i = 0; i < maxArr.length; i++) {
//         if (maxNumber < maxArr[i]) {
//             max = maxNumber
//         } else {
//             max = maxArr[i]
//         }
//     }
//     return max

// }
// let maxArr = [2, 1, 4, 3, 6, 5, 7, 8, 9, 12]
// console.log(maxNumber(maxArr));


// Write a function to sort an array in ascending order.
// function ascendingOrder(ascOrder) {
//     if (ascOrder.length <= 1) {
//         return ascOrder;
//     }
//     let pivot = ascOrder[Math.floor(ascOrder.length / 2)]
//     let left = []
//     let right = []
//     let equal = []
//     for (let i = 0; i < ascOrder.length; i++) {
//         if (pivot > ascOrder[i]) {
//             left.push(ascOrder[i])
//         } else if (pivot < ascOrder[i]) {
//             right.push(ascOrder[i])
//         } else {
//             equal.push(ascOrder[i])
//         }
//     }

//     return ascendingOrder(left).concat(equal, ascendingOrder(right))
// }
// let ascOrder = [2, 1, 4, 3, 6, 5, 8, 7, 9, 12]
// console.log(ascendingOrder(ascOrder));

// Write a function to sort an array in descending order.
// function decendingOrder(arr) {
//     if (arr <= 1) {
//         return arr
//     }
//     let pivot = arr[Math.floor(arr.length / 2)]
//     let left = []
//     let right = []
//     let equal = []
//     for (let i = 0; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             left.push(arr[i])
//         } else if (pivot < arr[i]) {
//             right.push(arr[i])
//         } else {
//             equal.push(arr[i])
//         }
//     }
//     return decendingOrder(right).concat(equal, decendingOrder(left))
// }
// let arr = [2, 1, 4, 3, 6, 5, 8, 7, 9, 12]
// console.log(decendingOrder(arr));

// Write a function to remove duplicates from an array.
// function removeDuplicate(arr) {
//     return [...new Set(arr)]
// }
// let arr = [1, 2, 4, 3, 1, 4, 2, 3]
// console.log(removeDuplicate(arr));

// Write a function to merge two arrays.
// function mergeArr(arr1, arr2) {
//     return [...arr1, ...arr2]
// }
// let arr1 = [1, 4, 2, 3, 6, 9]
// let arr2 = [0, 8, 5, 8, 9]
// console.log(mergeArr(arr1, arr2));

// Write a function to find the intersection of two arrays.
// function intersection(arr1, arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 newArr.push(arr1[i])
//             }
//         }
//     }
//     return newArr
// }
// let arr1 = [1, 4, 2, 3, 6, 9]
// let arr2 = [0, 8, 5, 2, 3, 1, 8, 9]
// console.log(intersection(arr1, arr2));

// Write a function to find the union of two arrays.
// function union(arr1, arr2) {
//     let set = [new Set([...arr1, ...arr2])]
//     return [...set]
// }
// let arr1 = [1, 4, 2, 3, 6, 9]
// let arr2 = [0, 8, 5, 2, 3, 1, 8, 9]
// console.log(union(arr1, arr2));


// Write a function to find the difference between two arrays.
// function diffArray(arr1, arr2) {
//     let set2 = new Set(arr2)
//     console.log(set2);
//     console.log(arr1);
//     let newArr = arr1.filter((value) => { return !set2.has(value) })
//     return newArr
// }
// let arr1 = [1, 4, 2, 3, 6, 9, 9]
// let arr2 = [0, 8, 5, 2, 3, 1, 8, 9]
// console.log(diffArray(arr1, arr2));

// Write a function to flatten a nested array.
// function flatterArr(arr) {
//     let newArr = []
//     arr.map(element => {
//         if (Array.isArray(element)) {
//             newArr = newArr.concat(flatterArr(element))
//         } else {
//             newArr.push(element)
//         }
//     }
//     );
//     return newArr
// }
// let arr = [0, [8, 5, 2], [3, [1, 8]], 9]
// console.log(flatterArr(arr));



// Objects
// Write a function to merge two objects.
// function mergeObject(obj1, obj2) {
//     let newObj = { ...obj1, ...obj2 }
//     return newObj
// }
// let obj1 = { name: "jeelani" }
// let obj2 = { collage: "Gcet" }
// console.log(mergeObject(obj1, obj2));
//  Another Way
// function mergeObject(obj1, obj2) {
//     return Object.assign(obj1, obj2)

// }
// let obj1 = { name: "jeelani" }
// let obj2 = { collage: "Gcet" }
// console.log(mergeObject(obj1, obj2));

// Write a function to clone an object.
// function cloneObject(obj) {
//     return { ...obj };
// }
// const original = { a: 1, b: 2, c: { d: 3 } };
// const clone = cloneObject(original);
// console.log(clone);

// Write a function to check if a key exists in an object.
// function existsKey(obj, keyName) {
//     let keyObj = Object.keys(obj)
//     for (let key of keyObj) {
//         if (key === keyName) {
//             return true
//         }
//     }
//     return false
// }
// let obj = { name: "jeelani", collage: "GCET" }
// console.log(existsKey(obj, 'collage'));

// ============= Anothe rMethod ===============
// function keyExistsInObject(obj, key) {
//     return obj.hasOwnProperty(key);
// }

// // Example usage
// const obj = { a: 1, b: 2, c: 3 };
// console.log(keyExistsInObject(obj, 'b')); // Output: true
// console.log(keyExistsInObject(obj, 'd')); // Output: false


// Write a function to get the keys of an object.
// function keyObject(obj) {
//     let keys =  Object.keys(obj)
//     return keys
// }
// let obj = { name: "jeelani", collage: "GCET" }
// console.log(keyObject(obj));

// Write a function to get the values of an object.
// function getValues(obj) {
//     return Object.values(obj)
// }
// let obj = { name: "jeelani", collage: "GCET" }
// console.log(getValues(obj));

// Write a function to invert the keys and values of an object.
// function inverKeyandValue(obj) {
//     const invertedObj = {}
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             invertedObj[obj[key]] = key
//         }
//     }
//     return invertedObj
// }
// let obj = { name: "jeelani", collage: "GCET", lastName: "basha" }
// console.log(inverKeyandValue(obj));


// Write a function to convert an object to an array of key-value pairs.

// Write a function to count the number of properties in an object.
// Write a function to check if two objects are equal.
// Write a function to deep clone an object.


// Functions
// Write a function that returns another function.
// Write a function that accepts a callback and calls it with a given value.
// Write a function to debounce another function.
// Write a function to throttle another function.
// Write a function to curry another function.
// Write a function to memoize another function.
// Write a recursive function to compute the Fibonacci sequence.
// Write a function to implement a simple caching mechanism.
// Write a function to delay the execution of another function.
// Write a function to implement partial application.


// Asynchronous Programming
// Write a function that returns a promise.
// Write a function to simulate an asynchronous operation using setTimeout.
// Write a function to fetch data from an API using fetch.
// Write a function to fetch data from an API using async/await.
// Write a function to handle errors in an async function.
// Write a function to run multiple promises in parallel.
// Write a function to run multiple promises in sequence.
// Write a function to retry a failed promise.
// Write a function to create a delay using a promise.
// Write a function to implement a simple event emitter.


// Additional Concepts
// Write a function to create a stack data structure.
// Write a function to create a queue data structure.
// Write a function to create a linked list data structure.
// Write a function to implement a binary search algorithm.
// Write a function to implement a quicksort algorithm.
// Write a function to implement a merge sort algorithm.
// Write a function to create a simple observer pattern.
// Write a function to implement a basic pub/sub system.
// Write a function to create a debounced search input.
// Write a function to implement a simple calculator using closures.


// Pattern Question
// Print a square pattern of n rows and columns using *. 
// ****
// ****
// ****
// ****

// function printStart(n) {
//     for (let i = 0; i < n; i++) {
//         console.log("*".repeat(n));
//     }
// }
// printStart(4);


// rint a right triangle pattern of n rows using *.
// *
// **
// ***
// ****

// function trianglePattern(n) {
//     for (let i = 0; i <= n; i++) {
//         console.log("*".repeat(i));
//     }

// }
// trianglePattern(4)


//  Inverted Right Triangle Pattern
// ****
// ***
// **
// *
// function InvertedRightTriangle(n){
//     for (let i = 0; i < n; i++) {
//         console.log("*".repeat(n-i));        
//     }
// }
// InvertedRightTriangle(4)


// Pyramid Pattern
// function pyramidPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(" ".repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
// }
// pyramidPattern(4);