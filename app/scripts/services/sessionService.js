'use strict';

/**
 * @ngdoc factory
 * @name migrationApp.sessionService
 * @description
 * # companyService
 * provide migration company entity services
 */
angular.module('migrationApp')
  .factory('sessionService', function () {
    return {

    /**
    * @ngdoc method
    * @name isInitialized
    * @methodOf migrationApp.sessionService
    * @returns {bool}
    */
     initialized : function(){
      if (typeof sessionStorage.migrationScope == 'undefined')
      {
        return false;
      }
      else{ return true; }
      },

    /**
    * @ngdoc method
    * @name setScope
    * @methodOf migrationApp.sessionService
    * @returns {}
    */
      setScope : function( json ){
        var raw = JSON.stringify(json);
        window.sessionStorage.setItem('migrationScope', raw);
      },

      getScope : function(){
        var raw = window.sessionStorage.getItem('migrationScope');
        var json = JSON.parse(raw);
        return json;
      }
     }
    }


  );
