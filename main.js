// importing our helper method, helper.test()
var helper = require('./test-helper-functions')

// Write your own tests and then write code to pass the tests!
// helper.test(myFunc(intput), expectedOutput)

// 1. Write a JavaScript function to remove a specific element from an array.
//
//   * Sample input: removeArrayElement([2, 5, 9, 6], 5))
//   * Sample output: [2, 9, 6]

function removeArrayElement(array, x) {
   var index = array.indexOf(x);
   if (index > -1) {
    array.splice(index, 1);
  }
   return array;
 }

helper.test(removeArrayElement([2, 5, 9, 6], 5), [2, 9, 6])

// 2. Write a JavaScript function to get nth largest element from an unsorted array.
//
//   * Sample input: nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)
//   * Sample output: 89

function nthlargest (array, n) {
  var sortArray = array.sort(function(a,b){return a-b})
  var accessnthLargest = array.length - n
  console.log(sortArray);
  return array[(accessnthLargest)]
}

helper.test(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4), 89)

helper.test(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 1), 652)

// 3. Write a JavaScript function to get a random item from an array.
//   * Sample input: randomItem(['hello', 'hi', 'bye'])
//   * Sample output: 'hello' // or 'hi', or 'bye'!

function randomItem(arr) {
  var numLength = arr.length
  var pickRandom = Math.floor(Math.random()*(numLength))
  console.log(pickRandom);
  return arr[pickRandom]
}

// helper.test(randomItem(['hello', 'hi', 'bye']), 'hello')

// 4. Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by a specific step from starting position.
//
//   * Sample input: arrayRange(1, 4, 1))
//   * Sample output: [1, 2, 3, 4]
//
//   * Sample input: arrayRange(-6, 5, 2)
//   * Sample output: [-6, -4, -2, 0, 2]

// function arrayRange(startArr, arrLength, increaseNum) {
//   var outputArr = [startArr]
//   var numArrLength = arrLength * 1
//   for (var i = 0; i < numArrLength; i++, startArr+increaseNum) {
//     console.log(outputArr);
//     outputArr = outputArr.push[(startArr[i] + increaseNum)] + 1
//     outputArr
//   }
//   return outputArr
// }

function arrayRange(start, len, increaseBy) {
		var arr = new Array(len);
		for (var i = 0; i < len; i++, start = start + increaseBy) {
			arr[i] = start;
		}
  return arr;
  }


helper.test(arrayRange(-6, 5, 2),[-6, -4, -2, 0, 2])
