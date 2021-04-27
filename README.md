# architecture
## Design pattern
_ MVC (Model, view, controller) Permet d'accélérer la conception d'application ou site web
### En PHP
    Symfony, Laravel, Zend
### En JAVA
    Spring
### C#
    ASP.NET, ASP.NET Core, Blazor
### Python
    Django
### Ruby
    RubyOnRails
### NodeJs
    Express, Nest, Sailsjs

# Architecture client/serveur
client HTTP <--> Serveur HTTP  
client SQL <--> Serveur SQL  
client Teams <--> Serveur Teams (serveur SQL)  

# Création projet

## Vérifier version node: 
    node --version 

## Vérifier version npm:
    npm --version

## Mise en place d'un projet
_ Création d'un dossier 3tiers pour créer à l'interieur un projet 3tiers et se rendre dedans.  

    npm init -y  

    (-y: pour repondre oui a chaques questions qui vont etre posées) -> créé un fichier package.json  

    npm i express  

    (i: install, express: mini framework) -> installe node_module, fichier package-lock.json
_ Créé un fichier index.js dans le dossier 3tiers

Pour tester, dans le index.js, faire un console.log("Bonjour")  
Pour lancer un exec :  

    node <"nom de fichier + ext">  
    -> Renvoie en console: Bonjour

Mettre en place un serveur avec express:  

    const express = require("express")  
    au début du fichier  

express: Fonction express

    const app = express()
app est un objet contenant des méthodes disponible pour créer des routes, des listeners...

    app.get("/", (req, res) => {

    })  
app.get: Mise en place d'une route qui exécutera une callback lors de son appel
res et req sont gérer par express
__Voir le fichier pour d'autres exemples.__

## Structurer l'application pour les vue.
_ Ajouter un dossier templates   
_ Y créer un fichier html  

Utilisation de app.render pour renvoyer une vue. Pour cela il faut créer un templating avec un moteur de rendue. Sans cela, on utilise un fileSystem "fs" c'est un module natif de nodeJs
fs renvoie un Buffer, pour le convertir en chaine de caractère, il faut lui appliquer la méthode toString()

__Pour éviter de fermer le serveur pour le relancer afin de prendre en compte les modifs coté serveur on peut se créer un fichier lab.js pour voir le résultat en console ou utiliser nodemon.__

## Créer des readBinding

*Voir le fichier html test2.html pour mieux comprendre*  
Définir une façon de binder une valeur à une expression. Par exemple: [[ title ]] 

## Utiliser des template Engine
*Lien utile* -> https://expressjs.com/fr/guide/using-template-engines.html  
-> https://pugjs.org/language

### Installer le moteur pug dans le dossier 3tiers  

    npm i pug  

Pour que pug retrouve les templates, il faut créer un dossier "views" au lieu du dossier "Templates". Pug ira chercher directement dans ce dossier.
Pour l'utiliser, dans le index.js, ajouter un set à l'objet app, qui appelera pug. Lors de vos render indiquez en premier argument le nom de votre modele de template par exemple:  

    res.render("test1", {})  

ou si votre vue se trouve dans un sous dossier de views:   

    res.render("students/test1", {})  
    
## Création des controller
_ Créez un dossier controllers  
A l'interieur de ce dossier, y créer un fichier StudentController.js.  
Dans ce fichier, nous retrouverons tous nos controllers qui serviront à définir les datas à récupérer et le choix de la vue à transmettre à l'utilisateur.  
J'explique un peu plus bas le fonctionnement dans la partie ORM.  

## Base de donnée   

### Installer la dépendance mysql
*Lien utile* -> https://npmjs.com/package/mysql  

    npm i mysql    
  
Créer un fichier dans 3tiers appellé lab2.js par exemple.  
A l'intérieur de ce fichier on va require mysql:  

    const mysql = require("mysql")  

__*Voir le fichier lab2.js pour plus de détails*__  

Création d'une variable de connexion:  

    var connection = mysql.createConnection([])  

Indiquer dans le tableau les mêmes informations que dans le fichier lab2.js
Utiliser la variable connection pour se connecter avec la méthode connect(). A l'interieur de cet appel de méthode, il est possible de loguer "Connecté" pour s'assurer que la connexion ait été établie.  
Maintenant que c'est fonctionnel, nous pouvons séparer les fichiers.  

_ Créer un dossier config  
_ Y inclure un fichier database.js qui contiendra les informations de connection  

Nous pouvons désormais utiliser cette connection directement dans le fichier StudentController.js

## Base de donnée avec ORM sequelize   

*lien utile* -> https://sequelize.org/  

Sequelize est un ORM Node.js pour Postgres, MySql, MariaDb SQLite et Microsoft SQL Server.  
Pour son installation:  

    npm install sequelize  

Il faut que le pilote mysql2 soit installé pour fonctionner avec sequelize.  

    npm i mysql2  

Créer un dossier models qui contiendra les modèles à utiliser pour nos students. Y créer un fichier Student.js.  
Dans ce fichier, on importe Sequelize qui nous servira d'instancier un objet sequelize pour la relation avec la tale student en bdd.  

    const { Sequelize } = require('sequelize');  

    const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "127.0.0.1",
    database: 'archi',
    username: user,
    password: password,
    port: 3306
    });  

Pour définir notre objet student, nous utilisons la méthode define de notre objet sequelize:  

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

Le dernier paramètre "tableName" est à indiquer si l'on souhaite utiliser une table existante. Pour appeller notre table avec le même nom que notre objet student, il faut remplacer tableName par "freezeTableName: true".  
Exporter notre modèle ainsi que sequelize afin de l'utiliser dans nos controllers.  

Dans le fichier StudentController, importer le modèle Student.  

    const { Student } = require("../models/Student");  

Désormais notre modèle sequelize dispose de méthode servant à sélectionner les datas souhaitées en bdd. (findAll, findByPk, findOne, findOrCreate...)

Exemple pour mon controller ORMStudentById:  

    const ORMStudentById = (req, res) => {
        var error
        const student = Student.findByPk(req.params.id).then(student => {
            if(student) {
                res.render("student/show", {student, error})
            } else {
                error = "Désolé cet élève est inconu(e)"
                res.render("student/show", {error})
            }
        })
    }  


----------------------------------------------------------

# 2eme partie  

Utilisation d'un framework MVC, sailsjs
SE DEPLACER A LA RACINE DU PROJET, A LA MEME HAUTEUR QUE LE DOSSIER 3tiers

Installation de sailsjs:  

    npm install sails -g  

_ -g pour l'installation en global  

Création d'un projet avec sailsjs  

    sails new studentApi  

Se rendre dans le nouveau dossier créé.  
Pour lancer un serveur:  

    sails lift  

Pour générer un controller:  

    sails generate controller <nomDuController>  

Permet de créer un controller siimple et vide.  

Pour générer un controller un peu plus riche, il faut lui ajouter une action dna sla commande:  

    sails generate controller <nomDuController> index  

Pour créer des routes, se rendre dans le fichier:  

    config/routes.js  

A l'intérieur de se fichier on peut créer nos routes, reliée ou non a des controllers.  

Création de model:  

    sails generate model <nomDeModel>  









