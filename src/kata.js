const createZeroArray = (x, y) => {
  let grid = [];
  for (let i = 0; i < x; i++) {
    grid.push([0, 0, 0]);
  }
  return grid;
};

module.exports = { createZeroArray };
