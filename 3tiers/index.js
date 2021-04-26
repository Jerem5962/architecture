const express = require("express");
const app = express();
const fs = require("fs")
const { list, all, allStudents } = require("./controllers/StudentController")

// Setting du moteur de rendue
app.set("view engine", "pug")

app.listen(5000, () => {
    console.log("Serveur running on port 5000...");
})

// Routage
app.get("/", (req, res) => {
    res.send("Coucou")
})

app.get("/test1", (req, res) => {
    
    const {title} = req.query;
    var view = "";

    if(title) {
        view = `
            <html>
                <head>
                    <title>${title}</title>
                </head>
                <body>
                    <h1>${title}</h1>
                </body>
            </html>
        `;        
    } else {
        view = "Bad request ! ";
    }

    res.send(view)
})

app.get("/test2", (req, res) => {
    var view = fs.readFileSync("templates/test2.html");
    var {title} = req.query;
    var viewStr = view.toString();
    var viewTitle = 
    viewStr
        .replace("[[ title ]]", title)
        .replace("[[ title ]]", title);

    res.send(viewTitle);
})

app.get("/test3", (req, res) => {
    res.render("test3", {
        "title": req.query.title,
        "students": ["Noèmie", "Clémentine", "Umberto"]
    })
})

app.get("/students", (req, res) => {
    var students = list()

    res.render("student/list", {
        students
    })
})

app.get("/students/all", allStudents)
