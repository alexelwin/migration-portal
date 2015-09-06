'use strict';

/**
 * @ngdoc overview
 * @name migrationApp
 * @description
 * # migrationApp
 *
 * Main module of the application.
 */
angular.module('migrationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'smart-table',
    'migrationApp.appSettings'
  ]);
  
angular.module('migrationApp')
.config( ['$stateProvider', '$urlRouterProvider', 'stConfig', function ($stateProvider, $urlRouterProvider, stConfig) {
    $urlRouterProvider.otherwise('/welcome');
    $stateProvider.state('exclusions', {url: '/exclusions', templateUrl: '/views/exclusions.html', controller: 'exclusionsCtrl'})
                  .state('migrated', {url: '/migrated', templateUrl: '/views/migrated.html', controller: 'migratedCtrl'})
                  .state('welcome', {url: '/welcome', templateUrl: '/views/welcome.html'})
                  .state('scope', {url: '/scope', templateUrl: '/views/scope.html'})
                  .state('extractPreview', {url: '/extractPreview', templateUrl: '/views/extract-Preview.html'})
                  .state('company', {url: '/company' , templateUrl: '/views/extract-preview-company.html'});

   //smart-table config
   stConfig.pagination.template = '/views/_pagination.html';               

  }]);        
