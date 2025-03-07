// const { scanItems } = require("../scanItems");

describe("scan item", () => {
  test.skip("returns an empty object if passed an empty array", () => {
    expect(scanItems([])).toEqual({});
  });

  test.skip("returns an object with the correct item when passed one item", () => {
    expect(scanItems(["A"])).toEqual({ A: 1 });
  });

  test.skip("returns the correct number of items when passed the same item more than once", () => {
    expect(scanItems(["A", "A", "A", "A", "A"])).toEqual({ A: 5 });
  });

  test.skip("returns the correct number of items when passed different items", () => {
    expect(scanItems(["A", "C", "B", "B", "A"])).toEqual({ A: 2, B: 2, C: 1 });
  });
  // test.only("returns correct total if passed an array with an item that doesn't exist", () => {
  //   expect(calculateTotal(["A", "F", "C"])).toEqual(75);
  //   expect(calculateTotal(["D", 5, "A"])).toEqual(62);
  // });
});
