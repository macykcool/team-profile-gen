const Manager = require('../lib/Manager');

test('should allow you to enter a name, id, email and office number', () => {
    const mgr = new Manager('Macy', 55, 'macykcool@gmail.com', 99);

    expect(mgr.name).toBe('Macy');
    expect(mgr.id).toBe(55);
    expect(mgr.email).toBe('macykcool@gmail.com');
    expect(mgr.officeNumber).toBe(99);
    expect(mgr.getName()).toBe('Macy');
    expect(mgr.getId()).toBe(55);
    expect(mgr.getEmail()).toBe('macykcool@gmail.com');
    expect(mgr.getRole()).toBe('Manager');

});

