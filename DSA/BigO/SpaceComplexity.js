/*
  Space Complexity Depends on 4 things
   - 
   
*/

function printHello(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("hello !!");
  }
}

printHello([1, 2, 3, 4, 5, 6]); //O(1)

function arrOfLoop(n) {
  const sayhi = [];
  for (let i = 0; i < n; i++) {
    sayhi[i] = "hi";
  }
  return sayhi;
}

console.log(arrOfLoop());
