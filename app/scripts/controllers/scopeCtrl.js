'use strict';

/**
 * @ngdoc function
 * @name migrationApp.controller:scopeCtrl
 * @description
 * # scopeCtrl
 * Controller of the migrationApp
 */
 angular.module('migrationApp').controller('scopeCtrl', function ($scope, $modal, scopeService, appStateService, sessionService) {

    
        $scope.init = function(){   
          
          $scope.loadingState = true; //toggle waiting state
          var scopeData = '';

          if(sessionService.initialized())
          {
            //already loaded scope so get it from session storage
              scopeData = sessionService.getScope();
              $scope.rowCollection = scopeData;
              $scope.displayCollection = [].concat($scope.rowCollection);
              $scope.loadingState = false;
          }
          else{
            //get scope from webservice
            var x = scopeService.list()
                    .then(function(results){
                      scopeData = results;
                      $scope.rowCollection = scopeData;
                      $scope.displayCollection = [].concat($scope.rowCollection);
                      $scope.loadingState = false;
                      sessionService.setScope(scopeData);
                    },
                    function(error){
                      alert('failed due to: ' + error);
                      $scope.loadingState = false;
                    });   
           } 

            

        }
      

        //notify of application level event.
      $scope.setActiveCustomer = function(accountNo){
          appStateService.setActiveCustomerAccount(accountNo);
      }

          $scope.init();
  });
