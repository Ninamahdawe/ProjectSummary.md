// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "location",
    message: "where would you like to save your README.md",
}, {
    type: "input",
    name: "title",
    message: "Provide your project name",
},
{

    type: "input",
    name: "description",
    message: "Describe the Project's End Goals and Practical Functioning ",
},
{
    type: "list",
    name: "license",
    message: "Please select a license that's applicable to your project",
    choices: ["MIT", "Apache2.0", "BSD2", "ISC", "None"],
},
{
    type: "input",
    name: "require",
    message: "List any project dependencies if applicable ",
}, {
    type: "input",
    name: "usage",
    message: "Provide how the user will install and run this app?",

}, {
    type: 'input',
    name: 'installation',
    message: 'Explain how to install the application:',
},
{
    type: "input",
    name: "purpose",
    message: "What problem will this application will solve?",

}, {
    type: "input",
    name: "github",
    message: "Provide your Github username",
}, {

    type: "input",
    name: "name",
    message: "Provide your full name ",
}, {
    type: "input",
    name: "email",
    message: "Provide a valid email",

}];

// checks the file location and checks for the last char
function writeToFile(fileLocation, data) {
    if (fileLocation.charAt(fileLocation.length - 1) !== "/") {
        fileLocation += "/"
    }
    fs.writeFileSync(`${fileLocation}README.md`, data)

}

// TODO: Create a function to initialize app
async function init() {
    console.log("Welcome to ProjectSummary.md")
    const answers = await askQuestions()
    const markDown = generateMarkdown(answers)
    console.log(markDown)
    writeToFile(answers.location, markDown)
}
async function askQuestions() {
    const answers = await inquirer.prompt(questions)
    console.log(answers)
    return answers;
}

// Function call to initialize app
init();
