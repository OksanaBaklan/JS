const rewire = require("rewire");

describe("factorial", () => {
  it("`solution.js` exists", () => {
    require("../solution");
  });
  it("function `factorial` exists", () => {
    const solution = rewire("../solution");
    const factorial = solution.__get__("factorial");
    expect(factorial).toBeDefined();
  });
  it("function `factorial` should return the factorial of input", () => {
    const solution = rewire("../solution");
    const factorial = solution.__get__("factorial");
    const result = factorial(4);
    expect(result).toBe(24);
  });
  it("function `factorial` should return 1 if the input is 0", () => {
    const solution = rewire("../solution");
    const factorial = solution.__get__("factorial");
    const result = factorial(0);
    expect(result).toBe(1);
  });
});
