'use strict';

/**
 * @ngdoc service
 * @name migrationApp.appStateService
 * @description
 * # appStateService
 * Factory in the migrationApp.
 */
angular.module('migrationApp')
  .factory('appStateService', function () { 
   
   //initial states
   var _viewStates = { visited: {migrated: false, exclusions: false}};
   var _activeCustomer = false;
   var _activeCustomerAccount = '';
   return {
      
      viewStates: function(){
        return _viewStates;         
        },

      getActiveCustomer: function(){
        //return _activeCustomer
        return true; //HARDCODED ****REPLACE THIS******s
      },

      setActiveCustomer: function(state){
        _activeCustomer = state;
      },

      getActiveCustomerAccount: function(){
       return _activeCustomerAccount;
       
      },

      setActiveCustomerAccount: function(accountNo){
       _activeCustomerAccount = accountNo;
       _activeCustomer = true;
       
      }
   }


  });
