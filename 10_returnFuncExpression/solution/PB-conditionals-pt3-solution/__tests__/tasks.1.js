const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Team scores", () => {
  test("`laraTeamAve` variable exists", () => {
    const solution = rewire("../solution");
    const laraTeamAve = solution.__get__("laraTeamAve");
    expect(laraTeamAve).toBeDefined();
  });
  test("`aleezaTeamAve` variable exists", () => {
    const solution = rewire("../solution");
    const aleezaTeamAve = solution.__get__("aleezaTeamAve");
    expect(aleezaTeamAve).toBeDefined()
  });
  test("Value of `laraTeamAve` is the average of *116*, *94* and *123*", () => {
    const solution = rewire("../solution");
    const laraTeamAve = solution.__get__("laraTeamAve");
    expect(laraTeamAve).toBe(111);
  });
  test("Value of `aleezaTeamAve` is the average of *89*, *120* and *103*", () => {
    const solution = rewire("../solution");
    const aleezaTeamAve = solution.__get__("aleezaTeamAve");
    expect(aleezaTeamAve).toBe(104);
  });
});
describe("1. Winner message", () => {
  test("Correct winner message is printed to the terminal, controlled by the condition", () => {
    require("../solution");
    const consoleOutput = consoleSpy.mock.calls.join().toLowerCase().replace(/\s/g, "");
    expect(consoleOutput).toContain("winnerwithanaveragescoreof111");
  });
});
describe("3. New score for Aleeza's team", () => {
  test("`aleezaTeamAve2` variable exists", () => {
    const solution = rewire("../solution");
    const aleezaTeamAve2 = solution.__get__("aleezaTeamAve2");
    expect(aleezaTeamAve2).toBeDefined()
  });
  test("'Value of `aleezaTeamAve2` is the average of *200*, *120* and *103*", () => {
    const solution = rewire("../solution");
    const aleezaTeamAve2 = solution.__get__("aleezaTeamAve2");
    expect(aleezaTeamAve2).toBe(141);
  });
  test("Winner message is printed to the terminal according to new score", () => {
    require("../solution");
    const consoleOutput = consoleSpy.mock.calls.join().toLowerCase().replace(/\s/g, "");
    expect(consoleOutput).toContain("winnerwithanaveragescoreof141");
  });
});
describe("4. Mary's team", () => {
  test("`maryTeamAve` variable exits", () => {
    const solution = rewire("../solution");
    const maryTeamAve = solution.__get__("maryTeamAve");
    expect(maryTeamAve).toBeDefined();
  });
  test("Value of `maryTeamAve` is average of *200*, *134* and *105*", () => {
    const solution = rewire("../solution");
    const maryTeamAve = solution.__get__("maryTeamAve");
    expect(maryTeamAve).toBe(146);
  });
  test("Message on winner between `laraTeamAve`, `aleezaTeamAve2` and `maryTeamAve` is printed to the terminal", () => {
    require("../solution");
    const consoleOutput = consoleSpy.mock.calls.join().toLowerCase().replace(/\s/g, "");
    expect(consoleOutput).toContain("winnerwithanaveragescoreof146");
  });
});
describe("5. New score for Mary's team", () => {
  test("`maryTeamAve2` variable exists", () => {
    const solution = rewire("../solution");
    const maryTeamAve2 = solution.__get__("maryTeamAve2");
    expect(maryTeamAve2).toBeDefined();
  });
  test("Value of `maryTeamAve2` is average of *184*, *134* and *105*", () => {
    const solution = rewire("../solution");
    const maryTeamAve2 = solution.__get__("maryTeamAve2");
    expect(maryTeamAve2).toBe(141);
  });
  test("`Message on winner between `laraTeamAve`, `aleezaTeamAve2` and `maryTeamAve2` is printed to the terminal", () => {
    {
      require("../solution");
      const consoleOutput = consoleSpy.mock.calls.join().toLowerCase().replace(/\s/g, "");
      expect(consoleOutput).toContain("firstplacewithanaveragescoreof141");
    }
  });
});
