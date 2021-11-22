// include the packages needed - inquirer for user prompting and fs to write markdown to the file system
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user input
const questions = () => {
  //data = [];
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title? (Required)",
      validate: (titleinput) => {
        if (titleinput) {
          return true;
        } else {
          console.log("Please enter a title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a project description.",
    },
    {
      type: "input",
      name: "installation",
      message:
        "Enter the instructions for installation. Please provide a step-by-step guide of how to install the application.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide examples and instructions for use.",
    },
    {
      type: "checkbox",
      name: "licenses",
      message: "Which are the licenses applicable to your application?.",
      choices: ["MIT", "Apache", "GNU", "ISC", "OBSD", "None"],
    },
    {
      type: "input",
      name: "contributors",
      message: "Who were the developers who contributed to this application?",
    },
    {
      type: "input",
      name: "tests",
      message: "List any test(s) that you have for the application.",
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github username? (Required)",
      validate: (userinput) => {
        if (userinput) {
          return true;
        } else {
          console.log("Please enter a Github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
};

// To write README file
const writeToFile = (pageMD) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./output/README.md", pageMD, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "ReadMe Created",
      });
    });
  });
};

questions()
  .then((answers) => {
    return generateMarkdown(answers);
  })
  .then((readmeMarkdown) => {
    return writeToFile(readmeMarkdown);
  })
  .then((writefileResponse) => {
    console.log(writefileResponse.message);
  })
  .catch((err) => {
    console.log(err);
  });
