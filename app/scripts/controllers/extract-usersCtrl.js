'use strict';

/**
 * @ngdoc function
 * @name migrationApp.controller:extract-usersCtrl
 * @description
 * # extract-usersCtrl
 * Controller of the migrationApp
 */
 angular.module('migrationApp').controller('extract-usersCtrl', function ($scope, appStateService, userService) {

    $scope.appStateService = appStateService;
    $scope.activeCustomer = appStateService.getActiveCustomer();
    $scope.activeCustomerAccount = appStateService.getActiveCustomerAccount();
    

        $scope.init = function(){      
          $scope.loadingState = true; //toggle waiting state
          var x = userService.get($scope.activeCustomerAccount)
                  .then(function(results){
                    $scope.users = results;
                    $scope.rowCollection = $scope.users;
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
