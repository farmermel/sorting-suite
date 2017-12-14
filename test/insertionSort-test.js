const { expect } = require('chai').use(require("chai-sorted"))
const insertion = require('../lib/insertion-sort.js');

function generateRandomNumbers( count, maxVal ) {
  const array = [];
  
  for (let i = 0; i < count; i++) {
    array.push(Math.floor(Math.random() * maxVal));
  }
  return array;
}

describe('insertionSort', function() {
  it('should exist', function() {
    expect(true).to.equal(true);
  })

  it('should be a function', function() {
    expect(insertion).to.be.a('function');
  })

  it('should sort an array of letters aplhabetically', function() {
    let arr = ['b', 'a', 'c', 'd'];

    expect(insertion(arr)).to.be.sorted();
  })

  it('should sort an array of numbers', function() {
    let arr = [2, 1, 3, 4];

    expect(insertion(arr)).to.be.sorted();
  })

  it('should sort an array of numbers that include negatives', function() {
    let arr = [-1, -5, 1, -8, 9, 10, -2, 3];

    expect(insertion(arr)).to.be.sorted();
  })

  it('should sort a pretty big array', function() {
    let arr = generateRandomNumbers(1000, 100);

    expect(insertion(arr)).to.be.sorted();
  })

  it('should sort a very big array', function() {
    let arr = generateRandomNumbers(20000, 100);

    expect(insertion(arr)).to.be.sorted();
  })
})