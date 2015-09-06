'use strict';

/**
 * @ngdoc filter
 * @name migrationApp.filter:urlFilter
 * @description
 * # urlFilter
 * allows output to be url encoded to avoid issues with characters like slash breaking ui rendering
 */
 angular.module('migrationApp').filter('url', function () {
return function(data){
  return encodeURIComponent(data);
  }
  });
