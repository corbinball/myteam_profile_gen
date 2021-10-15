// Importing the Employee class  
// const { expect } = require('@jest/globals');
// const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Employee',()=>{
    describe('Initialization of Employee',()=>{
        it('should create an employee object',()=>{
            const employee=new Employee('Corbin',69,'corbin@email.com');

            expect(employee.name).toEqual('Corbin');
            expect(employee.id).toEqual(69);
            expect(employee.email).toEqual('corbin@email.com');
        });
    });
    describe('getName method test',()=>{
        it('should return the name',()=>{
            const employee=new Employee('Corbin',69,'corbin@email.com');

            expect(employee.getName()).toEqual('Corbin');
        });
    });
    describe('getId method test',()=>{
        it('should return the id',()=>{
            const employee=new Employee('Corbin',69,'corbin@email.com');

            expect(employee.getId()).toEqual(69);
        });
    });
    describe('getEmail method test',()=>{
        it('should return the email',()=>{
            const employee=new Employee('Corbin',69,'corbin@email.com');

            expect(employee.getEmail()).toEqual('corbin@email.com');
        });
    });
    describe('getRole method test',()=>{
        it('should return the Employee string',()=>{
            const employee=new Employee('Corbin',69,'corbin@email.com');

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});