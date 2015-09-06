'use strict';

/**
 * @ngdoc function
 * @name migrationApp.controller:scopeFindCtrl
 * @description
 * # scopeFindCtrl
 * Controller of the migrationApp
 */
 angular.module('migrationApp').controller('scopeFindCtrl', function ($scope, appStateService, scopeService, $modalInstance, items) {

    //$scope.activeCustomer = appStateService.getActiveCustomer();
    //$scope.activeCustomerAccount = appStateService.getActiveCustomerAccount();
        $scope.searchText = '';
        $scope.init = function(){      
          $scope.loadingState = false; //toggle waiting state
        }

        /**
         * @ngdoc method
         * @name find
         * @methodOf migrationApp.scopeFindCtrl
         * @description
         * populate search results
         *
         * @param {string} vs number
         */
        $scope.find = function(accountNo){
          $scope.loadingState = true;
          var x = scopeService.find(accountNo)
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

       
       //Set the currently active account
        $scope.go = function( accountNo){

          appStateService.setActiveCustomerAccount(accountNo);
          appStateService.setActiveCustomer = true;
        }
      
      //Close modal
      $scope.close = function(){
        $modalInstance.dismiss('cancel');
      }

          $scope.init();
  });
