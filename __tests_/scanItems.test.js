const { scanItems } = require("../scanItems");

describe("scan item", () => {
  test("returns an empty object if passed an empty array", () => {
    expect(scanItems([])).toEqual({});
  });

  test("returns an object with the correct item when passed one item", () => {
    expect(scanItems(["A"])).toEqual({ A: 1 });
  });

  test("returns the correct number of items when passed the same item more than once", () => {
    expect(scanItems(["A", "A", "A", "A", "A"])).toEqual({ A: 5 });
  });

  test("returns the correct number of items when passed different items", () => {
    expect(scanItems(["A", "C", "B", "B", "A"])).toEqual({ A: 2, B: 2, C: 1 });
  });
});
