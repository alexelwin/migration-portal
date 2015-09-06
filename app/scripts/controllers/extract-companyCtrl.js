'use strict';

/**
 * @ngdoc function
 * @name migrationApp.controller:companyCtrl
 * @description
 * # companyCtrl
 * Controller of the migrationApp
 */
 angular.module('migrationApp').controller('extract-companyCtrl', function ($scope, appStateService, companyService) {

    $scope.appStateService = appStateService;
    $scope.activeCustomer = appStateService.getActiveCustomer();
    $scope.activeCustomerAccount = appStateService.getActiveCustomerAccount();
    

        $scope.init = function(){      
          $scope.loadingState = true; //toggle waiting state
          var x = companyService.get($scope.activeCustomerAccount)
                  .then(function(results){
                    $scope.company = results;
                    $scope.loadingState = false;
                  },
                  function(error){
                    alert('failed due to: ' + error);
                    $scope.loadingState = false;
                  });
        }
      
          $scope.init();

          //watch for changes to the currently active customer.
           $scope.$watch($scope.appStateService.getActiveCustomerAccount(),
                         function(newValue){
                          $scope.init();
                         });
  });
