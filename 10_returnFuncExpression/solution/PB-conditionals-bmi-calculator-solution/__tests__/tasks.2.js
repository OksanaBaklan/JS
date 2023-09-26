const rewire = require("rewire");
const solution = rewire("../solution");


describe('Q2: BMIs', () => {
    test('`markBMI` variable contains correct result', () => {
        const markHeight = solution.__get__("markHeight");
        const markMass = solution.__get__("markMass");
        const markBMI = solution.__get__("markBMI");
        expect(markBMI).toEqual(markMass / (markHeight * markHeight));
    })
    test('`johnBMI` variable contains correct result', () => {
        const johnHeight = solution.__get__("johnHeight");
        const johnMass = solution.__get__("johnMass");
        const johnBMI = solution.__get__("johnBMI");
        expect(johnBMI).toEqual(johnMass / (johnHeight * johnHeight));
    })
})
