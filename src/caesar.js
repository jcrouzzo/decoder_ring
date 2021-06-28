// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
      if(shift==0 || shift > 25 || shift < -25){return false}
      string =input.toLowerCase()
      const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
                      'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    strArr = Array.from(string.split('')).map((x) =>{
        if(alphabet.includes(x)){
         let ind
         if(encode == true){
        ind = alphabet.indexOf(x) + shift
        } else{ind = alphabet.indexOf(x) - shift}
        if(ind < 0) ind +=26
        else if(ind > 25) ind = ind % 26
        return alphabet[ind]
        } else return x
    })
    return strArr.join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
