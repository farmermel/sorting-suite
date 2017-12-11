function bubbleSort(toSort) {
  let swapped = false;
  for (let i = 0; i < toSort.length; i++) {
    if(toSort[i] > toSort[i+1]) {
      [toSort[i+1], toSort[i]] = [toSort[i], toSort[i+1]];
      swapped = true;
    }
  } if(swapped === true) {
      bubbleSort(toSort);
  } return toSort;
}

// function bubbleSort(toSort) {
//   let swapped = false;
//   for (let i = 0; i < toSort.length; i++) {
//     if(toSort[i] > toSort[i+1]) {
//       [toSort[i+1], toSort[i]] = [toSort[i], toSort[i+1]];
//       swapped = true;
//     }
//   } if(swapped === true) {
//       bubbleSort(toSort);
//   } return toSort;
// }


// function bubbleSort(array) {
//   let swapped = true;

//   for(let j = 0; j < array.length; j++) {

//     if(swapped) {
//       swapped = false;
//       for(let i = 0; i < array.length; i++) {
//         if(array[i] > array[i + 1]) {
//           [array[i], array[i + 1]] = [array[i+1], array[i]];
//           swapped = true;
//         }
//       }
//     }
//   } return array;
// }

module.exports = bubbleSort;