const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "list",
        name: "license",
        message: "What type of license is your project using?",
        choices: ["MIT","APACHE v2.0","GNU General Public License v3.0", "Creative Commons Zero v1.0", "Eclipse Public License 2.0", "None"]
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project"
    },
    {
        type: "input",
        name: "usage",
        message: "Write a brief explanation of how to use your application"
    },
    {
        type: "input",
        name: "installation",
        message: "Briefly explain how to install dependencies",
        default: "npm i"
    },
    {
        type: "input",
        name: "issues",
        message: "How should a user report an issue with your application?"
    },
    {
        type: "input",
        name: "contribute",
        message: "How can users make contributions to your project?"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
