// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
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
    // if encoding message
    if (encode == true) {
      //convert input string into an array
      return Array.from(input.toLowerCase())
        .map((x) => {
          //if character is not a space
          if (x != " ") {
            //get index of letter from alphabet array
            let ind = alphabet.indexOf(x);
            // if letter is j give it same index as i
            if (x == "j") {
              ind = 8;
            //else its its regular index
            } else {
              ind = alphabet.indexOf(x);
            }
            //calculate column
            col = (ind % 5) + 1;
            //calculate row
            row = Math.floor(ind / 5 + 1);
            //return string literal with column and row
            letter = `${col}${row}`;
            //if its a space pass through a space
          } else letter = " ";
          //return new letter
          return letter;
        })
        .join("");
    } else {
      //split input to be decoded
      input = input.split(" ");
      input = input.map((str) => {
        //if number length is even
        if (str.length % 2 == 0) {
          //return each string split into pairs
          return str.split(/(?=(?:..)*$)/);
          //if its not even return error
        } else {
          return "error";
        }
      });
      //if theres an error in the string return false
      if (input.includes("error")) {
        return false;
      }
      //else decode and return string     
      return input
        .map((x) => {
          return x
            .map((y) => {
              //calculate correct index from column and row
              let ind = (Number(y[1]) - 1) * 5 + Number(y[0]) - 1;
              //if index == 8 return i and j
              if (ind == 8) return "(i/j)";
              return alphabet[ind];
            })
            .join("");
        })
        .join(" ");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
