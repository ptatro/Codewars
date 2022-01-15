function isPangram(string){
  
  // initialize variables
  let char = "";
  let test = "";
  
  // convert to lowercase
  let lowerString = string.toLowerCase(string);

  //loop through the unicode values of a - z
  for (i = 97; i < 123; i++) {
    char = String.fromCharCode(i);
    test = lowerString.indexOf(char);
    if (test === -1) {
      return false;
    }

  } return true;
  
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));