'use strict';
angular.module('migrationApp').directive('mit-record-count', function(){

return{
 restrict: 'E',
 require: '^stTable',
 templateUrl: '/views/_mit-record-count.html',
 scope:{},
 link: function(scope,element,attr,ctrl){
  
  scope.$watch(ctrl.getFilteredCollection, function(val){
   scope.filteredRecordCount = (val || []).length ;
   });

scope.$watch(ctrl.get);

 }
}

});