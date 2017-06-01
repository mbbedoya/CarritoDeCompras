var appRoute = angular.module('appRoute', ['ngRoute']);

appRoute.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'home.html',
    controller  : 'productController'
  })

  .when('/admin', {
    templateUrl : 'admin.html',
    controller  : 'reportController'
  })

  .when('/shop', {
    templateUrl : 'shop.html',
    //controller  : ''
  })

  .otherwise({redirectTo: '/'});
});