const { createZeroArray } = require("../src/kata");

describe("Kata", function () {
  it("array is created", function () {
    var result = createZeroArray(3, 3);
    expect(result.length).toBe(3);
  });
});
