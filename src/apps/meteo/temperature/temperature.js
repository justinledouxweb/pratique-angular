import TemperatureComponent from './temperature.component.js';
import temperatureConfig from './temperature.config.js';

export default angular.module('temperature', [])
  .config(temperatureConfig)
  .component('temperature', TemperatureComponent)
  .name;
