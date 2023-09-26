const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("Recursion", () => {
  test("`sum` function should be defined", () => {
    const solution = rewire("../solution");
    const sum = solution.__get__("sum");
    expect(sum).toBeDefined();
  })
  test("Should take an array of numbers as argument and return the sum of the numbers in array", () => {
    const solution = rewire("../solution");
    const sum = solution.__get__("sum");
    expect(sum([10,2,3,1000])).toEqual(1015);
  });
 
});
