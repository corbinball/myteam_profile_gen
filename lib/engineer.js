const Employee = require('./shape');

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {

        super(name, id, email);
        this.gitHub = gitHub;
    }

getgitHub(){
    return this.gitHub
}

}

module.exports = Engineer;