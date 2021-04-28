***
Création d'une architecture microservices
***


# Services Back

## Service Token
Dispose du liste d'utilisateurs, harcoded ou bien stockés en base de données.
Expose 2 points d'accès (endpoints):

- 1 endpoint permettant à un utilisateur d'obtenir un token
La requête vers ce endpoint présentera un corps (body) contenant un couple email/mot de passe.
Si cette paire existe (harcoded ou en base) un token est renvoyé au client.
Nature du token: JWT, random, hash, etc. au choix.

- l endpoint permettant de vérifier un token
La requête vers ce endpoint sera faite par le service student afin de vérifier que le token
présenté par le client utilisant cette api existe.


## Service Student
Dispose d'une liste d'étudiants stockés en base.
Expose au moins les 2 endpoints suivants:
- GET /student ; renvoie la liste des étudiants
- GET /student/id ; renvoie les données d'un étudiant
Le service donnera accès à ce deuxième endpoint uniquement si le client présente un token
valable. Le client devra donc présenter dans les headers de sa requête le token que
le service token lui aura fourni. Serive Student enverra une requête aurpès de Service Token
pour vérifier l'existence du token


# Application Front: SPA
- un formulaire d'authentification visant à obtenir un token auprès du service d'authentification
- une zone d'affichage des étudiants renvoyés par le service Student
- une zone d'affichage du détail d'un étudiant renvoyé par le service Student
L'app front pourra être servie statiquement par un module nodejs tel que "serve" (https://www.npmjs.com/package/serve)