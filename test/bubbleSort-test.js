const { expect } = require('chai').use(require("chai-sorted"))
const bubble = require('../lib/bubbleSort.js');

function generateRandomNumbers( count, maxVal ) {
  const array = [];
  
  for (let i = 0; i < count; i++) {
    array.push(Math.floor(Math.random() * maxVal));
  }
  return array;
}

describe('bubbleSort', function() {
  it('to exist', function() {
    expect(true).to.equal(true);
  })

  it('should be a function', function() {
    expect(bubble).to.be.a('function')
  })

  it('should sort an array of numbers', function() {
    let arr = [3, 6, 1, 10, 2, 9, 8];

    expect(bubble(arr)).to.be.sorted();
  })

  it('should sort an array of numbers that include negatives', function() {
    let arr = [-1, -5, 1, -8, 9, 10, -2, 3];

    expect(bubble(arr)).to.be.sorted();
  })

  it('should sort an array of letters alphabetically', function() {
    let arr = ['b', 'f', 'i', 'a', 'c', 'g', 'h', 'e', 'd'];

    expect(bubble(arr)).to.be.sorted();
  })

  it('should sort a pretty big array', function() {
    let arr = generateRandomNumbers(9000, 100);

    expect(bubble(arr)).to.be.sorted();
  })
  
})