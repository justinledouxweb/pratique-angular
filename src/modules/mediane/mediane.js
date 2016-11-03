import medianeFilter from './mediane.filter.js';

export default angular.module('mediane', [])
  .filter('mediane', medianeFilter)
  .name;
