const createRandomArray = (x, y) => {
  let grid = [];
  for (let i = 0; i < x; i++) {
    let randomArray = Array.from(Array(y), () => (Math.random() > 0.5 ? 1 : 0));
    grid.push(randomArray);
  }

  return grid;
};

const sumChecker = (myArray) => {
  let sum = 0;
  // iterate over each item in the array
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
      sum += myArray[i][j];
    }
  }
  console.log(sum);
  return sum;
};

module.exports = { createRandomArray, sumChecker };
