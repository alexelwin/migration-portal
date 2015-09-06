'use strict';

/**
 * @ngdoc factory
 * @name migrationApp.userService
 * @description
 * # userService
 * provide migration 'user' entity services
 */
angular.module('migrationApp')
  .factory('userService', function ($http,$q,$resource) {
    return {

    /**
    * @ngdoc method
    * @name get
    * @methodOf migrationApp.userService
    * @returns {user records}
    */
     get : function(accountNo){
      var resource = '/apiv1/user/' + accountNo;
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
