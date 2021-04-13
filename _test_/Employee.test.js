const Employee = require("../lib/Employee")


jest.mock('../lib/Employee')



describe("Mocks inquirer Prompts",()=>{
  const inquirer=require('inquirer')
    test("Test to see if saved value equals the value the user Inputs for Employee",()=>{
        const testData=jest.fn(()=>{
        inquirer
        
        .prompt([
            {
                name: "empName",
                type:"input",
                message:"Input employee's name:",
                
             },{
                 name:"employeeEmail",
                 type:"input",
                 message:"Insert Employee's Email:"
             },
             {
                 name:'employeeID',
                 type:'input',
                 message:'What is the Employee\'s ID:' 
             },
            
         ]).then((answers)=>{
                 
                  this.emName=answers.empName
                    this.emplId=answers.employeeID;
                  this.email=answers.employeeEmail
                  expect(this.emName).toEqual(answers.empName)
                  expect(this.emplId).toEqual(answers.emplId)
                  expect(this.emplId).toEqual(answers.employeeEmail)
                
                })})
    
        testData()
        expect(testData).toHaveBeenCalled();
    })


})