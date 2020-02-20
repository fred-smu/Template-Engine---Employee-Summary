const path = require("path");
const fs = require("fs");
const apps = require("./app");
const teamList = apps.teamList;


// setting path names so i dont have to type theis again
const templatesDir = path.join(__dirname, "/templates");

const teamBuilder = (teamList) => {

    // set html to empty
    const html = [];
    // gets all the team with the Manager label and calls teamBuilderManager
    html.push(teamList
        .filter(teamList => teamList.getRole() === "Manager")
        .map(manager => teamBuilderManager(manager))
    );
    // gets all the team with the Engineer label and calls teamBuilderEngineer
    html.push(teamList
        .filter(teamList => teamList.getRole() === "Engineer")
        .map(engineer => teamBuilderEngineer(engineer))
    );
    // gets all the team with the Manager label and calls teamBuilderManager
    html.push(teamList
        .filter(teamList => teamList.getRole() === "Intern")
        .map(intern => teamBuilderIntern(intern))
    );
//  console.log(html);

    return teamBuilderindex(html.join(""));
    //  console.log(html);
    

};

const teamBuilderManager = manager => {
    //reads in the manager.html
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    // replaces the placeholders in the template with good values
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());

    return template;
};

const teamBuilderEngineer = engineer => {
    //reads in the engineer.html
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    // replaces the placeholders in the template with good values
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());

    return template;
};

const teamBuilderIntern = intern => {
    //reads in the intern.html
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    // replaces the placeholders in the template with good values
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());

    return template;
};

const teamBuilderindex = html => {
    //reads in the master HTML "intern.html"
    const template = fs.readFileSync(path.resolve(templatesDir, "index.html"), "utf8");
    //replaces the place holder with good team card values
    const masterHTML = replacePlaceholders(template, "team", html);
    //sets output dir and what file name we are calling our output
    const file = path.join(__dirname, "output", "/indexOutput.html");
    //writes to our file
    fs.writeFileSync(file, masterHTML);
  };

  const replacePlaceholders = (template, replacePlaceholders, value) => {
     const pattern = new RegExp("{ " + replacePlaceholders + " }", "gm");
    return template.replace(pattern, value);
    console.log("replace the patern ="+ template);
  };


module.exports = teamBuilder;








