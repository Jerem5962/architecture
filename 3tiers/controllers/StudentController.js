const connexion = require("../config/database");
const { Student } = require("../models/Student")

//connexion.connect();

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
    const students = Student.findAll().then(students => {
    res.render("student/list2", {students})
    }); 
}

const ORMStudentById = (req, res) => {
    var error
    const student = Student.findByPk(req.params.id).then(student => {
        if(student) {
            res.render("student/show", {student, error})
        } else {
            error = "Désolé cet élève est inconu(e)"
            res.render("student/show", {error})
        }
        
    })
    
}

module.exports = { list, all, allStudents, ORMAllStudents, ORMStudentById }