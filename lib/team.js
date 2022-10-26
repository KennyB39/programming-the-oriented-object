const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern ');
const renderPage = require('../src/page');
const { default: Choices } = require('inquirer/lib/objects/choices');

class team {
    constructor(){
        this.member = [];
    }
    async initializeTeam (){
    await this.addManager();
    await this.makeChoice();
}

async addManager(){
    await inquirer
    .prompt ([
        {
            type: `input`,
            name: `name`,
            message: `What is the team Managers' name??`,
        },
        {
            type: `input`,
            name: `id`,
            message: `what is the team Managers' id??`,
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the team Managers' email??`,
        },
        {
            type: `input`,
            name: `officeNumber`,
            message: `What is the team Managers' number??`,
        }
    ])

    .then((managerObject)=>{
        this.member.push(new Manager(managerObject));
        // console.log(this);
    });
}

async makeChoice() {
    await inquirer.prompt({
        type:`list`,
        name:`choice`,
        message:`what would you like ot do now?`,
        Choices:[`Add engineer`, `Add intern`, `Finish building`],
    })
    .then(async ({choice})=>{
        console.log(choice)
        if (choice === 'Finish building'){
            console.log('Getting things together')
            this.buildTeam(this.member)
            return
        }
        else{
            await this.addEmployee(choice)
        }
    });
}
}