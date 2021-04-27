const { DataTypes, Model } = require('sequelize');
const sequelize = require("../config/ORM/connection");

const Student = sequelize.define("student", {
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            const name = this.getDataValue(name);
            return name ? name : null
        }
    },
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            const name = this.getDataValue(name);
            return name ? name : null
        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
            const name = this.getDataValue(name);
            return name ? name : null
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        get() {
            const age = this.getDataValue(age)
            return age ? age : null
        }
    }
}, {
    tableName: "student"
});
Student.sync()

module.exports = Student

// Correction
