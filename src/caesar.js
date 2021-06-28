// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift == 0 || shift > 25 || shift < -25) {
      return false;
    }
    //convert string to lowercase
    string = input.toLowerCase();
    const alphabet = [
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
    //return string split into array then mapped
    return Array.from(string.split(""))
      .map((x) => {
        //if the letter is in alphabet
        if (alphabet.includes(x)) {
          let ind;
          //if encode take index and add shift to encode or subtract to decode
          if (encode == true) {
            ind = alphabet.indexOf(x) + shift;
          } else {
            ind = alphabet.indexOf(x) - shift;
          }
          //if shifted index is outside of range wrap it
          //if less than 0 add 26 to wrap around to end
          if (ind < 0) ind += 26;
          //over 25 modulus by 26 to wrap to beginning
          else if (ind > 25) ind = ind % 26;
          //return new letter
          return alphabet[ind];
          //else return the space 
        } else return x;
      })
      .join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
