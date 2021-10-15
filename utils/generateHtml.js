const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require ("inquirer");
const fs = require("fs");
const path = require("path");


function generateHtml(data){
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




        

            




                <!-- containers for manager, engineer, and interns-->




            </div>
        </div>




    
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