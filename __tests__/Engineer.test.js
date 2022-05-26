const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('should allow you to enter a name, id, email and github username', () => {
    const employee = new Engineer('Macy', 55, 'macykcool@gmail.com', 'macykcool');

    expect(employee.name).toBe('Macy');
    expect(employee.id).toBe(55);
    expect(employee.email).toBe('macykcool@gmail.com');
    expect(employee.github).toBe('macykcool');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');

});
