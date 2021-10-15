// Importing the Intern class  
const Intern = require('../lib/Intern');

describe('Intern',()=>{
    describe('Initialization of Intern',()=>{
        it('should create an Intern object',()=>{
            const intern=new Intern('Corbin',69,'corbin@email.com','fooU');

            expect(intern.name).toEqual('Corbin');
            expect(intern.id).toEqual(69);
            expect(intern.email).toEqual('corbin@email.com');
            expect(intern.school).toEqual('fooU');
        });
    });
    describe('getSchool method test',()=>{
        it('should return the git hub user name',()=>{
            const intern=new Intern('Corbin',69,'corbin@email.com','fooU');

            expect(intern.getSchool()).toEqual('fooU');
        });
    });
    
    describe('getRole method test',()=>{
        it('should return the Intern string',()=>{
            const intern=new Intern('Corbin',69,'corbin@email.com','fooU');

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});