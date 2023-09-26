const rewire = require("rewire");
const fs = require("fs");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Array Destructuring", () => {
    it("`fruit` variable has correct value", () => {
        const solution = rewire("../index.js");
        expect(solution.__get__("fruit")).toBe("banana");
    })
    it("`vegetable` variable has correct value", () => {
        const solution = rewire("../index.js");
        expect(solution.__get__("vegetable")).toBe("cucumber");
    })
    it("remaining values are assigned to `food` using rest property of destructuring assignment", () => {
        const solution = rewire("../index.js");
        const content = fs.readFileSync("index.js", "utf8").replace(/\s/g, "");
        expect(content).toMatch(/\.\.\.food/i);
        expect(solution.__get__("food")).toEqual(expect.arrayContaining(["bread", "cakes", "pizza"]));
    })
});

describe("2. Object  Destructuring", () => {
    it("`fran` variable has correct value", () => {
        const solution = rewire("../index.js");
        expect(solution.__get__("fran")).toBe("monster");
    })
    it("`martina` variable has correct value", () => {
        const solution = rewire("../index.js");
        expect(solution.__get__("martina")).toBe("ghost");
    })
    it("`camille` variable has correct value", () => {
        const solution = rewire("../index.js");
        expect(solution.__get__("camille")).toBe("witch");
    })
    it("Object destructuring is used to assign values to variables", () => {
        const content = fs.readFileSync("index.js", "utf8").replace(/\s/g, "");
        expect(content).toMatch(/\}\=\{/i);
    })
});

describe("3. Parameters: Object Destructuring", () => {
    it("`musician` Object is defined", () => {
        const solution = rewire("../index.js");
        expect(solution.__get__("musician")).toBeDefined();
    })
    it("`displayMusicianDetails` function prints musician info as string", () => {
        const solution = rewire("../index.js");
        const displayMusicianDetails = solution.__get__("displayMusicianDetails");
        const musician = solution.__get__("musician");
        expect(displayMusicianDetails(musician)).toMatch(new RegExp(`(?=.*${Object.values(musician)[0]})(?=.*${Object.values(musician)[1]})`, 'i'));
    });
});