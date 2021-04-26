const fs = require("fs");

var view = fs.readFileSync("templates/test2.html");
var title = "test 2";
var viewStr = view.toString();

// Simulation de template Engine: recherche en substitution
// Utiliser une expression réguliere pour faire un replace all
var viewTitle = viewStr.replace("[[ title ]]", title);

console.log(viewTitle);