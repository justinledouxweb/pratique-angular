import MeteoComponent from './meteo.component.js';
import meteoConfig from './meteo.config.js';
import temperatureModule from './temperature/temperature.js';
import ajouterTemperatureModule from './ajouter-temperature/ajouter-temperature.js';
import MeteoService from './meteo.service.js';

const app = angular
  .module('meteo', [
    'ngRoute',
    'ngMessages',
    temperatureModule,
    ajouterTemperatureModule,
  ])
  .config(meteoConfig)
  .component('meteo', MeteoComponent)
  .service('meteoService', MeteoService)
  .name;

angular.bootstrap(document, [app], { strictDi: true });
