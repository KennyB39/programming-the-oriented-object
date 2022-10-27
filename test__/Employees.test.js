const Employees = require('../lib/Employees');
const Employees = require('../lib/Employees');

Test('checks for required Emloyee properties', () => {
    const Employees = new Employees('nobody', 1, 'email@some');
    expect(employee.name).toEqual(expect.any(String));
    console.log(`Employees Name: ${employee.name}`)
    expect(employee.id).toEqual(expect.any(Number));
    console.log(`Employees ID: ${employee.id}`)
    expect(employee.email).toEqual(expect.any(String));
    console.log(`Employees Email: ${employee.email}`)
});

test('Gets employees name', () => {
    const employee = new Employee('nobody', 1,'email@some.com');
    expect(employee.getName()).toEqual(expect.any(String));
    console.log(`Employees getName(): ${employee.getName()}`)
});

test('Gets employees id', () => {
    const employee = new Employee('nobody', 1,'email@some.com');
    expect(employee.getId()).toEqual(expect.any(String));
    console.log(`Employees getId(): ${employee.getId()}`)
}); 

test('Gets employees email', () => {
    const employee = new Employee('nobody', 1,'email@some.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
    console.log(`Employees getEmail(): ${employee.getEmail()}`)
});

test('Gets employees role', () => {
    const employee = new Employee('nobody', 1,'email@some.com');
    expect(employee.getRole()).toBe('Employees');
    // Returns 'Employee'
    console.log(`Employees getRole(): ${employee.getRole()}`)
});

