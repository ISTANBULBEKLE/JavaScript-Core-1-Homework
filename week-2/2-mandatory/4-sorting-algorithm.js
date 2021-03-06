/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

/*
function sortAges(arr) {
    let maximum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
                arr.splice(i, 1); i--;
            }
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
    console.log(arr);
    return arr;
}
console.log(sortAges()); 

*/

function sortAges(arr) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
                //removes one element from the index i and 
                // to check the next number, decreases the index --
                arr.splice(i, 1); i--;
            }
            if (arr[i] > arr[i + 1]) {
                done = false;
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
    console.log(arr);
    return arr;
}

/*
function sortAges(arr) {
  let newArray=[];
  let new_Array=[];
  let index;
    for(let i=0;i<arr.length;i++){
        newArray[i]=arr[i];
    }
   // console.log("before removing="+test);
    for(let i=0;i<arr.length;i++){
      newArray[i]=arr[i];
      if(newArray[i]===Number(newArray[i])){
       new_Array.push(newArray[i]);
      }
    }
    for(let i=0;i<new_Array.length;i++)
    {
      for(let j=0;j<new_Array.length;j++){
        if(new_Array[i]<new_Array[j]){
          let view=new_Array[j];
          new_Array[j]=new_Array[i]
          new_Array[i]=view;
        }
      }
    }
    return new_Array;
}

*/


/* 

let numbers = [1, 2, 3];
let numbersDoubled = numbers.map((number) => number * 2); 

*/

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "sortAges function works - case 1",
  arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
);

test(
  "sortAges function works - case 2",
  arraysEqual(sortAges(agesCase2), [55, 60, 100])
);
