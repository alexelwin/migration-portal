'use strict';

/**
 * @ngdoc factory
 * @name migrationApp.domainService
 * @description
 * # domainService
 * provide migration 'domain' entity services
 */
angular.module('migrationApp')
  .factory('domainService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name get
    * @methodOf migrationApp.domainService
    * @returns {domain}
    */
     get : function(accountNo){
      var resource = '/apiv1/domain/' + accountNo;
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
