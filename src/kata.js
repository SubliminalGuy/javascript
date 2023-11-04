const createZeroArray = (x, y) => {
  let grid = [];
  for (let i = 0; i < x; i++) {
    let randomArray = Array.from(Array(y), () => (Math.random() > 0.5 ? 1 : 0));
    grid.push(randomArray);
  }
  console.log(grid);
  return grid;
};

module.exports = { createZeroArray };
