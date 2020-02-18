var inquirer = require("inquirer");
// var Manager = require("./lib/Manager");
// var Engineer = require("./lib/Engineer");
// var Intern = require("./lib/Intern");

const teamList = [];

function createTeam() {

    inquirer
        .prompt([

            {
                type: "list",
                name: "memberChoice",
                message: "What is your roll in this team?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more employees"
                ]
            }

        ]).then(userChoice => {
            
            switch (userChoice.memberChoice) {
                
                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;

                case "No more employees":
                    render(teamList);
                    break

            }
        })

}
function addManager() {
    teamList.push(manager)
console.log(manager);

                createTeam();

}
function addEngineer() {
    teamList.push(engineer)
console.log(engineer);

                createTeam();

}
function addIntern() {
    teamList.push(intern)
console.log(intern);

                createTeam();

}

createTeam();