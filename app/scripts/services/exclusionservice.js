'use strict';

/**
 * @ngdoc factory
 * @name migrationApp.exclusionService
 * @description
 * # exclusionService
 * provide migration exclusion entity services
 */
angular.module('migrationApp')
  .factory('exclusionService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name list
    * @methodOf migrationApp.exclusionService
    * @returns {list of all migration exclusions}
    */
     listCustomerSummary : function(){
      var resource = '/apiv1/exclusion/customerSummary';
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
