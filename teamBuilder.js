const path = require("path");
const fs = require("fs");
const apps = require("./app");
const teamList = apps.teamList;



const templatesDir = path.join(__dirname, "/templates");

const teamBuilder = (teamList) => {


    const html = [];

    html.push(teamList
        .filter(teamList => teamList.getRole() === "Manager")
        .map(manager => teamBuilderManager(manager))
    );

    html.push(teamList
        .filter(teamList => teamList.getRole() === "Engineer")
        .map(engineer => teamBuilderEngineer(engineer))
    );

    html.push(teamList
        .filter(teamList => teamList.getRole() === "Intern")
        .map(intern => teamBuilderIntern(intern))
    );
console.log(html);

    return teamBuilderindex(html.join(""));
    console.log(html);
    

};

const teamBuilderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());

    return template;
};

const teamBuilderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());

    return template;
};

const teamBuilderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());

    return template;
};

const teamBuilderindex = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "index.html"), "utf8");
    const masterHTML = replacePlaceholders(template, "team", html);
    const file = path.join(__dirname, "output", "/indexOutput.html");
    fs.writeFileSync(file, masterHTML);
  };

  const replacePlaceholders = (template, replacePlaceholders, value) => {
    const pattern = new RegExp("{ " + replacePlaceholders + " }", "gm");
    return template.replace(pattern, value);
  };


module.exports = teamBuilder;








