const { Student } = require("../models/Student");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "127.0.0.1",
    database: 'archi',
    username: "jerem",
    password: "pass",
    port: 3306
});

(() => {console.log("hello");})() // IIFE, methode anonyme qui s'execute elle meme

try {
    sequelize.authenticate()
    console.log("connection réussie ! ");
} catch(error) {
    console.error("echec connection: ", error);
}

