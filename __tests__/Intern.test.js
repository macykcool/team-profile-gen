const Intern = require('../lib/Intern');

test('should allow you to enter a name, id, email and school', () => {
    const ntr = new Intern('Macy', 55, 'macykcool@gmail.com', 'UCD');

    expect(ntr.name).toBe('Macy');
    expect(ntr.id).toBe(55);
    expect(ntr.email).toBe('macykcool@gmail.com');
    expect(ntr.school).toBe('UCD');
    expect(ntr.getName()).toBe('Macy');
    expect(ntr.getId()).toBe(55);
    expect(ntr.getEmail()).toBe('macykcool@gmail.com');
    expect(ntr.getSchool()).toBe('UCD');
    expect(ntr.getRole()).toBe('Intern');

});