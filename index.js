//added packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml');

//adding all questions for user

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

//manager question
const managerQuestion = () => {
    return inquirer.prompt({
    type: "input",
    name: "offNum",
    message: "What is your office number?",
})
};
//engineer question
const engineerQuestion = () => {
    return inquirer.prompt( {
    type: "input",
    name: "gitHub",
    message: "What is your github username?",
})
};
//intern question
const internQuestion = () => {
    return inquirer.prompt( {
    type: "input",
    name: "school",
    message: "What is school?"
})
};
//add another employee question
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
