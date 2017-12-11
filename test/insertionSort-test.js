const { expect } = require('chai');
const insertion = require('../insertion-sort.js');

describe.only('insertionSort', function() {
  it('should exist', function() {
    expect(true).to.equal(true);
  })

  it('should be a function', function() {
    expect(insertion).to.be.a('function');
  })

  it('should sort an array of letter aplhabetically', function() {
    let arr = ['b', 'a', 'c', 'd'];
    let sortedArr = ['a', 'b', 'c', 'd'];

    expect(insertion(arr)).to.deep.equal(sortedArr);
  })
})