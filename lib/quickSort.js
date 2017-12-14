function quickSort(toSort) {
  if(toSort.length <= 1) {
    return toSort;
  }
  
  let pivot = toSort.pop();
  let arraySmaller = [];
  let arrayBigger = [];

  toSort.forEach(function(item) {
    if(item < pivot) {
      arraySmaller.push(item)
    } else {
      arrayBigger.push(item)
    }
  });

  return [...quickSort(arraySmaller),pivot,...quickSort(arrayBigger)];
}

module.exports = quickSort;