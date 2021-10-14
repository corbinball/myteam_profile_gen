class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        //return name
        return this.name;
    }

    getId(){
        //return id
    }
    getEmail(){
        //return email
    }
}

module.exports = Employee;