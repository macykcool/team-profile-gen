

const Employee = require('../lib/Employee');

test('should allow you to enter a name, id and email', () => {
    const employee = new Employee('Macy', 55, 'macykcool@gmail.com');

    expect(employee.name).toBe('Macy');
    expect(employee.id).toBe(55);
    expect(employee.email).toBe('macykcool@gmail.com');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');

});