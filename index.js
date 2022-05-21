const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML.js");

const promptTeam = [
  //manager
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Enter your employee ID",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your employee ID!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your employee email",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your employee email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "office",
    message: "Enter your office number",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your office!");
        return false;
      }
    },
  },

  //would you like to add an engineer or intern or finish

  //engineer

  //intern
];

//finish



// function that writes html with css and template

function init() {
  inquirer.prompt(promptTeam).then(function (userInput) {
    console.log(userInput);
    writeToFile("./dist/index.html", generateHTML(userInput));
  });
}

// // // Function call to initialize app
init();
