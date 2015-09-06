'use strict';

describe('Controller: viewCtrl', function () {

  // load the controller's module
  beforeEach(module('migrationApp'));

  var viewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    viewCtrl = $controller('viewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(viewCtrl.awesomeThings.length).toBe(3);
  });
});
