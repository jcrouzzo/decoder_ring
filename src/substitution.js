// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function _isUnique(string){
    return string.split('').some((v,i,a) => {
   return a.lastIndexOf(v)!=i;
 });
  }
  function substitution(input, alphabet, encode = true) {
    // your solution code here
        if(!alphabet|| _isUnique(alphabet) ||alphabet.length !=26){return false}
    let string = input.toLowerCase()
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let encoder = {}
    alphabet = Array.from(alphabet)
    if (encode == true){
    alpha.forEach((x) =>{
        encoder[x] = alphabet[alpha.indexOf(x)]
    })
    }
    else{
      alphabet.forEach((x) =>{
        encoder[x] = alpha[alphabet.indexOf(x)]
    })
    }
    return Array.from(string.split('')).map((x) =>{
        if(x != ' '){
        return encoder[x]
        } else return ' '
    }).join('')
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
