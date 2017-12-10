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

module.exports = bubbleSort;