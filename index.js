const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML.js");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('.lib/Intern');

// const promptMgr = () => {
//   return inquirer
//     .prompt([
//   //manager name employee id, email, office number 
//   {
//     type: "input",
//     name: "manager",
//     message: "What is the Manager name for this project?",
//     validate: (nameInput) => {
//       if (nameInput) {
//         return true;
//       } else {
//         console.log("Please enter manager name!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "manager id",
//     message: "Enter manager employee ID",
//     validate: (nameInput) => {
//       if (nameInput) {
//         return true;
//       } else {
//         console.log("Please enter manager employee ID!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "manager email",
//     message: "Enter manager's email",
//     validate: (nameInput) => {
//       if (nameInput) {
//         return true;
//       } else {
//         console.log("Please enter the manager's email address!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "office number",
//     message: "Enter the manager's office number",
//     validate: (nameInput) => {
//       if (nameInput) {
//         return true;
//       } else {
//         console.log("Please enter the manager's office!");
//         return false;
//       }
//     },
//     },
//   ]);
// };


// const promptTeam = portfolioData => {
//   if (!portfolioData.projects) {
//     portfolioData.projects = [];
//   } 
//   return inquirer.prompt([
//     {
//       type: 'list',
//       name: 'employee add',
//       message: 'Please select an employee classification to add to this project',
//       //change choice type and have to submit one only?
//       choices: ['Engineer', 'Intern', 'All done']
//       },

//       //if engineer, add the enginner and bring back to menu
//       //done building when ALL DONE selected 
//     // {
//     //   type: 'confirm',
//     //   name: 'confirmEngineer',
//     //   message: 'Would you like to add an Engineer to this project?',
//     //   default: true
//     // },
//     // {
//     //   type: 'input',
//     //   name: 'engineer',
//     //   message: 'Select the Engineer',
//     //   when: ({ confirmEngineer }) => {
//     //     if (confirmEngineer) {
//     //       return true;
//     //     } else {
//     //       return false;
//     //     }
//     //   }
//     // },
//     // {
//     //   type: 'confirm',
//     //   name: 'confirmIntern',
//     //   message: 'Would you like to add an Intern to this project?',
//     //   default: true
//     // },
//     // {
//     //   type: 'input',
//     //   name: 'intern',
//     //   message: 'Select the Intern',
//     //   when: ({ confirmIntern }) => {
//     //     if (confirmIntern) {
//     //       return true;
//     //     } else {
//     //       return false;
//     //     }
//     //   }
//     // },
//   ]);
// };
  //would you like to add an engineer or intern or finish

  //engineer

  //intern


//finish



// function that writes html with css and template

function init() {
  inquirer.prompt(promptMgr)
  .then(function (userInput) {
    console.log(userInput);
    writeToFile("./dist/index.html", generateHTML(userInput));
  });
}

// // // Function call to initialize app
init();
