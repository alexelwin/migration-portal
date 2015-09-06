'use strict';

/**
 * @ngdoc function
 * @name migrationApp.controller:migratedCtrl
 * @description
 * # migratedCtrl
 * controller for migrated entity interaction
 */
 angular.module('migrationApp').controller('migratedCtrl', function ($scope, $modal, migratedService, appStateService) {
    $scope.loadingState = false;
  
    $scope.init = function(){
      
        $scope.loadingState = true; //toggle waiting state
        var x = migratedService.listCustomerSummary()
                .then(function(results){
                  $scope.rowCollection = results;
                  $scope.displayCollection = [].concat($scope.rowCollection);
                  $scope.loadingState = false;
                },
                function(error){
                  alert('failed due to: ' + error);
                });
      }

      $scope.init();
  });
