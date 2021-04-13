

test('Test if the saved value is the same as inputed value for Manager Class',()=>{
    const inquirer = require("inquirer")
    
    const testMang= jest.fn(()=>{
        
        inquirer
            .prompt([{
                name:"office",
                type: "input",
                message:"Insert Office Number:",
            }]).then((answer)=>{
                this.officeNmber=answer.office
                this.special="office"
                this.role="Manager"
               
                expect(this.officeNmber).toEqual(answer.office)
            })
    })
})