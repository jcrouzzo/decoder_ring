// Write your tests here!
const polybiusShift = require('../src/polybius.js').polybius
const expect = require('chai').expect

describe('polybiusShift', () =>{
    it('Should return a correctly cyphered string', () => {
    teststring = 'The Quick Brown Fox Jumped Over The Lazy Dog'
    expected = '443251 1454423152 2124432533 124335 425423535141 43155124 443251 13115545 414322'
    actual = polybiusShift(teststring)
    expect(actual).to.equal(expected)
    })
    it('Should return a correctly decyphered string', () => {
        expected = 'the qu(i/j)ck brown fox (i/j)umped over the lazy dog'
        teststring = '443251 1454423152 2124432533 124335 425423535141 43155124 443251 13115545 414322'
        actual = polybiusShift(teststring, encode=false)
        expect(actual).to.eql(expected)
        })
})
