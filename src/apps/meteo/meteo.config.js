function appConfig($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .otherwise({
      redirectTo: '/temperature',
    });
}

appConfig.$inject = [
  '$locationProvider',
  '$routeProvider',
];

export default appConfig;
