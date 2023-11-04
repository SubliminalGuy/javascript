const { createRandomArray, sumChecker } = require("../src/kata");

describe("Kata", function () {
  it("array is created and contains not only zeros", function () {
    var result = createRandomArray(3, 3);
    expect(result.length).toBe(3);
    expect(sumChecker(result)).toBeGreaterThanOrEqual(1);
  });
});
