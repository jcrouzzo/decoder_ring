// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 
    'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if(encode==true){
      return Array.from(input.toLowerCase()).map((x) =>{
        if(x != ' '){
        let ind = alphabet.indexOf(x)
        if(x == 'j') {ind = 8}
        else{ind = alphabet.indexOf(x)}
        col = ((ind%5)+1)
        row = Math.floor((ind/5)+1)
        letter = `${col}${row}`
        }else letter = ' '
        return letter
      }).join('')
    }else{
        input = input.split(' ')
        input = input.map((str) => { 
          if(str.length%2==0){
          return str.split(/(?=(?:..)*$)/)
          }else{ return 'error'}
        })
        if(input.includes('error')){return false}

        return input.map((x) =>{
          return x.map((y) =>{
       let ind = (((Number(y[1])-1) *5) + Number(y[0])) -1
       if (ind == 8) return '(i/j)'
       //if (ind > 8) ind -=1
       return alphabet[ind]
        }).join('')
      }).join(' ')

    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
