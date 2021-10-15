const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require ("inquirer");
const fs = require("fs");
const path = require("path");


function generateHtml(empEngineer, empManager, empIntern){
    console.log(empEngineer, empManager, empIntern);
    return `<!DOCTYPE html>
    <html>
    
    <head>
      <title>myTeam</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href=".dist\style.css">
    </head>
    
    <body>
        <div class = "container-fluid">
            <div class = "row d-flex justify-content-center">   
                <h1 class = "text-center"> My Team of Workers </h1>
            </div>
        </div>


        <div class = "container">
            <div class = "row d-flex justify-content-center">
                ${generateManager(empManager)}
                ${generateEngineer(empEngineer)}
                ${generateIntern(empIntern)}
                


                
            </div>
        </div>
    </body>`
}

function generateEngineer(empEngineer) {
//loop
    let engineerhtml = "";
    for (i=0; i < empEngineer.length; i ++) {

    engineerhtml += `<div class = "col-sm-4">
    <div class = "card employee-card">
        <div class = "card-header">
            <h2 class = "card-title">${empEngineer[i].name}</h2>
            <h3 class = "card-title">${empEngineer[i].role}</h3>
        </div>
        <div class = "card-body">
            <ul class = "list-group">
                <li class = "list-group-item">ID: ${empEngineer[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${empEngineer[i].email}">${empEngineer[i].email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${empEngineer[i].gitHub}" target="_blank" rel="noopener noreferrer">${empEngineer[i].gitHub}</a></li>
            </ul>
        </div>
    </div>
    </div>`
    };
    return engineerhtml;
}

function generateIntern(empIntern) {
    let internhtml = "";
    for (i=0; i < empIntern[i].length; i ++) {
        internhtml += `<div class = "col-sm-4">
        <div class = "card employee-card">
            <div class = "card-header">
                <h2 class = "card-title">${empIntern[i].name}</h2>
                <h3 class = "card-title">${empIntern[i].role}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">ID: ${empIntern[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${empIntern[i].email}">${empIntern[i].email}</a></li>
                    <li class="list-group-item">School: ${empIntern[i].school}</li>
                </ul>
            </div>
        </div>
        </div>`
    };
    return internhtml;
}

function generateManager(empManager) {
    let managerhtml = "";
    for (i=0; i < empManager.length; i ++) {
        managerhtml += `<div class = "col-sm-4">
        <div class = "card employee-card">
            <div class = "card-header">
                <h2 class = "card-title">${empManager[i].name}</h2>
                <h3 class = "card-title">${empManager[i].role}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">ID: ${empManager[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${empManager[i].email}">${empManager[i].email}</a></li>
                    <li class="list-group-item">Office number: ${empManager[i].offNum}</li>
                </ul>
            </div>
        </div>
        </div>`
    };
    return managerhtml;
    
}


module.exports = generateHtml;