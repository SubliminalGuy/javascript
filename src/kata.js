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
  for (let j = 0; j < myArray.length; j++) {
    sum += myArray[0];
  }

  return sum;
};

console.log(
  sumArray([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 1],
  ])
);

module.exports = { createRandomArray, sumArray };
