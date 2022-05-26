const Manager = require('../lib/Manager');

test('should allow you to enter a name, id, email and office number', () => {
    const employee = new Manager('Macy', 55, 'macykcool@gmail.com', 99);

    expect(employee.name).toBe('Macy');
    expect(employee.id).toBe(55);
    expect(employee.email).toBe('macykcool@gmail.com');
    expect(employee.officeNumber).toBe(99);
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber)
    expect(employee.getRole()).toBe('Manager');

});

