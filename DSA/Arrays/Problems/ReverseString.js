// Reverse a string
const string = "My name is Raiyan";

// Method 1
function reverseString1(str) {
  if (typeof str === "string") {
    const backward = [];
    for (let i = str.length; i >= 0; i--) {
      backward.push(str[i]);
    }
    return backward.join("");
  }
  return "Type a valid string";
}

// Method 2
const reverseString2 = (str) => str.split("").reverse().join("");

// Method 3
const reverseString3 = (str) => [...str].reverse().join("");

console.log(reverseString3(string));
