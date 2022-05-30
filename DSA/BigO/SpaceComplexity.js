/*
  Space Complexity Depends on 4 things
   - Variables
   - Function call
   - Data Structures
   - Allocations
   
*/

/*
  Space Complexity  -> O(1) 
*/
function printHello(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("hello !!");
  }
}

printHello([1, 2, 3, 4, 5, 6]); //O(1)

/*
  Space Complexity  -> O(n) because we need to drop the constants and storing unlimited data that we don't know in this sayHi Array 
  that takes RAM 
*/
function arrOfLoop(n) {
  const sayHi = [];
  for (let i = 0; i < n; i++) {
    sayHi[i] = "hi";
  }
  return sayHi;
}

console.log(arrOfLoop(10)); //O(n)
