//added packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml');

//adding all questions for user

let employeeTeam = [];

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
    message: "What school do/did you attend?"
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


async function checkingAddEmployees() {
      const checktoAdd = await moreEmployees();
      if (checktoAdd.anotherOne) {
        await createMyteam();
      }
      return employeeTeam;
  }



  //helped from BCS support

  async function createMyteam() {
      const userInput = await employeeQuestions();
      const { name, id, email } = userInput;
      
      switch (userInput.role) {

        //engineer
        case "Engineer":
            const engineerAnw = await engineerQuestion();
            const gitHub = engineerAnw;
            let engineer = new Engineer(name, id, email, gitHub);
            employeeTeam.push(engineer);
            await checkingAddEmployees();
          break;


        //intern
        case "Intern":
            const internAnw = await internQuestion();
            const school = internAnw;
            let intern = new Intern(name, id, email, school);
            employeeTeam.push(intern);
            await checkingAddEmployees();
          break;


        //manager
        case "Manager":
            const managerAnw = await managerQuestion();
            const offNum = managerAnw;
            let manager = new Manager(name, id, email, offNum);
            employeeTeam.push(manager);
            await checkingAddEmployees();
          break;
      }

  }




//function to create html file
async function createHTML(data) {
    await createMyteam();
    fs.writeFileSync('./dist/index.html', generateHtml(data))
};




//function to initialize app
const init = () => {
    createHTML()
        .catch((err) => console.error(err));
};

init();