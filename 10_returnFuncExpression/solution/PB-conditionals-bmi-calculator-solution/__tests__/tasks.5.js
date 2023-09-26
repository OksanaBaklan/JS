const rewire = require("rewire");
const solution = rewire("../solution");

describe('Q5: Console output', () => {
    test('Output for Q5 is in console', () => {
        console.log = jest.fn();
        const markMoreBeefCake = solution.__get__("markMoreBeefCake");
        const markBMI = solution.__get__("markBMI");
        const johnBMI = solution.__get__("johnBMI");
        require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0, 3) === 'Q5:');
        if (answer) {
            if (typeof markMoreBeefCake === 'boolean') {
                if (markMoreBeefCake === true) {
                    expect(answer.join(' ').toLowerCase()).toContain('mark', markBMI.toFixed(2).toString());
                } else {
                    expect(answer.join(' ').toLowerCase()).toContain('john', johnBMI.toFixed(2).toString());
                }
            } else {
                fail();
            }
        } else {
            fail();
        }
    })
})
