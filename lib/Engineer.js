const inquirer = require("inquirer");
const Employee = require("./Employee");


class Engineer extends Employee{
    
     newEng(){
         inquirer
         .prompt([{
             name:"gitHub",
             type:"input",
             message:"What's the Employee's Github Name:"
         }]).then((answers)=>{
            this.github=answers.gitHub
            this.special="github"
            this.role="Engineer"
             super.getData()
         }
         )
    }
}

module.exports=Engineer;