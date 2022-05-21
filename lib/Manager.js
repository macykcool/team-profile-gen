const Employee = require("./Employee");

//referencing a class enabled by require
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //supercedes the property with those that already exist in extended class (employee)
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  //the other methods are coming through from the 'extends'
  getOfficeNumber() {
    return this.officeNumber;
  }
  //overrides from employee
  getRole() {
    return "Manager";
  }
}

module.exports=Manager;