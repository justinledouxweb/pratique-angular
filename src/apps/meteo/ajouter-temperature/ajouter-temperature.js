import AjouterTemperatureComponent from './ajouter-temperature.component.js';

export default angular
  .module('ajouter-temperature', [
    'ngMessages',
  ])
  .component('ajouterTemperature', AjouterTemperatureComponent)
  .name;
