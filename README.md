# Installation

1. Installer la version 4.4.5 de [NodeJS](https://nodejs.org/)
2. Installer [Git](http://git-scm.com)
3. Ouvrir une invite de commande avec l'option 'Exécuter en tant qu'Administarteur'.
4. Naviguer à la racine du projet 'pistard-refonte-frontend'.
5. Executer la commande `npm install -g gulp npm eslint` afin d'installer des dépendances global (il est possible que le réseau BAnQ bloque les appels SSH à Git. Il suffit donc de modifier la config Git global en executant `git config --global url."https://".insteadOf git://`)
6. Sous Windows, executer `npm install --global --production windows-build-tools` afin d'installer les outils requis et les configurations de Microsoft. (Référence : https://github.com/nodejs/node-gyp)
7. Executer `npm install` afin d'installer les dépendances locales.

*************************************************************************************

# Configuration de l'environement de développement

- Configurer l'espacement des tabs pour qu'ils aient 2 espaces plutôt que 4.
- Configurer [Eslint](http://eslint.org/) pour votre environment
  - [Installation ESLint pour Sublime](https://github.com/roadhump/SublimeLinter-eslint)
  - [Installation ESLint pour Webstorm](https://www.jetbrains.com/help/webstorm/2016.1/eslint.html)

*************************************************************************************

# Démarrer l'application en local

Il y a plusieurs applications dans le projet. Il est possible de démarrer tout les applications, ou une application à la fois.

- Démarrer tout les applications: `gulp dev-all`
- Démarrer tout les applications: `gulp dev-privees`
- Démarrer tout les applications: `gulp dev-gouvernementales`
- Démarrer tout les applications: `gulp dev-dashboard`

## Paramêtre possible
- `--uid` est un paramêtre qui nous permet de changer d'utilisateur

## Utilisateurs

Si aucun paramêtre, le user sera un user interne BAnQ.

### Utilisateurs Gouvernementals Externe

|            Nom              |                  Responsabilité                  |          Role(s)        |  Username  |  Password  |         Courriel          |
|-----------------------------|--------------------------------------------------|-------------------------|------------|------------|---------------------------|
| Nom-Soutien, Prénom-Soutien |               SOU Soutien au GDA                 |   `SOUTIEN_ORGANISME`   | `01263935` | `94620692` | Pierre.Belisle@banq.qc.ca |
|     Nom-GDA, Prénom-GDA     |    GDA Responsable de la gestion documentaire    | `RESPONSABLE_ORGANISME` | `01263936` | `47239389` | Pierre.Belisle@banq.qc.ca |
|      Nom-CC, Prénom-CC      | CC Responsable de la demande d'approbation du CC |  `ARCHIVISTE_ORGANISME` | `01263937` | `41837171` | Pierre.Belisle@banq.qc.ca |

### Utilisateurs internes

|             Nom              |         Role(s)         |        Username      |       Password       |               Courriel                |
|------------------------------|-------------------------|----------------------|----------------------|---------------------------------------|
| Administrateur, Pistard      | `ADMIN_SYSTEME`         | `pistard_admin`      | `pistard_admin`      | test.pistard.admin@banq.qc.ca         |
|                              | `ARCHIVISTE_ORGANISME`  |                      |                      |                                       |
|                              | `RESPONSABLE_ORGANISME` |                      |                      |                                       |
|                              | `SOUTIEN_ORGANISME`     |                      |                      |                                       |
|                              |                         |                      |                      |                                       |
| Pilote, Pistard              | `PILOTE`                | `pistard_pilote`     | `pistard_pilote`     | test.pistard.pilote@banq.qc.ca        |
|                              | `ARCHIVISTE_ORGANISME`  |                      |                      |                                       |
|                              | `RESPONSABLE_ORGANISME` |                      |                      |                                       |
|                              | `SOUTIEN_ORGANISME`     |                      |                      |                                       |
|                              |                         |                      |                      |                                       |
| Professionnel, Pistard       | `PROFESSIONNEL`         | `pistard_pro`        | `pistard_pro`        | test.pistard.professionnel@banq.qc.ca |
|                              | `ARCHIVISTE_ORGANISME`  |                      |                      |                                       |
|                              | `RESPONSABLE_ORGANISME` |                      |                      |                                       |
|                              | `SOUTIEN_ORGANISME`     |                      |                      |                                       |
|                              |                         |                      |                      |                                       |
| Technicien, Pistard          | `TECHNICIEN`            | `pistard_tech`       | `pistard_tech`       | test.pistard.tech@banq.qc.ca          |
|                              | `ARCHIVISTE_ORGANISME`  |                      |                      |                                       |
|                              | `RESPONSABLE_ORGANISME` |                      |                      |                                       |
|                              | `SOUTIEN_ORGANISME`     |                      |                      |                                       |
|                              |                         |                      |                      |                                       |
| Coordonateur, Pistard        | `COORDONNATEUR`         | `pistard_coor`       | `pistard_coor`       | test.pistard.coordonateur@banq.qc.ca  |
|                              | `ARCHIVISTE_ORGANISME`  |                      |                      |                                       |
|                              | `RESPONSABLE_ORGANISME` |                      |                      |                                       |
|                              | `SOUTIEN_ORGANISME`     |                      |                      |                                       |
|                              |                         |                      |                      |                                       |
| Directeur du comité, Pistard | `DIRECTEUR_COMITE`      | `pistard_dir_comite` | `pistard_dir_comite` | test.pistard.dir_comite@banq.qc.ca    |
|                              | `ARCHIVISTE_ORGANISME`  |                      |                      |                                       |
|                              | `RESPONSABLE_ORGANISME` |                      |                      |                                       |
|                              | `SOUTIEN_ORGANISME`     |                      |                      |                                       |

*************************************************************************************

# Faire un build de l'application

Executer l'une des commandes suivantes:

- `gulp build --env dev`
- `gulp build --env test`
- `gulp build --env prod`

## Executer les tests unitaires et la couverture de code

Executer la commande `gulp unit`. Les tests unitaires sont aussi executé dans la tâche `gulp dev`.

Afin de voir la couverture de code, ouvrer le fichier "coverage/PhantomJS/index.js" dans Chrome.

## Executer les test E2E

Executer la commande `gulp protractor`

## Executer la création de la documentation

Executer la commande `gulp ngdocs` afin de générer les fichiers de documentation dans le répertoir "documentation".

Executer la commande `gulp ngdocs-server` afin de démarer un serveur local pour consommer la documenation sur `http://localhost:8888`

*************************************************************************************

# Meilleur pratique Angular

Nous devrions faire notre prossible pour écrir notre JavaScript et Angular selon les meilleurs pratique de [John Papa](https://johnpapa.net/) (un expert web chez Google).

Voici le guide à respecter: [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

Voici le guide à respecter en JavaScript ES6: [Angular 1.x styleguide (ES2015)](https://github.com/toddmotto/angular-styleguide)

*************************************************************************************

# Styleguide JavaScript

Tout les fichiers Javascript doivent être "linté" par ESLint. ESlint ce base sur les règles de style de [Airbnb/legacy](https://github.com/airbnb/javascript/tree/master/es5) avec quelque exception configuré dans le fichier `.eslintrc` soit:

- L'indentation de 2 espaces
- La permission de définir une fonction après la ligne où elle est appelé
- La permission d'avoir des espace vide sur une ligne vide
- La longeur maximum d'une ligne à 80 charactère (ignore les URL)
- La restriction de mettre un `console.error()` ou `console.warn()` à l'exception du `console.log()`
- La préférence sur les "Template Literals" plutôt que la concaténisation
- La permission d'utiliser les loop `for ... in`.

*************************************************************************************

# Styleguide SCSS

Tout le SCSS doit suivre le style suivant:

- [BEM](http://getbem.com/introduction/)
- [SMACSS](https://smacss.com/)

*************************************************************************************

# Documentation ng-docs

Tout les fichiers devraient être documenté avec la syntax de ng-docs.

[Documentation](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation)

*************************************************************************************

# Déploiement

[Déploiement du back-end et du front-end](http://wiki.banq.qc.ca/confluence/pages/viewpage.action?pageId=10947839).