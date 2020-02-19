var inquirer = require("inquirer");
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
var Employee = require("./lib/Employee");
var teamBuilder = require("./teamBuilder");
const teamList = [];

function createTeam() {

    inquirer.prompt([

            {
                type: "list",
                name: "memberChoice",
                message: "What is your roll in this team?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Close Employee List"
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

                case "Close Employee List":
                    teamBuilder(teamList);
                    break

            }
        })

}
function addManager() {

    inquirer.prompt([

            {
                type: "input",
                message: "What is the Managers name?",
                name: "managerName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "managerID"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "managerEmail"
            },

            {
                type: "input",
                message: "What is your office number?",
                name: "managerOfficeNumber"
            }

        ]).then(userChoice => {
            console.log(userChoice);

            const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)
            teamList.push(manager)
            createTeam();

        })


}


function addEngineer() {
    inquirer.prompt([

            {
                type: "input",
                message: "What is the Engineers name?",
                name: "engineerName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "engineerID"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "engineerEmail"
            },

            {
                type: "input",
                message: "What is your GitHub username?",
                name: "gitHubUsername"
            }
        ]).then(userChoice => {
            console.log(userChoice);

            const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)
            teamList.push(engineer)
            createTeam();

        })
}




function addIntern() {

    inquirer.prompt([

            {
                type: "input",
                message: "What is the Interns  name?",
                name: "internName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "internID"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "internEmail"
            },

            {
                type: "input",
                message: "What is your school?",
                name: "internSchool"
            }
        ]).then(userChoice => {
            console.log(userChoice);

            const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)
            teamList.push(intern)
            createTeam();
        })
}


module.exports = teamList

createTeam();
