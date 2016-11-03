import maxFilter from './max.filter.js';

export default angular.module('max', [])
  .filter('max', maxFilter)
  .name;
