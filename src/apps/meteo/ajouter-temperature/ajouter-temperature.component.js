import template from './ajouter-temperature.html';
import controller from './ajouter-temperature.controller.js';

const AjouterTemperatureComponent = {
  template,
  controller,
  bindings: {
    ajouterTemperature: '&',
  },
};

export default AjouterTemperatureComponent;
