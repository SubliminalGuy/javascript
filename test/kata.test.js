const { createZeroArray } = require("../src/kata");

describe("Kata", function () {
  it("array is created", function () {
    var result = createZeroArray();
    expect(result.length).toBe(3);
  });
});
