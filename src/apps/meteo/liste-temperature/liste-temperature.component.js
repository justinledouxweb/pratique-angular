import template from './liste-temperature.html';
import controller from './liste-temperature.controller.js';

const ListTemperatureComponent = {
  template,
  controller,
  bindings: {
    listeTemperature: '<',
  },
};

export default ListTemperatureComponent;
