


test("Test if the saved values equal the input value for Interns",()=>{
    const inquirer=require('inquirer')
    const testIntern= jest.fn(()=>{
        inquirer
        .prompt([{
            name:'school',
            type:'input',
            message:"What school do they attend:"
        }]).then((answers)=>{
            this.school=answers.school;
            this.special="school"
            this.role="Intern"
            expect(this.school).toEqual(answers.school)
        })
    })
    testIntern()
})