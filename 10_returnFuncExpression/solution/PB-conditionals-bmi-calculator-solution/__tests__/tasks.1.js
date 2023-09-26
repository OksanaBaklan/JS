const rewire = require("rewire");
const solution = rewire("../solution");

describe('Q1: Variables', () => {
    test('`markHeight` variable is defined and has Number value', () => {
        const markHeight = solution.__get__("markHeight");
        expect(markHeight).toEqual(expect.any(Number));
    })
    test('`markMass` variable is defined and has Number value', () => {
        const markMass = solution.__get__("markMass");
        expect(markMass).toEqual(expect.any(Number));
    })
    test('`johnHeight` variable is defined and has Number value', () => {
        const johnHeight = solution.__get__("johnHeight");
        expect(johnHeight).toEqual(expect.any(Number));
    })
    test('`johnMass` variable is defined and has Number value', () => {
        const johnMass = solution.__get__("johnMass");
        expect(johnMass).toEqual(expect.any(Number));
    })
})
