const inquirer = require("inquirer");
const writeFile = require("./src/generateHTML");
const template = require("./src/template");

const { Manager, managerArr } = require("./lib/Manager");
const { Engineer, engineerArr } = require("./lib/Engineer");
const { Intern, internArr } = require("./lib/Intern.js");

const employeesArr = [];

const init = () => {
  managerQuestions()
};

//manager q's
const managerQuestions = () => {
  inquirer.prompt(managerArr).then((answers) => {
    answers = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employeesArr.push(answers);
    return menuPrompt();
  });
};

//engineer
const engineerQuestions = () => {
  inquirer.prompt(engineerArr).then((answers) => {
    answers = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    employeesArr.push(answers);
    return menuPrompt();
  });
};

//intern
const internQuestions = () => {
  inquirer.prompt(internArr).then((answers) => {
    answers = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    employeesArr.push(answers);
    return menuPrompt();
  });
};

// menu of options
const menuPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Which type of employee is being added?",
        choices: [
          { name: "Engineer", value: "addEngineer" },
          { name: "Intern", value: "addIntern" },
          { name: "DONE", value: "done" },
        ],
      },
    ])
    .then((answer) => {
      //call questiosn from lib files
      if (answer.employeeType === "addEngineer") {
        engineerQuestions();
      }
      if (answer.employeeType === "addIntern") {
        internQuestions();
      }
      if (answer.employeeType === "done") {
        //user input into data for template
        let HTML = template(employeesArr);
        // function that writes html template
        writeFile(HTML);
      }
    });
};

// Function call to initialize app
init();
