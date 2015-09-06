'use strict';

angular.module('migrationApp')
.config( ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/view');
    $stateProvider.state('view', {url: '/view', templateUrl: '/views/view.html'})
                  .state('add', {url: '/add', templateUrl: '/views/add.html'});
  }]);        