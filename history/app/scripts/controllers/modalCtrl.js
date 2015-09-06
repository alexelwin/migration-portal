'use strict';
angular.module('migrationApp').controller('modalCtrl',  function($scope, $modal, $modalInstance, items ){
  var x = items; //dont need initial input data for my modal.
  x = '';
  $scope.name = '- enter your name here -';

  $scope.ok = function(){
   $modalInstance.close($scope.name);
 };
 $scope.cancel = function(){
  $modalInstance.dismiss();
};

});