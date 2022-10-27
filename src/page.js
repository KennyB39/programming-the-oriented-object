const fs = require('fs')
const path = require('path')
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function buildTeam(teamMembers){
    let page = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
    
        <header>
            My Team
        </header>
    
        <main>    
    
    `
    for (let i = 0; i < teamMembers.length; i++){
        let teamMember = teamMembers[i];
        if (teamMember.getRole() === 'Manager'){
    page = page + `
    <div class="card">
    <div class="card-head">
        <div class="card-name"> ${teamMember.getName()} </div>
        <div class="card-title"> ${teamMember.getRole()} </div>
    </div>
    <div class="card-body">
        <div class="id">ID: ${teamMember.getId()}</div>
        <div class="email">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></div>
        <div class="variable">${teamMember.getOfficeNumber}</div>
    </div>
</div>
    `

        }else if (teamMember.getRole() === 'Intern'){
            page = page +  `
            <div class="card">
            <div class="card-head">
                <div class="card-name"> ${teamMember.getName()} </div>
                <div class="card-title"> ${teamMember.getRole()} </div>
            </div>
            <div class="card-body">
                <div class="id">ID: ${teamMember.getId()}</div>
                <div class="email">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></div>
                <div class="variable">${teamMember.getSchool}</div>
            </div>
        </div>
            `
        }else if(teamMember.getRole()=== 'engineer'){
            page = page + `
            <div class="card">
            <div class="card-head">
                <div class="card-name"> ${teamMember.getName()} </div>
                <div class="card-title"> ${teamMember.getRole()} </div>
            </div>
            <div class="card-body">
                <div class="id">ID: ${teamMember.getId()}</div>
                <div class="email">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></div>
                <div class="variable">${teamMember.getGithub}</div>
            </div>
        </div>
            `
        }
    }
page = page + `</main>

</body>

</html>
`
buildTeamFile(page)
}



function buildTeamFile(page){
    
        fs.writeFile('../dist/index.html', page , err => {
            if(err){
               console.log(err);
            }
           console.log("File Created")
        });
    }


    module.exports = buildTeam;