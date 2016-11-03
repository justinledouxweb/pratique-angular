import MeteoComponent from './meteo.component.js';
import meteoConfig from './meteo.config.js';
import temperatureModule from './temperature/temperature.js';
import ajouterTemperatureModule from './ajouter-temperature/ajouter-temperature.js';
import MeteoService from './meteo.service.js';
import listeTemperatureModule from './liste-temperature/liste-temperature.js';
import calculTemperatureModule from './calcul-temperature/calcul-temperature.js';
import medianModule from '../../modules/mediane/mediane.js';
import moyenneModule from '../../modules/moyenne/moyenne.js';
import minModule from '../../modules/min/min.js';
import maxModule from '../../modules/max/max.js';

const app = angular
  .module('meteo', [
    'ngRoute',
    'ngMessages',
    temperatureModule,
    ajouterTemperatureModule,
    listeTemperatureModule,
    calculTemperatureModule,
    medianModule,
    moyenneModule,
    minModule,
    maxModule,
  ])
  .config(meteoConfig)
  .component('meteo', MeteoComponent)
  .service('meteoService', MeteoService)
  .name;

angular.bootstrap(document, [app], { strictDi: true });
