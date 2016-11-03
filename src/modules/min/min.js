import minFilter from './min.filter.js';

export default angular.module('min', [])
  .filter('min', minFilter)
  .name;
