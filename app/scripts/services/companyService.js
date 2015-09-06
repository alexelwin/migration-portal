'use strict';

/**
 * @ngdoc factory
 * @name migrationApp.companyService
 * @description
 * # companyService
 * provide migration company entity services
 */
angular.module('migrationApp')
  .factory('companyService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name get
    * @methodOf migrationApp.copmanyService
    * @returns {copmany}
    */
     get : function(accountNo){
      var resource = '/apiv1/company/' + accountNo;
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
