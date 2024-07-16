const calculateTotal = require("../calculateTotal");

describe("calculate total", () => {
  test.only("returns 0 if passed an empty array", () => {
    expect(calculateTotal([])).toEqual(0);
  });
});
