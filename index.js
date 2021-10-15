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
        choices: ["Manager", "Engineer", "Intern"]
    },
    ]);

};

let role = '${data.role}';

//manager question
const managerQuestion = () => {
    if (role === "Manager") {
    return inquirer.prompt({
    type: "input",
    name: "offNum",
    message: "What is your office number?",
})
};
//moreEmployees();
};


//engineer question
const engineerQuestion = () => {
    if (role === "Engineer") {
    return inquirer.prompt( {
    type: "input",
    name: "gitHub",
    message: "What is your github username?",
})
};
//moreEmployees();
};


//intern question
const internQuestion = () => {
    if (role === "Intern") {
    return inquirer.prompt( {
    type: "input",
    name: "school",
    message: "What is school?"
})
};
//moreEmployees();
};


//add another employee question
const moreEmployees = () => {
    return inquirer.prompt( {
    type: "confirm",
    name: "anotherOne",
    message: "Do you want to add another employee?",
    //default: false,
})
};

function addEmployee() {
    if (moreEmployees === true) {
        employeeQuestions();
    }

};




//function to create html file
function writeToFile(data) {
    fs.writeFileSync('.\dist\index.html', generateHtml(data))
};


//function to initialize app
const init = () => {
    employeeQuestions()
    // managerQuestion(),
    // engineerQuestion(),
    // internQuestion(),
    // addEmployee()

        .then((data) => writeToFile(data))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
