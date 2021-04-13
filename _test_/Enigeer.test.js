


test('Test if saved values are the same as inputed values ', ()=>{
    const inquirer=require('inquirer')
    const testEng= jest.fn(()=>{
        inquirer
        .prompt([{
            name:"gitHub",
            type:"input",
            message:"What's the Employee's Github Name:"
        }]).then((answers)=>{
           this.github=answers.gitHub
           this.special="github"
           this.role="Engineer"
           expect(this.github).toEqual(answers.gitHub)
        }
        )
    })

})