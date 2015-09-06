'use strict';

/**
 * @ngdoc function
 * @name migrationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the migrationApp
 */
 angular.module('migrationApp').controller('viewCtrl', function ($scope, $modal) {
    $scope.hello = 'Hey this is the main view';
    $scope.items = [];
    $scope.userInput = '';
    $scope.open = function(){
      var modalInstance = $modal.open({
          animation: true,
          templateUrl: '/views/_modal.html',
          controller: 'modalCtrl',
          size: 'sm',
          resolve: {
           items: function(){
            return $scope.items;
           }
          }
       });
   modalInstance.result.then(function(userInput){
    $scope.userInput = userInput;
   });

   

    };
  });
