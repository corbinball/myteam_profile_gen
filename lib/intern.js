const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        //add school property
        super(name, id, email);
        this.school = school;
    }

    //methods for intern

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;