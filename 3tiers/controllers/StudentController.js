const connexion = require("../config/database");
const sequelize = require("../config/ORM/connection");
const Student = require("../models/Student")

//connexion.connect();

try {
    sequelize.authenticate()
    console.log('Connection établie !');
} catch (error) {
    console.error('Erreur de connection:', error);
}

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

const ORMAllStudents = (req, res) => {
    const students = Student.findAll().then(student => {
        console.log(student);
    });
    // Student.sequelize.sync().then((req,res) => {
    //     //var students = req.student
    //     console.log(req);
    // })
    console.log(Student);
    res.render("student/list2", {students})
    
}

module.exports = { list, all, allStudents, ORMAllStudents }