const { expect } = require('chai').use(require("chai-sorted"))
const merge = require('../lib/mergeSort.js');

function generateRandomNumbers( count, maxVal ) {
  const array = [];
  
  for (let i = 0; i < count; i++) {
    array.push(Math.floor(Math.random() * maxVal));
  }
  return array;
}

describe('mergeSort', function() {
  it('should exist', function() {
    expect(true).to.equal(true);
  })

  it('should be a function', function() {
    expect(merge).to.be.a('function');
  })

  it('should sort an array of letter aplhabetically', function() {
    let arr = ['b', 'a', 'e', 'c', 'd'];

    expect(merge(arr)).to.be.sorted();
  })

  it('should sort an array of numbers', function() {
    let arr = [2, 1, 3, 4];

    expect(merge(arr)).to.be.sorted();
  })

  it('should sort an array of numbers that include negatives', function() {
    let arr = [-1, -5, 1, -8, 9, 10, -2, 3];

    expect(merge(arr)).to.be.sorted();
  })

  it('should sort a pretty big array', function() {
    let arr = generateRandomNumbers(2000, 100);

    expect(merge(arr)).to.be.sorted();
  })

  it('should sort a very big array', function() {
    let arr = generateRandomNumbers(101500, 100);

    expect(merge(arr)).to.be.sorted();
  })
})