// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
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
    choices: ["MIT", "Apache2.0", "Boost1.0", "BSD2", "BSD3", "ISC", "None"],
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
    type: "input",
    name: "purpose",
    message: "What problem will this applaction will solve?",

}, {
    type: "input",
    name: "creator",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to ProjectSummary.md")
    askQuestions()
}
async function askQuestions() {
    const answers = await inquirer.prompt(questions)
    console.log(answers)
    const markDown = generateMarkdown(answers)
    console.log(markDown)
}

// Function call to initialize app
init();
