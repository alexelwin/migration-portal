'use strict';

/**
 * @ngdoc factory
 * @name migrationApp.migratedService
 * @description
 * # migratedService
 * provide nrg_migrated entity services
 */
angular.module('migrationApp')
  .factory('migratedService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name list
    * @methodOf migrationApp.migratedService
    * @returns {list of all summarized customers and date they were migrated}
    */
     listCustomerSummary : function(){
      var resource = '/apiv1/migrated/customerSummary';
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
