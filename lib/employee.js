class Employee{
    constructor(name, id, email){
        //constructor function containing properties name, id, email
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    //methods for employee

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;