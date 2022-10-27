const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const buildTeam = require('./src/page');
const teamMembers = [];

    function addManager() {
        inquirer.prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the team Managers' name?`,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `what is the team Managers' id?`,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the team Managers' email?`,
                },
                {
                    type: `input`,
                    name: `officeNumber`,
                    message: `What is the team Managers' number?`,
                }
            ])
            .then((manager) => {
               teamMembers.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));
                makeChoice();
            });
    }

    function makeChoice() {
     inquirer.prompt({
            type: `list`,
            name: `choice`,
            message: `what would you like ot do now?`,
            choices: [`Add engineer`, `Add intern`, `Finish building`],
        })
            .then((userChoice) => {
                if (userChoice.choice === 'Finish building') {
                    console.log('Getting things together')
                    buildTeam(teamMembers);
                    return
                }
                else if (userChoice.choice === 'Add intern') {
                    addIntern()
                }
                else if (userChoice.choice === 'Add engineer') {
                    addEngineer()
                }
            });
    }
   
    function addEngineer() {
        console.log('Adding Engineer'); 
            inquirer.prompt([
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
                   teamMembers.push(new Engineer(engineerObject.name, engineerObject.id, engineerObject.email, engineerObject.github));
                   makeChoice();
                });
        
    }
    function addIntern() {
        console.log('adding Intern')
        inquirer.prompt([
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
               teamMembers.push(new Intern(internObject.name, internObject.id, internObject.email, internObject.school));
                makeChoice();
            });
    }
    
 addManager();

