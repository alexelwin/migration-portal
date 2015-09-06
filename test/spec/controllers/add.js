'use strict';

describe('Controller: addCtrl', function () {

  // load the controller's module
  beforeEach(module('migrationApp'));

  var addCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    addCtrl = $controller('addCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(addCtrl.awesomeThings.length).toBe(3);
  });
});
