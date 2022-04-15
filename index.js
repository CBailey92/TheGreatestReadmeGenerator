// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of the project?",
    name: "Title"
}, {
    type: "input",
    message: "How would you describe the purpose of the project?",
    name: "Description"
}, {
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "Installation"
}, {
    type: "input",
    message: "How does a user use this project?",
    name: "Usage"
}, {
    type: "input",
    message: "Who contributed to the project?",
    name: "Contributors"
}, {
    type: "input",
    message: "How do you test the project?",
    name: "Testing"
}, {
    type: "list",
    message: "Choose a liscense from the list.",
    name: "license",
    choices: [
        'MIT',
        'GPL 2.0',
        'GPL 3.0',
        'Apache 2.0',
        'None'
    ],
}, {
    type: "input",
    message: "Enter your email address",
    name: "email"
}, {
    type: "input",
    message: "What is your github username?",
    name: "github"
},
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((userResponse) => {
        console.log('userResponse:', userResponse);
    });
    writeToFile('generatedReadMe.md', generateMarkdown({ ...userResponse}));
};
// Function call to initialize app
init();
