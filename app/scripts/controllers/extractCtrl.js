'use strict';

/**
 * @ngdoc controller
 * @name migrationApp.controller:extractCtrl
 * @description
 * # extractCtrl
 * Controller of the migrationApp
 */
 angular.module('migrationApp').controller('extractCtrl', function ($scope, appStateService, $window, $modal) {

       $scope.appStateService = appStateService;
       $scope.searchText = '';
       $scope.activeCustomer = appStateService.getActiveCustomer();
       $scope.activeCustomerAccount = appStateService.getActiveCustomerAccount();
    
        /**
         * @ngdoc method
         * @name init
         * @methodOf migrationApp.extractCtrl
         * @description
         * initialize controller state
         */
        $scope.init = function(){      
         
          
        } 
    

        /**
         * @ngdoc method
         * @name redirectToMrCoffee
         * @methodOf migrationApp.extractCtrl
         * @description
         * open new tab for mrcoffee pre loaded with the current active customer
         *
         * @param {string} vs number
         */
        $scope.redirectToMrCoffee = function(accountNo){
          $window.open('https://mrcoffee.webcentral.com.au/Authorised/job_add_searchby.cfm?search=' + $scope.activeCustomerAccount + '&searchby=vs', '_blank');
        }
      
       /**
         * @ngdoc method
         * @name changeActiveCustomer
         * @methodOf migrationApp.extractCtrl
         * @description
         * update controller values to reflect the currently viewed account
         */
        
          $scope.init();
  
  });
