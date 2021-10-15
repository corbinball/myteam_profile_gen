// Importing the Engineer class  
const Engineer = require('../lib/Engineer');

describe('Engineer',()=>{
    describe('Initialization of Engineer',()=>{
        it('should create an Manager object',()=>{
            const engineer=new Engineer('Corbin',69,'corbin@email.com','fooHub');

            expect(engineer.name).toEqual('Corbin');
            expect(engineer.id).toEqual(69);
            expect(engineer.email).toEqual('corbin@email.com');
            expect(engineer.gitHub).toEqual('fooHub');
        });
    });
    describe('getgitHub method test',()=>{
        it('should return the git hub user name',()=>{
            const engineer=new Engineer('Corbin',69,'corbin@email.com','fooHub');

            expect(engineer.getgitHub()).toEqual('fooHub');
        });
    });
    
    describe('getRole method test',()=>{
        it('should return the Engineer string',()=>{
            const engineer=new Engineer('Corbin',69,'corbin@email.com','fooHub');

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});