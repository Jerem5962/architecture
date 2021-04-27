const { Student } = require("../models/Student");
const { sequelize } = require("../config/ORM/connection");

(() => {console.log("hello");})() // IIFE, methode anonyme qui s'execute elle meme

(async () => {
    await sequelize.sync();
})()

// (async () => {
//     await sequelize.sync();
//     const user = await Student.findAll();
//     console.log(user);

// })();