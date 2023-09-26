const rewire = require("rewire");
const solution = rewire("../solution");

describe('Q4: Console output', () => {
    test('Output for Q4 is in console', () => {
        console.log = jest.fn();
        const markMoreBeefCake = solution.__get__("markMoreBeefCake");
        require('../solution');
        const answer = console.log.mock.calls.find(call => call.join(' ').substring(0, 3) === 'Q4:');
        if (answer) {
            if (typeof markMoreBeefCake === 'boolean') {
                if (markMoreBeefCake === true) {
                    expect(answer.join(' ').toLowerCase()).toContain('true');
                } else {
                    expect(answer.join(' ').toLowerCase()).toContain('false');
                }
            } else {
                fail();
            }
        } else {
            fail();
        }
    })
})
