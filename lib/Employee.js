const inquirer = require("inquirer");
const fs= require('fs');



let numberEmployee=0;
let pageName=''


const employees= [

]


class Employee{
    constructor(emName,emplId,email,officeNmber,github,school,role,special){
        this.emName=emName;
        
        this.emplId=emplId;
        this.email=email
        this.officeNmber=officeNmber
        this.github=github
        this.school=school
        this.special=special
        this.role=role
       
    }
    getData(){
        console.log(numberEmployee)
     
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

                
                
                employees.push(
                    {
                        name:this.emName,
                        role:this.role,
                        id: this.emplId,
                        email: this.email,
                       special: this.special,
                       github:this.github,
                       office:this.officeNmber,
                       school:this.school
                    })


                
                
                const askForAnotherUser=()=>{
                    console.log(numberEmployee)
                    if(numberEmployee>=6){
                        console.log("Can't fit anymore Employee's on this page. Create a different HTML to add more Employees")
                        return
                    }
                    else{
                    inquirer
                    .prompt([{
                        name:"anotherEmp",
                            type:"list",
                            message:"Need Another Employee?",
                            choices:["Yes","No"]
                        }
                    ]).then((answer)=>{
                            if(answer.anotherEmp==="Yes"){
                                numberEmployee++;
                                console.log(numberEmployee)
                                newEmp()
                            }
                            if(answer.anotherEmp==="No"){
                                console.log(numberEmployee)
                                console.log("Wrting HTML File...")
                                this.getPageName()
                            }
                        })
                }}
                    askForAnotherUser()
                return this
            })
            const newEmp=()=>{
                inquirer
                    .prompt([{
                        name:"typeOfEmp",
                        type:"list",
                        message:"What Type of Employee?",
                        choices:["Manager","Engineer","Intern"]
                    }
                ]).then((answer)=>{
                        if (answer.typeOfEmp==="Manager"){
                           const Manager= require("./Manager")
                            const newEmp= new Manager;
                            newEmp.newMang()
                        }
                        if(answer.typeOfEmp==="Engineer"){
                            const Engineer = require("./Engineer");
                            const newEmp= new Engineer
                            newEmp.newEng()
                        }
                        if(answer.typeOfEmp==="Intern"){
                            const Intern = require("./Intern");
                            const newEmp= new Intern
                            newEmp.newInt()
                        }
                    })}
        }
        
        getPageName(){
            inquirer
                .prompt([ {
                    name:'page',
                    type:'input',
                    message:'Insert name of Page:' 
                },]).then((answers)=>{
                    pageName=answers.page
                    this.writeHTML()
                   
                })


        }


        
        writeHTML(){
            console.log(pageName)
            console.log(employees)
            const stringify=(number, value)=>{
               
                if (employees[number]===undefined){
                    console.log("doesn't exist")
                    return 
                }

                if (employees[number]!==null){
                    if(value==='id'){
                        if(employees[number].id===null){
                            return null
                        }
                        else{
                       const withQuotes= JSON.stringify(employees[number].id)
                       return "ID: "+ withQuotes.replace(/\"/g, "")}
                        }
                    if (value==="email"){
                        if(employees[number].email===undefined){
                            return null
                        }
                        else{
                       const withQuotes= JSON.stringify(employees[number].email)
                       return "Email: \n"+ withQuotes.replace(/\"/g, "")}
                    }
                    if (value==="roleInfo"){
                        if(employees[number].special===undefined){
                            return null
                        }


                        if(employees[number].special==="github"){
                            const withQuotes= JSON.stringify(employees[number].github);
                            const unquoted=withQuotes.replace(/\"/g, "");
                            return `Github: <a href='https://github.com/${unquoted}'>${unquoted}</a>`
                        }
                        if(employees[number].special==="office"){
                            const withQuotes= JSON.stringify(employees[number].office)
                            return 'Office Number: '+ withQuotes.replace(/\"/g, "")
                        }
                        if(employees[number].special==="school"){
                            const withQuotes= JSON.stringify(employees[number].school)
                            return 'Attends: '+ withQuotes.replace(/\"/g, "")
                        }
                    }
                }
            }
            const checkIfVis=(number)=>{
                if (employees[number]!==undefined){
                return 'style="visibility:visable;"'
            }
                else {
                    return 'style="visibility:hidden ;"'
                }
        }
        const getName=(number)=>{
            if(employees[number]!==undefined){
                const withQuotes= JSON.stringify(employees[number].name)
                return withQuotes.replace(/\"/g, "")
            }
            else{
                return "No name inserted"
            }
        }

        const getRole=(number)=>{
            if(employees[number]!==undefined){
                const withQuotes= JSON.stringify(employees[number].role)
                return withQuotes.replace(/\"/g, "")
            }
            else{
                return "No role inserted"
            }
        }
                fs.writeFile(`./dist/${pageName}.html`,`
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageName}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="jumbotron ">
        <h1 class="h1">${pageName}</h1>

    </div>

    <div class="column parentDiv centerClass ">
        <div class="row c0" id="c0" ${checkIfVis(0)}>
            <div class="bg-primary blockHead">
                <h2 class="name">${getName(0)}</h2>
                <h3 class="role">${getRole(0)}</h3>
            </div>
            <div class="innerDiv">
                <p class='emID' id="emID0">${stringify(0,'id')}</p>
                <p class='email' id='email0'>${stringify(0,'email')}</p>
                <p class='roleInfo' id="roleInfo0">
                    ${stringify(0,'roleInfo')}
                </p>

            </div>
        </div>    


        <div class="row c1 " id="c1" ${checkIfVis(1)}">
            <div class=" bg-primary blockHead">
            <h2 class="name">${getName(1)}</h2>
            <h3 class="role">${getRole(1)}</h3></div>
            <div class="innerDiv">
                <p class='emID' id="emID1">${stringify(1,'id')}</p>
                <p class='email' id='email1'>${stringify(1,'email')}</p>
                <p class='roleInfo' id="roleInfo1">
                ${stringify(1,'roleInfo')}
                </p>
            </div>
        </div> 

        <div class="row c2 " id="c2" ${checkIfVis(2)}">
            <div class=" bg-primary blockHead">
            <h2 class="name">${getName(2)}</h2>
            <h3 class="role">${getRole(2)}</h3>
            </div>
            <div class="innerDiv">
                <p class='emID' id="emID2">${stringify(2,'id')}</p>
                <p class='email' id='email2'>${stringify(2,'email')}</p>
                <p class='roleInfo' id="roleInfo2">
                ${stringify(2,'roleInfo')}
                </p>

            </div>
        </div> 
    </div>
        <div class="lowerParentDiv">
            <div class="row c3" id="c3" ${checkIfVis(3)}>
                <div class=" bg-primary blockHead" >
                <h2 class="name">${getName(3)}</h2>
                <h3 class="role">${getRole(3)}</h3>
                </div>
                <div class="innerDiv">
                    <p class='emID' id="emID3">${stringify(3,'id')}</p>
                    <p class='email' id='email3'>${stringify(3,'email')}</p>
                    <p class='roleInfo' id="roleInfo3">
                    ${stringify(3,'roleInfo')}
                    </p>
    
                </div>
            </div> 

        <div class="row c4" id="c4" ${checkIfVis(4)}>
            <div class=" bg-primary blockHead" >
            <h2 class="name">${getName(4)}</h2>
            <h3 class="role">${getRole(4)}</h3></div>
            <div class="innerDiv">
                <p class='emID' id="emID4">${stringify(4,'id')}</p>
                <p class='email' id='email4'>${stringify(4,'email')}</p>
                <p class='roleInfo' id="roleInfo4">
                ${stringify(4,'roleInfo')}
                </p>

            </div>
        </div>
        <div class="row c5" id="c5" ${checkIfVis(5)}>
            <div class=" bg-primary blockHead">
            <h2 class="name">${getName(5)}</h2>
            <h3 class="role">${getRole(5)}</h3>
            </div>
            <div class="innerDiv">
                <p class='emID' id="emID5">${stringify(5,'id')}</p>
                <p class='email' id='email5'>${stringify(5,'email')}</p>
                <p class='roleInfo' id="roleInfo5">
                ${stringify(5,'roleInfo')}
                </p>

            </div>
        </div>
</div>

</body>
</html>
        `,err =>{
            if(err){
                console.log("error")
                return}}        
        )




        }
        
        }

module.exports = Employee;