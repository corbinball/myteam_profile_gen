const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


function generateHtml(data){
    return `<!DOCTYPE html>
    <html>
    
    <head>
      <title>myTeam</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href=".dist\style.css">
    </head>
    
    <body>
     
    <h1> My Team of Workers </h1>

    // <div container goes here for manager>

    // <div container goes here for engineer>

    // <div container goes here for interns>


    
    
    </body>`

    //stuff goes here


}

function generateEngineer(data) {


}

function generateIntern(data) {


}

function generateManager(data) {


}


module.exports = generateHtml;