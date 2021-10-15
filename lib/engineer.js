const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        //add gitHub property 
        super(name, id, email);
        this.gitHub = gitHub;
    }

    //methods for engineer 

    getgitHub(){
        return this.gitHub;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;