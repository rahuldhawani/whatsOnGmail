'use strict';

// Declare app level module which depends on views, and components
angular.module('gmailChat', [
  'ngRoute',
  'gmailChat.view1',
  'gmailChat.view2',
  'gmailChat.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
