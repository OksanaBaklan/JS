const rewire = require("rewire");
const solution = rewire("../solution");

describe('Q3: Who has higher BMI?', () => {
    test('`markMoreBeefCake` variable contains correct result', () => {
        const markBMI = solution.__get__("markBMI");
        const johnBMI = solution.__get__("johnBMI");
        const markMoreBeefCake = solution.__get__("markMoreBeefCake");
        expect(markMoreBeefCake).toEqual(markBMI > johnBMI);
    })
})
