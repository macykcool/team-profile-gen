const Engineer = require('../lib/Engineer');

test('should allow you to enter a name, id, email and github username', () => {
    const egr = new Engineer('Macy', 55, 'macykcool@gmail.com', 'macykcool');

    expect(egr.name).toBe('Macy');
    expect(egr.id).toBe(55);
    expect(egr.email).toBe('macykcool@gmail.com');
    expect(egr.github).toBe('macykcool');
    expect(egr.getName()).toBe('Macy');
    expect(egr.getId()).toBe(55);
    expect(egr.getEmail()).toBe('macykcool@gmail.com');
    expect(egr.getGithub()).toBe('macykcool');
    expect(egr.getRole()).toBe('Engineer');

});
