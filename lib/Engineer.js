const Employee = require("./Employee");

//referencing a class enabled by require
class Engineer extends Employee {
  constructor(name, id, email, github) {
    //supercedes the property with those that already exist in extended class (employee)
    super(name, id, email);
    this.github = github;
  }
  //the other methods are coming through from the 'extends'
  getGithub() {
    return this.github;
  }
  //overrides from employee
  getRole() {
    return "Engineer";
  }
}

module.exports=Engineer;