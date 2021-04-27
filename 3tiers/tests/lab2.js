const log = require("../data.json") // Création d'un fichier de data, ne pas oublier de le mettre dans le gitignore!
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: log.user,
    password: log.password,
    database: "archi",
    port: 3306
})

connection.connect(() => {
    console.log("connexion réussie !");
});

connection.query("create table student (id smallint(6), name varchar(255))", (err, results, fields) => {
    if(err) throw err;
    console.log(results);
})

connection.end(() => {
    console.log("Déconnecté !");
})