const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, offNum) {
        //add office number property
        super(name, id, email);
        this.offNum = offNum;
    }

    //methods for manger

    getOffnum(){
        return this.offNum;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;