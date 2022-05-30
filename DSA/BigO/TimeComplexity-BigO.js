/*
  Big O Rules :
    1. Worst Cases.
    2. Drop the constants
    3. Different terms of Inputs
    4. Drop non-dominates
*/

// Big Os

// O(n) -> linear time
function loopBoxes(arr) {
  console.log("hello");

  let a = 10;

  for (let i = 0; i < arr.length; i++) {
    a++;
    console.log(arr[i]);
  }
}

// O(1) -> constant time
function compressBox(boxes) {
  console.log(boxes[1]);
  console.log(boxes[2]);
}

// O(a + b) -> different terms of Inputs iteration without nested
function iterateArr(arr1, arr2) {
  arr1.forEach((element) => {
    console.log(element);
  });

  arr2.forEach((element) => {
    console.log(element);
  });
}

// O(a * b) -> different terms of Inputs iteration nested
function iterateArr(arr1, arr2) {
  arr1.forEach((element1) => {
    arr2.forEach((element2) => {
      console.log(element1, element2);
    });
  });
}

// O(n ^ 2) -> this notation comes form nested loops
function expressBox(boxes) {
  boxes.forEach((element1) => {
    boxes.forEach((element2) => {
      console.log(element1, element2);
    });
  });
}
