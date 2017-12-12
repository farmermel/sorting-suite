const { expect } = require('chai');
const merge = require('../mergeSort.js');

describe.only('mergeSort', function() {
  it('should exist', function() {
    expect(true).to.equal(true);
  })

  it('should be a function', function() {
    expect(merge).to.be.a('function');
  })

  it('should sort an array of letter aplhabetically', function() {
    let arr = ['b', 'a', 'e', 'c', 'd'];
    let sortedArr = ['a', 'b', 'c', 'd', 'e'];

    expect(merge(arr)).to.deep.equal(sortedArr);
  })
})