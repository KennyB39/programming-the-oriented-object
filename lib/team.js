const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern ');
const renderPage = require('../src/page');
const { default: Choices } = require('inquirer/lib/objects/choices');

class team {
    constructor() {
        this.member = [];
    }
    async initializeTeam() {
        await this.addManager();
        await this.makeChoice();
    }

    async addManager() {
        await inquirer
            .prompt([
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

            .then((managerObject) => {
                this.member.push(new Manager(managerObject));
                // console.log(this);
            });
    }

    async makeChoice() {
        await inquirer.prompt({
            type: `list`,
            name: `choice`,
            message: `what would you like ot do now?`,
            Choices: [`Add engineer`, `Add intern`, `Finish building`],
        })
            .then(async ({ choice }) => {
                console.log(choice)
                if (choice === 'Finish building') {
                    console.log('Getting things together')
                    this.buildTeam(this.member)
                    return
                }
                else {
                    await this.addEmployee(choice)
                }
            });
    }
    async addEmployee(passedChoice) {
        if (passedChoice === 'Add Engineer') {
            await this.addEngineer()
        }
        else {
            await this.addIntern()
        }
        console.log('')
    }
    async addEngineer() {
        console.log('Adding Engineer'); {
            await inquirer
                .prompt([
                    {
                        type: `input`,
                        name: `name`,
                        message: `What is the Engineers name?`,
                    },
                    {
                        type: `input`,
                        name: `id`,
                        message: `What is the Engineers ID?`,
                    },
                    {
                        type: `input`,
                        name: `email`,
                        message: `What is the Engineers Email?`,
                    },
                    {
                        type: `input`,
                        name: `github`,
                        message: `What is the Engineers GITHUB?`,
                    }

                ])

                .then((engineerObject) => {
                    this.member.push(new Engineer(engineerObject));
                });

            console.log('-------')
        }
    }
    async addIntern() {
        console.log('adding Intern')
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the Intern's name? `,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the Intern's ID? `,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Intern's email? `,
                },
                {
                    type: `input`,
                    name: `school`,
                    message: `What is the Intern's school? `,
                },
            ])
            .then((internObject) => {
                this.member.push(new Intern(internObject));
            });
        console.log(`-------`)
    }
    async buildTeam(passedArray) {
        console.log(`Building Team`)
        console.log(passedArray)
        console.log(`--------`)
        renderPage(passedArray)
    }
}

module.exports = team;