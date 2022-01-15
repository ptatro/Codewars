function rentalCarCost(d) {
  // Your solution here
  
  let total=0;
  
  if (d < 3) {
    total = d * 40;
  } else if (d < 7) {
    total = ((d*40) - 20);
  } else {
    total = ((d*40) - 50);
  }
  
  return total;
}



console.log(rentalCarCost(4));