const log = require("../data.json") // Création d'un fichier de data, ne pas oublier de le mettre dans le gitignore!
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: log.user,
    password: log.password,
    database: "archi",
    port: 3306
})

module.exports = connection;