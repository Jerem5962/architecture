const { Sequelize } = require('sequelize');
const log = require("../../data.json");

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "localhost",
    database: 'archi',
    username: log.user,
    password: log.password,
    port: 3306
});

module.exports = sequelize