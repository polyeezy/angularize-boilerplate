// Creates new module
angular.module('app', ['app.factories', 'app.directives', 'app.controllers', 'ngRoute']);

// configure module
angular.module('app').config(function($routeProvider) {

    $routeProvider
    .when("/",
    {
      templateUrl   : "templates/home.tpl.htm",
      controller    : 'mainController',
      meta          : {
          title : "Title",
          desc  : "Desc"
      }
    })
    .otherwise({templateUrl: 'templates/static/404.tpl.htm'});

}).config(function ($httpProvider) {
  $httpProvider.defaults.withCredentials = false;
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  $httpProvider.defaults.useXDomain = true;

}).run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.meta.title;
        document.description = $route.current.meta.desc;
    });
}]);
