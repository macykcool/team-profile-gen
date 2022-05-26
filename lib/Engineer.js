const Employee = require("./Employee");

const engineerArr = [
  {
    type: 'input',
    name: 'name',
    messsage: "Enter engineer's name"
  },
  {
    type: 'input',
    name: 'id',
    messsage: "Enter engineer's id"
  },
  {
    type: 'input',
    name: 'email',
    messsage: "Enter engineer's email"
  },
  {
    type: 'input',
    name: 'github',
    messsage: "Enter engineer's github user name"
  },

]



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

module.exports = { Engineer, engineerArr }