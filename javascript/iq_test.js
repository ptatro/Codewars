function iqTest(numbers){
  let arr=numbers.split(" ");
  let numArr = [];
  let evenCount = 0;
  let oddCount = 0;  
  
  // create an array with each remainder
  arr.forEach(createNumberArray);
  
  function createNumberArray (position) {
    numArr.push((Number(position)) % 2);
  }
  
  numArr.forEach(even);
  
  // count how many even and odd are in the array
  function even(num) {
    if (num === 0) {
      evenCount = evenCount + 1;
    } else {
      oddCount = oddCount + 1;
    }
  }
  
  // determine the odd one out
  if (evenCount === 1) {
    let position = (numArr.indexOf(0));
    let different = position + 1;
    return different;
  } else if (oddCount === 1) {
    let position = (numArr.indexOf(1));
    let different = position + 1;
    return different;
  }
}



console.log(iqTest("1 2 1 1"))