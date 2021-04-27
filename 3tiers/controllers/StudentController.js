const connexion = require("../config/database");
const sequelize = require("../config/ORM/connection");
const Student = require("../models/Student")

//connexion.connect();

try {
    sequelize.authenticate()
    
    sequelize.models.Student
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
    //sequelize.sync();
    const students = Student.findAll().then(students => {
        console.log(students);
    }); 
    res.render("student/list2", {students})
    
}

module.exports = { list, all, allStudents, ORMAllStudents }