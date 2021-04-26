const connexion = require("../config/database");

connexion.connect();

const list = () => {
    return [
        "Jérémy",
        "Chris",
        "Clémentine"
    ]
}

const all = (req, res) => {
    console.log(req.query);
    res.render("student/list", {students})
}

const allStudents = (req, res) => {

    connexion.query("SELECT * FROM student", (err, results, fields) => {
        //res.send("OK...")

        var students = results.map(student => student.name)
        res.render("student/list", {students})
    })
    connexion.end(() => {
        console.log("Déconnecté de la BDD!");
    })
}

module.exports = { list, all, allStudents }