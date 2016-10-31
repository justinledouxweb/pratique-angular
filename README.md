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

- Démarrer tout les applications: `gulp dev`

## Executer les tests unitaires et la couverture de code

Executer la commande `gulp unit`. Les tests unitaires sont aussi executé dans la tâche `gulp dev`.

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
