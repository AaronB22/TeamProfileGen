const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee{
    
    newInt(){
        inquirer
            .prompt([{
                name:'school',
                type:'input',
                message:"What school do they attend:"
            }]).then((answers)=>{
                this.school=answers.school;
                this.special="school"
                this.role="Intern"
                super.getData()
            })
    }
}

module.exports= Intern