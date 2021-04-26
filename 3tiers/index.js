const express = require("express");
const app = express();
const fs = require("fs")

app.listen(5000, () => {
    console.log("Serveur running on port 5000...");
})

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
    //res.render("templates/test2.html")
    var view = fs.readFileSync("templates/test2.html");
    //console.log(view.toString());

    res.send(view.toString())
})

