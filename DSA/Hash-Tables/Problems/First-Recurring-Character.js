//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const array = [2, 5, 5, 2, 3, 5, 1, 2, 4];

/*
  This "firstRecurringCharacter" function will give a different result rather then the 2 qnd 3 function 

  * The complexity is : O(n ^ 2)
  * The space complexity is : O(1)

*/

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
} // O(n ^ 2)

/*
  This "firstRecurringCharacter2" and "firstRecurringCharacter3" are going to give us the same result but they have different complexities

  firstRecurringCharacter2 : -
  * The complexity is : O(n)
  * The space complexity is : O(n)
  * 
  firstRecurringCharacter3 : -
  * The complexity is : O(n)
  * The space complexity is : O(1)

*/

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = input[i];
    }
  }
  return undefined;
} // O(n)

function firstRecurringCharacter3(input) {
  let curr = input[0];
  for (let i = 0; i < input.length; i++) {
    if (curr === input[i + 1]) {
      return input[i];
    } else {
      curr = input[i + 1];
    }
  }
  return undefined;
} // O(n)

console.log(firstRecurringCharacter3(array));
