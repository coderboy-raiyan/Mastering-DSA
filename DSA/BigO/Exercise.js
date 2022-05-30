/*
* Problem no -1
  Find the latest and the oldest tweets

*/

// const tweets = ["hi", "mom", "friends"];

// function findLatestAndOldest(tweets) {
//   const latest = tweets[tweets.length - 1];
//   const oldest = tweets[0];

//   return {
//     latest,
//     oldest,
//   };
// }
// console.log(findLatestAndOldest(tweets)); //O(1)

/*
* Problem no - 2
  Find and compare Dates

*/
const tweets = [
  { tweet: "h1", date: 2010 },
  { tweet: "mon", date: 2014 },
  { tweet: "friends", date: 2022 },
];

function findCompare(tweets) {
  tweets.forEach((ele1, i) => {
    tweets.forEach((ele2, j) => {
      compare = tweets[i].date - tweets[j].date;
      console.log(compare);
    });
  });
}

console.log(findCompare(tweets)); //O(n ^ 2)
