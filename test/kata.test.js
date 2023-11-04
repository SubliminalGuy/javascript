const { createRandomArray, sumArray } = require("../src/kata");

describe("Kata", function () {
  it("array is created", function () {
    var result = createRandomArray(3, 3);
    expect(result.length).toBe(3);
    expect(sumArray(result)).toBeGreaterThanOrEqual(1);
  });
});
