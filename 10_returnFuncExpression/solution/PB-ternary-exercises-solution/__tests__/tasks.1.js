const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Dog", () => {
  test("variable `isDog` exists and has a boolean value      must be defined and assigned a value of true or false, and the right phrase must be printed using ternary", () => {
    const solution = rewire("../solution");
    const isDog = solution.__get__("isDog");
    expect(typeof isDog).toBe("boolean");
  });

  test("If `isDog` is true, the phrase 'Pat, pat, good dog' is printed, otherwise 'Find me a dog to pat!' is printed", () => {
    const solution = rewire("../solution");
    const isDog = solution.__get__("isDog");
    require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(
      isDog ? "Pat, pat, good dog" : "Find me a dog to pat!"
    );
  })
})

describe("2. Speed Limit", () => {
  test("variables `speedLimit` and `yourSpeed` exist and have number values", () => {
    const solution = rewire("../solution");
    const yourSpeed = solution.__get__("yourSpeed");
    const speedLimit = solution.__get__("speedLimit");
    expect(typeof speedLimit).toBe("number");
    expect(typeof yourSpeed).toBe("number");
  });

  test("If `yourSpeed` is greater than `speedLimit`, the phrase 'you're going too fast!' is printed, otherwise 'You're driving below the speed limit, Oma' is printed", () => {
    const solution = rewire("../solution");
    const yourSpeed = solution.__get__("yourSpeed");
    const speedLimit = solution.__get__("speedLimit");
    require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(
      speedLimit < yourSpeed
        ? "you're going too fast!"
        : "You're driving below the speed limit, Oma"
    );
  });
})

describe("3. Age", () => {
  test("variable `age` exists and has number value and the right phrase must be printed using ternary", () => {
    const solution = rewire("../solution");
    const age = solution.__get__("age");
    expect(typeof age).toBe("number");
  });

  test("If `age` is below 16, the phrase 'serve butter beer' is printed, otherwise 'serve beer' is printed", () => {
    const solution = rewire("../solution");
    const age = solution.__get__("age");
    require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(
      age < 16 ? "serve butter beer" : "serve beer"
    );
  })
})

describe("4. Student", () => {
  test("variable `isStudent` and has a boolean value, and the right phrase must be printed using ternary", () => {
    const solution = rewire("../solution");
    const isStudent = solution.__get__("isStudent");
    expect(typeof isStudent).toBe("boolean");
  });

  test("If `isStudent` is true, the phrase 'Ticket costs €5,00' is printed, otherwise 'Ticket costs €12,00' is printed", () => {
    const solution = rewire("../solution");
    const isStudent = solution.__get__("isStudent");
    require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(
      isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00"
    );
  })
})

describe("5. OK Marie", () => {
  test("varibale `okMarie` is defined and has a string value, and the right phrase must be printed using ternary", () => {
    const solution = rewire("../solution");
    const okMarie = solution.__get__("okMarie");
    expect(typeof okMarie).toBe("string");
  });

  test("If `okMarie` has value 'cake', the phrase 'Let them eat cake' is printed, otherwise 'Oh, bother' is printed", () => {
    const solution = rewire("../solution");
    const okMarie = solution.__get__("okMarie");
    require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(
      okMarie == "cake" ? "Let them eat cake" : "Oh, bother"
    );
  });
})

describe("6. Even or odd", () => {
  test("The correct phrase is printed for number 30", () => {
    require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith("30 is even");
  });

  test("The correct phrase is printed for number 939", () => {
    require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith("939 is odd");
  });

  test("The correct phrase is printed for number 40.9", () => {
    require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith("40.9 is odd");
  });
});
