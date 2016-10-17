angular.module('app', ['ngRoute', 'app.directives', 'app.services', 'app.controllers', 'ngCookies']);

angular.module('app', ['app.controllers', 'ngRoute']).config(function($routeProvider) {
    $routeProvider
    .when("/",
    {
      templateUrl   : "templates/home.tpl.htm",
      controller    : "mainController"
    })

    .otherwise({templateUrl: 'templates/static/404.tpl.htm'});
});
