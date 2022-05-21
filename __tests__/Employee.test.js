

const Employee = require('../lib/Employee');

test('should allow you to enter a name, id and email', () => {
    const empo = new Employee('Macy', 55, 'macykcool@gmail.com');

    expect(empo.name).toBe('Macy');
    expect(empo.id).toBe(55);
    expect(empo.email).toBe('macykcool@gmail.com');
    expect(empo.getName()).toBe('Macy');
    expect(empo.getId()).toBe(55);
    expect(empo.getEmail()).toBe('macykcool@gmail.com');
    expect(empo.getRole()).toBe('Employee');

});