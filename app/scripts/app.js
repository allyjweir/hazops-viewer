'use strict';

/**
 * @ngdoc overview
 * @name hazopsApp
 * @description
 * # hazopsApp
 *
 * Main module of the application.
 */
angular
  .module('hazopsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/table', {
        templateUrl: 'views/table.html',
        controller: 'TableCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
