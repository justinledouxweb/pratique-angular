function temperatureConfig($routeProvider) {
  $routeProvider
    .when('/temperature', {
      template: '<temperature></temperature>',
    });
}

temperatureConfig.$inject = [
  '$routeProvider',
];

export default temperatureConfig;
