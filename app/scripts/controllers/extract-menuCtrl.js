'use strict';

/**
 * @ngdoc controller
 * @name migrationApp.controller:customerExtractMenueCtrl
 * @description
 * # customerExtractMenueCtrl
 * Controller of the migrationApp
 */
 angular.module('migrationApp').controller('extract-menuCtrl', function ($scope, appStateService) {

        $scope.activeCustomer = false;
        $scope.activeCustomerAccount = '';

        $scope.init = function(){      
        
          //watch for changes to the active customer flag and set the account
          $scope.$watch(appStateService.getActiveCustomerAccount(),
                       function(val){
                        $scope.activeCustomer = true;
                        $scope.activeCustomerAccount = val;
                       }
                       );
        }

        $scope.change = function(){
        appStateService.setActiveCustomerAccount('vs131066');
          alert('clicked');
        }
      
          $scope.init();
  });
