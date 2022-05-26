const {Intern} = require('../lib/Intern');

test('should allow you to enter a name, id, email and school', () => {
    const employee = new Intern('Macy', 55, 'macykcool@gmail.com', 'UCD');

    expect(employee.name).toBe('Macy');
    expect(employee.id).toBe(55);
    expect(employee.email).toBe('macykcool@gmail.com');
    expect(employee.school).toBe('UCD');
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');

});