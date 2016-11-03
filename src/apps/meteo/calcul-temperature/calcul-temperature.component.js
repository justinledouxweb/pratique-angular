import template from './calcul-temperature.html';
import controller from './calcul-temperature.controller.js';

const CalculTemperatureComponent = {
  template,
  controller,
  bindings: {
    listeTemperature: '<',
  },
};

export default CalculTemperatureComponent;
