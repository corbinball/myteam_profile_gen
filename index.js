// TODO: Include packages needed for this application
//added packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml');

// TODO: Create an array of questions for user input
const employeeQuestions = () => {
    return inquirer.prompt([
        // questions for employees
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee e-mail?",
    },
    {
        type: "list",
        name: "role",
        message: "What is the role of the Employee?",
        choices: ["Manager", "Engineer", "Manager"]
    },
])
};

const managerQuestion = () => {
    return inquirer.prompt({
    type: "input",
    name: "offNum",
    message: "What is your office number?",
})
};

const engineerQuestion = () => {
    return inquirer.prompt( {
    type: "input",
    name: "gitHub",
    message: "What is your github username?",
})
};

const internQuestion = () => {
    return inquirer.prompt( {
    type: "input",
    name: "school",
    message: "What is school?"
})
};

const moreEmployees = () => {
    return inquirer.prompt( {
    type: "confirm",
    name: "anotherOne",
    message: "Do you want to add another employee?",
    default: false,
})
};

//function to create html file
function writeToFile(data) {
    fs.writeFileSync('dist\index.html', generateHtml(data))
};


//function to initialize app
const init = () => {
    employeeQuestions()
        .then((data) => writeToFile(data))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
