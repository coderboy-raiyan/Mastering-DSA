const arr1 = [1, 2, 3, 5];
const arr2 = [4, 85, 1];

// function mergeSortedArray(arr1, arr2) {
//   const mergedSorted = [...arr1, ...arr2];

//   mergedSorted.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//   });

//   return mergedSorted;
// }

function mergeSortedArray(array1, array2) {
  const mergedSorted = [];

  let firstArrayItem = array1[0];
  let secondArrayItem = array2[0];
  let i = 1;
  let j = 1;

  while (firstArrayItem || secondArrayItem) {
    if (firstArrayItem < secondArrayItem) {
      mergedSorted.push(firstArrayItem);
      firstArrayItem = array1[i];
      i++;
    } else {
      mergedSorted.push(secondArrayItem);
      secondArrayItem = array2[j];
      j++;
    }
  }

  return mergedSorted;
}

console.log(mergeSortedArray(arr1, arr2));
