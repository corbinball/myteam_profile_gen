// Importing the Manager class  
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager',()=>{
    describe('Initialization of Manager',()=>{
        it('should create an Manager object',()=>{
            const manager=new Manager('Corbin',69,'corbin@email.com',100);

            expect(manager.name).toEqual('Corbin');
            expect(manager.id).toEqual(69);
            expect(manager.email).toEqual('corbin@email.com');
            expect(manager.offNum).toEqual(100);
        });
    });
    describe('getOffnum method test',()=>{
        it('should return the office nuber',()=>{
            const manager=new Manager('Corbin',69,'corbin@email.com',100);

            expect(manager.getOffnum()).toEqual(100);
        });
    });
    
    describe('getRole method test',()=>{
        it('should return the Manager string',()=>{
            const manager=new Manager('Corbin',69,'corbin@email.com',100);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});