const calculateTotal = require("../calculateTotal");

describe("calculate total", () => {
  test.only("returns 0 if passed an empty array", () => {
    expect(calculateTotal([])).toEqual(0);
  });

  test.only("returns correct total if passed an array with one item", () => {
    expect(calculateTotal(["A"])).toEqual(50);
  });
});
