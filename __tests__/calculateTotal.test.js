const calculateTotal = require("../calculateTotal");

describe("calculate total", () => {
  test.only("returns 0 if passed an empty cart", () => {
    expect(calculateTotal([])).toEqual(0);
  });

  test.only("returns correct total if passed an array with one item and quantity is 0", () => {
    expect(calculateTotal([{ code: "A", quantity: 0 }])).toEqual(0);
  });

  test.only("returns correct total if passed an array with one item and quantity is 1", () => {
    expect(calculateTotal([{ code: "A", quantity: 1 }])).toEqual(50);
  });

  test.only("returns correct total if passed an array with one item and quantity is > 1", () => {
    expect(calculateTotal([{ code: "A", quantity: 2 }])).toEqual(100);
  });

  test("returns correct total if passed an array with more than one item", () => {
    expect(calculateTotal(["A", "B", "C"])).toEqual(110);
    expect(calculateTotal(["A", "D", "C"])).toEqual(87);
  });

  test("returns correct total if passed an array with more than one item and repeated items", () => {
    expect(calculateTotal(["A", "A", "C"])).toEqual(125);
    expect(calculateTotal(["D", "D", "A"])).toEqual(74);
  });
  test("returns correct total when only items on offer are bought", () => {
    expect(calculateTotal(["A", "A", "A"])).toEqual(140);
    expect(calculateTotal(["B", "B"])).toEqual(60);
  });
  test("returns correct total when items on offer are bought together with other items", () => {
    expect(calculateTotal(["A", "A", "B", "B", "B"])).toEqual(195);
    expect(calculateTotal(["B", "B", "C", "A", "A", "A"])).toEqual(225);
    expect(calculateTotal(["A", "A", "A", "A", "A", "A"])).toEqual(280);
  });
});
