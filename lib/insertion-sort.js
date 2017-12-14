function insertionSort(toSort) {
  for( let i = 1; i < toSort.length; i++ ) {
    let j = i;

    while( toSort[j - 1] > toSort[j] && j > 0 ) {
      [toSort[j-1], toSort[j]] = [toSort[j], toSort[j-1]];
      j--;
    }
  } return toSort;
}

module.exports = insertionSort;