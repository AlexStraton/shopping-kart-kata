const calculateTotal = require("../calculateTotal");

describe("calculate total", () => {
  test("returns 0 if passed an empty cart", () => {
    expect(calculateTotal([])).toEqual(0);
  });

  test("returns correct total if passed an array with one item and quantity is 0", () => {
    expect(calculateTotal([{ code: "A", quantity: 0 }])).toEqual(0);
  });

  test("returns correct total if passed an array with one item and quantity is 1", () => {
    expect(calculateTotal([{ code: "A", quantity: 1 }])).toEqual(50);
  });

  test("returns correct total if passed an array with one item and quantity is > 1", () => {
    expect(calculateTotal([{ code: "A", quantity: 2 }])).toEqual(100);
  });

  test("returns correct total if passed an array with two objects with different quantities", () => {
    expect(
      calculateTotal([
        { code: "A", quantity: 2 },
        { code: "B", quantity: 1 },
      ])
    ).toEqual(135);
  });

  test("returns correct total if passed an array with any number of objects with different quantities", () => {
    expect(
      calculateTotal([
        { code: "C", quantity: 2 },
        { code: "D", quantity: 1 },
        { code: "B", quantity: 1 },
        { code: "A", quantity: 0 },
      ])
    ).toEqual(97);
  });

  test("returns correct total if passed an array with a non-existing item", () => {
    expect(
      calculateTotal([
        { code: "E", quantity: 2 },
        { code: "D", quantity: 1 },
      ])
    ).toEqual(12);
  });

  test("returns correct total when one item on offer is bought", () => {
    expect(calculateTotal([{ code: "A", quantity: 3 }])).toEqual(140);
  });

  test("returns correct total when more than one item on offer is bought", () => {
    expect(
      calculateTotal([
        { code: "A", quantity: 6 },
        { code: "B", quantity: 4 },
      ])
    ).toEqual(400);
  });

  test("returns correct total when items on offer are matched together with other items", () => {
    expect(
      calculateTotal([
        { code: "A", quantity: 3 },
        { code: "B", quantity: 1 },
      ])
    ).toEqual(175);
  });

  test("returns correct total when one offer is matched ", () => {
    expect(calculateTotal([{ code: "A", quantity: 3 }])).toEqual(140);
  });

  test("returns correct total when more than one offer is matched ", () => {
    expect(
      calculateTotal([
        { code: "A", quantity: 4 },
        { code: "B", quantity: 2 },
      ])
    ).toEqual(250);
  });
});
