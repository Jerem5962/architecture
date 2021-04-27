
const { Student, sequelize } = require("../models/Student");
const students = require("../data/students.json");

(async () => {

    // Détruire la table student si elle existe
    await sequelize.query('DROP TABLE IF EXISTS student');

    await sequelize.sync();
    
    students.forEach(async (student) => {
        var result = await Student.create(student);
    })
})()