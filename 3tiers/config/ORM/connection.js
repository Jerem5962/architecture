const { Sequelize } = require('sequelize');
const log = require("../../data/data.json");

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "localhost",
    database: 'archi',
    username: "jerem",
    password: "pass",
    port: 3306
});

module.exports = sequelize