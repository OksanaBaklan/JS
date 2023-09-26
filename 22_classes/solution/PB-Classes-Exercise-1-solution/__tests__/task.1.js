const rewire = require('rewire');
const index = rewire('../index.js');

describe("Employee class", () => {
    it("`Employee` is defined", () => {
        const Employee = index.__get__('Employee');
        expect(Employee).toBeDefined()
    })

    it("`Employee` is a class", () => {
        const Employee = index.__get__('Employee');
        expect(typeof Employee === 'function' && /^\s*class\s+/.test(Employee.toString())).toBe(true)
    })

    it("Instance of `Employee` class has `firstname` property", () => {
        const Employee = index.__get__('Employee');
        const emp1 = new Employee("John", "Smith");
        expect(emp1.firstname).toBeDefined();
    })

    it("`firstname` property contains value passed to the class as first argument", () => {
        const Employee = index.__get__('Employee');
        const emp1 = new Employee("John", "Smith");
        expect(emp1.firstname).toBe("John");
    })

    it("Instance of `Employee` class has `lastname` property", () => {
        const Employee = index.__get__('Employee');
        const emp1 = new Employee("John", "Smith");
        expect(emp1.lastname).toBeDefined();
    })

    it("`lastname` property contains value passed to the class as second argument", () => {
        const Employee = index.__get__('Employee');
        const emp1 = new Employee("John", "Smith");
        expect(emp1.lastname).toBe("Smith");
    })
})

describe("1. Full name", () => {
    it('Instance of class `Eployee` should have `fullname` property', () => {
        const Employee = index.__get__('Employee');
        const emp1 = new Employee("John", "Smith");
        expect(emp1.fullname).toBeDefined()
    });
    it('`fullname` property should contain first and last name values passed to the class, divided by single space', () => {
        const Employee = index.__get__('Employee');
        const emp1 = new Employee("John", "Smith");
        expect(emp1.fullname).toBe(`${emp1.firstname} ${emp1.lastname}`);
    });
})

describe("2. Email", () => {
    it('Instance of class `Eployee` should have `email` property', () => {
        const Employee = index.__get__('Employee');
        const emp1 = new Employee("John", "Smith");
        expect(emp1.email).toBeDefined()
    });
    it('`email` property should contain first and last name values passed to the class, divided by `.`, followed by `@company.com`', () => {
        const Employee = index.__get__('Employee');
        const emp1 = new Employee("John", "Smith");
        expect(emp1.email).toBe(`${emp1.firstname}.${emp1.lastname}@company.com`.toLowerCase());
    });
})