//outer loop goes over entire original array starting index 1
//inner loop loops over the current length of the sorted section
//comparing new insert to the previous item
//if the previous item is bigger it shifts one over
//if the previous item is smaller it leaves it there and breaks to outer loop
//here it moves along one in the sort
//process continues until entire array is sorted


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