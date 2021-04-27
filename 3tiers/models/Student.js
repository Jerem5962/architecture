const { DataTypes, Model } = require('sequelize');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "127.0.0.1",
    database: 'archi',
    username: "jerem",
    password: "pass",
    port: 3306
});

const Student = sequelize.define("student", {
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: "student"
});

module.exports = { Student, sequelize }

