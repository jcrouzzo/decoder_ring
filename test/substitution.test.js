// Write your tests here!
const substitutionShift = require('../src/substitution.js').substitution
const expect = require('chai').expect

describe('substitutionCypher', () =>{
    it('Should return a correctly cyphered string', () => {
    teststring = 'The Quick Brown Fox Jumped Over The Lazy Dog'
    alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    expected = 'Zit Jxoea Wkgvf Ygb Pxdhtr Gctk Zit Sqmn Rgu'.toLowerCase()
    actual = substitutionShift(teststring, alphabet)
    expect(actual).to.eql(expected)
    })
    it('Should return a correctly decyphered string', () => {
        expected = 'the quick brown fox jumped over the lazy dog'
        alphabet = 'qwertyuiopasdfghjklzxcvbnm'
        teststring = 'Zit Jxoea Wkgvf Ygb Pxdhtr Gctk Zit Sqmn Rgu'.toLowerCase()
        actual = substitutionShift(teststring, alphabet, encode=false)
        expect(actual).to.eql(expected)
        })
    it('Should return false if there are any duplicate letters in alphabet', () => {
        expected = false
        alphabet = 'qwerryuiopasdffhjklzxcvbbm'
        actual = substitutionShift(teststring, alphabet)
        expect(actual).to.eql(expected)
        })   
        it('Should return false if no alphabet is passed in', () => {
            expected = false
            alphabet = ''
            teststring = 'hello'
            actual = substitutionShift(teststring, alphabet)
            expect(actual).to.equal(expected)
            })
})