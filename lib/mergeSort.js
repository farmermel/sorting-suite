function mergeSort(toSort) {
  
  if(toSort.length <= 1) {
    return toSort;
  }

  let middle = Math.floor(toSort.length/2)
  let half1 = toSort.slice(0, middle);
  let half2 = toSort.slice(middle);

  return doMerge(mergeSort(half1), mergeSort(half2));
}

function doMerge(half1, half2) {
  let mergedArray = [];

  while(half1.length && half2.length) {
    if(half1[0] < half2[0]) {
      mergedArray.push(half1.shift());
    } else {
      mergedArray.push(half2.shift())
    }
  }
  if(half1.length) {
    mergedArray = [...mergedArray, ...half1]
  } else if (half2.length) {
    mergedArray = [...mergedArray, ...half2]
  }
  return mergedArray;
}

module.exports = mergeSort;