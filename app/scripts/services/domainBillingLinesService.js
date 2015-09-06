'use strict';

/**
 * @ngdoc factory
 * @name migrationApp.domainBillingLinesService
 * @description
 * # domainBillingLinesService
 * provide migration domain_billing_lines entity services
 */
angular.module('migrationApp')
  .factory('domainBillingLinesService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name get
    * @methodOf migrationApp.domainBillingLinesService
    * @returns {domainBillingLines}
    */
     get : function(accountNo){
      var resource = '/apiv1/domainbillinglines/' + accountNo;
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
