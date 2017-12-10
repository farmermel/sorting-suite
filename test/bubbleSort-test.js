const { expect } = require('chai');
const bubble = require('../bubbleSort.js');

describe('bubbleSort', function() {
  it('to exist', function() {
    expect(true).to.equal(true);
  })

  it('should be a function', function() {
    expect(bubble).to.be.a('function')
  })

  it('should sort an array of numbers', function() {
    let arr = [3, 6, 1, 10, 2, 9, 8];
    let sortedArr = [1, 2, 3, 6, 8, 9, 10];

    expect(bubble(arr)).to.deep.equal(sortedArr);
  })

  it('should sort an array of letters alphabetically', function() {
    let arr = ['b', 'a', 'w', 'z'];
    let sortedArr = ['a', 'b', 'w', 'z'];

    expect(bubble(arr)).to.deep.equal(sortedArr);
  })
  
})