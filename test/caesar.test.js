// Write your tests here!
const caesarShift = require('../src/caesar.js').caesar
const expect = require('chai').expect

describe('caesarShift', () =>{
    it('Should return a correctly cyphered string given a string and shift', () => {
    teststring = 'The Quick Brown Fox Jumped Over The Lazy Dog'
    expected = 'wkh txlfn eurzq ira mxpshg ryhu wkh odcb grj'
    shift = 3
    actual = caesarShift(teststring, shift)
    expect(actual).to.equal(expected)
    })
    it('Should return a correctly cyphered string given a string and a negative shift', () => {
        teststring = 'The Quick Brown Fox Jumped Over The Lazy Dog'
        expected = 'ocz lpdxf wmjri ajs ephkzy jqzm ocz gvut yjb'
        shift = -5
        actual = caesarShift(teststring, shift)
        expect(actual).to.equal(expected)
        })
    it('Should return a correctly decyphered string given a string and a positive shift', () => {
        teststring = 'wkh txlfn eurzq ira mxpshg ryhu wkh odcb grj'
        expected = 'The Quick Brown Fox Jumped Over The Lazy Dog'.toLowerCase()
        shift = 3
        actual = caesarShift(teststring, shift, encode = false)
        expect(actual).to.equal(expected)
        })
})