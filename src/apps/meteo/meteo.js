import MeteoComponent from './meteo.component.js';
import meteoConfig from './meteo.config.js';
import temperatureModule from './temperature/temperature.js';

const app = angular
.module('meteo', [
  'ngRoute',
  temperatureModule,
])
.config(meteoConfig)
.component('meteo', MeteoComponent)
.name;

angular.bootstrap(document, [app], { strictDi: true });
