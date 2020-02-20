var inquirer = require("inquirer");
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
var Employee = require("./lib/Employee");
var teamBuilder = require("./teamBuilder");
//sets arry teamList to empty
const teamList = [];

function createTeam() {
// prompts for jobs to branch off of
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
          // uses switch to call funtions  
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
                    // breaks out of loop when all team members or intered
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
            //  console.log(userChoice);
            // creates manager object to add to the end of teamList
            const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)
            teamList.push(manager)
            //starts the process for more team members
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
            //  console.log(userChoice);
            // creates engineer object to add to the end of teamList
            const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)
            teamList.push(engineer)
            //starts the process for more team members
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
            //  console.log(userChoice);
            // creates intern object to add to the end of teamList        
            const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)
            teamList.push(intern)
            //starts the process for more team members
            createTeam();
        })
}


module.exports = teamList

createTeam();
