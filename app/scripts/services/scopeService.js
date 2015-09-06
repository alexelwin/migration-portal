'use strict';

/**
 * @ngdoc factory
 * @name migrationApp.scopeService
 * @description
 * # scopeService
 * provide migration exclusion entity services
 */
angular.module('migrationApp')
  .factory('scopeService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name list
    * @methodOf migrationApp.scopeService
    * @returns {list of migration scope}
    */
     list : function(){
      var resource = '/apiv1/scope/customerSummary';
      var deferred = $q.defer();

      //call service
      $http({ method: 'GET',
              url: resource })
      .success( function(data, status, headers, config){
        deferred.resolve(data);
       })
      .error( function(data, status, headers, config){
         deferred.reject();
       });
      
      //return asynch results
      return deferred.promise;
     },

      /**
    * @ngdoc method
    * @name Find
    * @methodOf migrationApp.scopeService
    * @returns {list of migration scope matching criteria}
    */
     find: function(accountNo){
      var resource = "/apiv1/scope/find/" + accountNo;
      var deferred = $q.defer();

      //call service
      $http({ method: 'GET',
              url: resource })
      .success( function(data, status, headers, config){
        deferred.resolve(data);
       })
      .error( function(data, status, headers, config){
         deferred.reject();
       });
      
      //return asynch results
      return deferred.promise;

     }

     


    }
  });
