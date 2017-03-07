angular.module('app', ['ngRoute', 'app.directives', 'app.controllers', 'ngCookies']);

angular.module('app', ['app.controllers', 'ngRoute']).config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true});
        $routeProvider

    .when("/",
    {
      templateUrl   : "templates/home.tpl.htm",
      controller    : "mainController"
    })
    .otherwise({templateUrl: 'templates/static/404.tpl.htm'});

}).config(function ($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  $httpProvider.defaults.useXDomain = true;


});
