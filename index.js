const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const template = require("./src/template");

const { Manager, managerArr } = require("./lib/Manager");
const { Engineer, engineerArr } = require("./lib/Engineer");
const { Intern, internArr } = require(".lib/Intern");
const Employee = require("./lib/Employee");

const init = () => {
  managerQuestions;
};

//manager q's
const managerQuestions = () => {
  inquirer.prompt(managerArr).then((answers) => {
    new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employeesArr.push(answers);
    return employeesPrompt();
  });
};

//engineer
const engineerQuestions = () => {
  inquirer.prompt(engineerArr).then((answers) => {
    new Engineer(answers.name, answers.id, answers.email, answers.github);
    employeesArr.push(answers);
    return employeesPrompt();
  });
};

//intern
const internQuestions = () => {
  inquirer.prompt(internArr).then((answers) => {
    new Intern(answers.name, answers.id, answers.email, answers.school);
    employeesArr.push(answers);
    return employeesPrompt();
  });
};

// menu of options

// function that writes html with css and template

// // // Function call to initialize app
init();
