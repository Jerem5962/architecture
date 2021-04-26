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

__Pour éviter de fermer le serveur pour le relancer afin de prendre en compte les modifs coté serveur on peux se créer un fichier lab.js pour voir le résultat en console.__

## Créer des readBinding

*Voir le fichier html test2.html pour mieux comprendre*  
Définir une façon de binder une valeur à une expression. Par exemple: [[ title ]] 

## Utiliser des template Engine
*Lien utile* -> expressjs.com/fr/guide/using-template-engines.html  
-> pugjs.org/language

### Installer le moteur pug dans le dossier 3tiers
    npm i pug
Pour que pug retrouve les templates, il faut créer un dossier "views" au lieu du dossier "Templates". Pg ira chercher directement dans ce dossier.
Pour l'utiliser, dans le index.js, ajouter un set à l'objet app, qui appelera pug. Lors de vos render indiquez en premier argument le nom de votre modele de template par exemple:    
    res.render("test1", {})  
ou si votre vue se trouve dans un sous dossier de views:   
    res.render("students/test1")

