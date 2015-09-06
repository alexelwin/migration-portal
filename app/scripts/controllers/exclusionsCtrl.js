'use strict';

/**
 * @ngdoc function
 * @name migrationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the migrationApp
 */
 angular.module('migrationApp').controller('exclusionsCtrl', function ($scope, $modal, exclusionService, appStateService) {

    
        $scope.init = function(){      
          $scope.loadingState = true; //toggle waiting state
          var x = exclusionService.listCustomerSummary()
                  .then(function(results){
                    $scope.rowCollection = results;
                    $scope.displayCollection = [].concat($scope.rowCollection);
                    $scope.loadingState = false;
                  },
                  function(error){
                    alert('failed due to: ' + error);
                    $scope.loadingState = false;
                  });
        }   
          
        $scope.init();
        

  });
