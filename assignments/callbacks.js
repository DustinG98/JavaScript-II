// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum'];



/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function cbLength (arr) { 
 return arr.length; 
}

console.log(getLength(items, cbLength));
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

cbLast = arr => ar[arr.length - 1];



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

cbSumNums = (x, y) => x+y;

console.log(sumNums(2, 4, cbSumNums));


function multiplyNums(x, y, cb) {
  return cb(x,y);
}

cbMultiplyNums = (x, y) => x * y;

console.log(multiplyNums(5, 10, cbMultiplyNums));

// function contains(item, list, cb) {
//   list.forEach(function(currentValue){
//     if(item === currentValue){
//       return cb(true);
//     } else {
//       cb(false);
//     }
//   })
// }

// let containsCB = argumentPassed => console.log(argumentPassed);

// contains("Gum", items, containsCB)

function contains(item, list, cb){
  for(let i = 0; i < list.length; i++){
    if (item == list[i]) {
      return cb(true);
    }
  }
  return cb(false);
}

let containsCB = argumentPassed => console.log(argumentPassed);

contains("Gum", items, containsCB);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  var arrayUnique = array.filter(function(item, index){
    return array.indexOf(item) >= index
  })
  cb(arrayUnique);
}

cbDuplicate = (arrayUnique) => console.log(arrayUnique)

removeDuplicates(items, cbDuplicate)
