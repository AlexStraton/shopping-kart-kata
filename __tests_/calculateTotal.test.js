const calculateTotal = require("../calculateTotal");

describe("calculate total", () => {
  test.only("returns 0 if passed an empty array", () => {
    expect(calculateTotal([])).toEqual(0);
  });

  test.only("returns correct total if passed an array with one item", () => {
    expect(calculateTotal(["A"])).toEqual(50);
  });

  test.only("returns correct total if passed an array with more than one item", () => {
    expect(calculateTotal(["A", "B", "C"])).toEqual(110);
    expect(calculateTotal(["A", "D", "C"])).toEqual(87);
  });

  test.only("returns correct total if passed an array with more than one item and repeated items", () => {
    expect(calculateTotal(["A", "A", "C"])).toEqual(125);
    expect(calculateTotal(["D", "D", "A"])).toEqual(74);
  });
});
