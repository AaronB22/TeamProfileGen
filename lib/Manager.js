const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");


class Manager extends Employee{
    

   async newMang(){
       
        inquirer
            .prompt([{
                name:"office",
                type: "input",
                message:"Insert Office Number:",
            }]).then((answer)=>{
                this.officeNmber=answer.office
                this.special="office"
                this.role="Manager"
                super.getData()
                 
            })}
            
}

module.exports= Manager