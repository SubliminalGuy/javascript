const createRandomArray = (x, y) => {
  let grid = [];
  for (let i = 0; i < x; i++) {
    let randomArray = Array.from(Array(y), () => (Math.random() > 0.5 ? 1 : 0));
    grid.push(randomArray);
  }
  console.log(grid);
  return grid;
};

const sumArray = (myArray) => {
  let sum = 0;

  // iterate over each item in the array
  for (let j = 0; j < myArray[0]; j++) {
    sum += myArray[j];
  }
  console.log(sum);
  return sum;
};

module.exports = { createRandomArray, sumArray };
