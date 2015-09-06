'use strict';

/**
 * @ngdoc function
 * @name migrationApp.controller:extract-domain-billing-linesCtrl
 * @description
 * # extract-domain-billing-linesCtrl
 * Controller of the migrationApp
 */
 angular.module('migrationApp').controller('extract-domain-billing-linesCtrl', function ($scope, appStateService, domainBillingLinesService) {

    $scope.appStateService = appStateService;
    $scope.activeCustomer = appStateService.getActiveCustomer();
    $scope.activeCustomerAccount = appStateService.getActiveCustomerAccount();
    

        $scope.init = function(){      
          $scope.loadingState = true; //toggle waiting state
          var x = domainBillingLinesService.get($scope.activeCustomerAccount)
                  .then(function(results){
                    $scope.dbl = results;
                    $scope.rowCollection = $scope.dbl;
                    $scope.displayCollection = [].concat($scope.rowCollection);
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
