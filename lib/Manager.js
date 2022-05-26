const Employee = require("./Employee");

const managerArr = [
  {
    type: 'input',
    name: 'name',
    messsage: "Enter manager's name"
  },
  {
    type: 'input',
    name: 'id',
    messsage: "Enter manager's id"
  },
  {
    type: 'input',
    name: 'email',
    messsage: "Enter manager's email"
  },
  {
    type: 'input',
    name: 'github',
    messsage: "Enter manager's office number"
  },
]

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

module.exports = { Manager, managerArr } 