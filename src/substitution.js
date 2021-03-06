// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function _isUnique(string) {
    return string.split("").some((v, i, a) => {
      return a.lastIndexOf(v) != i;
    });
  }
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // if alphabet has a problem reject it
    console.log(alphabet)
    if (!alphabet || _isUnique(alphabet) || alphabet.length != 26) {
      return false;
    } else {
      //make string lowercase
      let string = input.toLowerCase();
      const alpha = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      //create object to hold encoder
      let encoder = {};
      //convert passed alphabet into an array
      alphabet = Array.from(alphabet);
      if (encode == true) {
        //match up standard alphabet to encoding alphabet
        for(x=0; x<alphabet.length; x++){
          encoder[alpha[x]] = alphabet[x]
        }
      } else {
        //match up decoding alphabet to standard alphabet
        for(x=0; x<alpha.length; x++){
          encoder[alphabet[x]] = alpha[x]
        }
      }
      console.log(encoder)
      //return mapped array joined as string replacing the letters with encoded or decoded letters
      return Array.from(string.split(""))
        .map((x) => {
          if (x != " ") {
            return encoder[x];
          } else return " ";
        })
        .join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
