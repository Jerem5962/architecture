const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory');


var Student = sequelize.define("student", {
    name: {
        type: DataTypes.TEXT,
        get() {
            const name = this.getDataValue(name);
            return name ? name : null
        }
    },
    age: {
        type: DataTypes.INTEGER,
        get() {
            const age = this.getDataValue(age)
            return age ? age : null
        }
    }
}, {
    tableName: "student"
});
sequelize.models.Student
module.exports = Student