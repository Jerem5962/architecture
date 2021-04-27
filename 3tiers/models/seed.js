const { sequelize } = require("../config/ORM/connection");
const { Student } = require("../models/Student");
const students = require("../data/students.json");

(async () => {

    // Détruire la table student si elle existe
    //await sequelize.query("DROP TABLE IF EXISTS student");
    Student.sync();
    students.forEach(student => {
        Student.create(student)
    })
})()