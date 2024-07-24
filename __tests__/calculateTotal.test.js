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

  test.only("returns correct total if passed an array with two objects and different quantities", () => {
    expect(
      calculateTotal([
        { code: "A", quantity: 2 },
        { code: "B", quantity: 1 },
      ])
    ).toEqual(135);
    // expect(
    //   calculateTotal([
    //     { code: "C", quantity: 2 },
    //     { code: "D", quantity: 1 },
    //     { code: "B", quantity: 2 },
    //   ])
    // ).toEqual(132);
  });

  test.only("returns correct total if passed an array with more than one item and repeated items", () => {
    expect(
      calculateTotal([
        { code: "E", quantity: 2 },
        { code: "D", quantity: 1 },
      ])
    ).toEqual(12);
  });

  test.only("returns correct total when only items on offer are bought", () => {
    expect(calculateTotal([{ code: "A", quantity: 3 }])).toEqual(140);
  });

  test.only("returns correct total when only items on offer are bought", () => {
    expect(
      calculateTotal([
        { code: "A", quantity: 3 },
        { code: "B", quantity: 1 },
      ])
    ).toEqual(175);
  });

  test.only("returns correct total when one offer is matched ", () => {
    expect(
      calculateTotal([
        { code: "A", quantity: 4 },
        { code: "B", quantity: 2 },
      ])
    ).toEqual(250);
  });

  test.only("returns correct total when one offer is matched ", () => {
    expect(calculateTotal([{ code: "A", quantity: 3 }])).toEqual(250);
  });

  test("returns correct total when items on offer are bought together with other items", () => {
    expect(calculateTotal(["A", "A", "B", "B", "B"])).toEqual(195);
    expect(calculateTotal(["B", "B", "C", "A", "A", "A"])).toEqual(225);
    expect(calculateTotal(["A", "A", "A", "A", "A", "A"])).toEqual(280);
  });
});
