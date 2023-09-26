const rewire = require("rewire");

describe("reverseString", () => {
  test("`reverseString` function should exist", () => {
    const reverseString = rewire("../solution").__get__("reverseString");
    expect(reverseString).toBeDefined();
  });
});

describe("reverseString argument", () => {
  test("`reverseString` should throw an error if no argument is passed", () => {
    const reverseString = rewire("../solution").__get__("reverseString");
    expect(() => {
      reverseString();
    }).toThrow();
  });
});

describe("reverseString output", () => {
  test("`reverseString` should return the input string in reversed form", () => {
    const reverseString = rewire("../solution").__get__("reverseString");
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });
});