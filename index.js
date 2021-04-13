const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



const askForNewUser=()=>{
    inquirer
    .prompt([
        {
            name: "employeeNeed",
            type:"list",
            message:"Need to add a new employee?",
            choices:["Yes","No"]
        }
    ]).then((answers)=>{
        if(answers.employeeNeed==="Yes"){
            createNewProfile()
        }
        else if(answers.employeeNeed==="No"){
            console.log("GoodBye!")
        }
    })
}

askForNewUser()



const createNewProfile=()=>{
    inquirer
    .prompt([
        {
            name: "employeeType",
            type:"list",
            message:"What type of Employee?",
            choices:["Manager",'Engineer','Intern']
        },
        ])
        .then((answers)=>{
           
            if (answers.employeeType==="Manager"){
                const newUser= new Manager()
              newUser.newMang()
            }
            if (answers.employeeType==="Engineer"){
               const newUser= new Engineer()
               newUser.newEng()
            }
            if (answers.employeeType==="Intern"){
                const newUser= new Intern()
                newUser.newInt()
            }
        })}

