'use strict';

/**
 * @ngdoc function
 * @name hazopsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hazopsApp
 */
angular.module('hazopsApp')
  .controller('WelcomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
