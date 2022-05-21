const Employee = require("./Employee");

//referencing a class enabled by require
class Intern extends Employee {
  constructor(name, id, email, school) {
    //supercedes the property with those that already exist in extended class (employee)
    super(name, id, email);
    this.school = school;
  }
  //the other methods are coming through from the 'extends'
  getSchool() {
    return this.school;
  }
  //overrides from employee
  getRole() {
    return "Intern";
  }
}

module.exports=Intern;