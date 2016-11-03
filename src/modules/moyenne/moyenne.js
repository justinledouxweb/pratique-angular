import moyenneFilter from './moyenne.filter.js';

export default angular.module('moyenne', [])
  .filter('moyenne', moyenneFilter)
  .name;
