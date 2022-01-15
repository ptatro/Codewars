function solution(number){
  // convert the number to a roman numeral

  // series of while loops to build the string and loop the remainder
  let romanNumeral = "";
  
  while (number > 999) {
    number = number - 1000;
    romanNumeral = romanNumeral + "M";
  }

  while (number > 499) {
    if (number >= 900) {
      number = number - 900;
      romanNumeral = romanNumeral + "CM";
    } else {
    number = number - 500;
    romanNumeral = romanNumeral + "D";
  }
  }

  while (number > 99) {
    if (number >= 400) {
      number = number - 400;
      romanNumeral = romanNumeral + "CD";
    } else {    
      number = number - 100;
      romanNumeral = romanNumeral + "C";
  }
  }
  while (number > 49) {
    if (number >= 90) {
      number = number - 90;
      romanNumeral = romanNumeral + "XC";
    } else {
      number = number - 50;
      romanNumeral = romanNumeral + "L";
  }
  }

  while (number > 9) {
    if (number >= 40) {
      number = number - 40;
      romanNumeral = romanNumeral + "XL";
    } else if (number === 19) {
      number = number - 19;
      romanNumeral = romanNumeral + "XIX";
    } else {
    number = number - 10;
    romanNumeral = romanNumeral + "X";
  }
  }

  while (number > 4) {
    if (number === 9) {
      number = number - 9;
      romanNumeral = romanNumeral + "IX";
    } else {    
    number = number - 5;
    romanNumeral = romanNumeral + "V";
  }
  }
  while (number > 0) {
    if (number === 4) {
      number = number - 4;
      romanNumeral = romanNumeral + "IV";
    } else {
      number = number - 1;
      romanNumeral = romanNumeral + "I";
    }  
    }

  return romanNumeral;
}


console.log(solution(1748));