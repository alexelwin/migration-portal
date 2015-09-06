'use strict';

describe('Service: exclusionService', function () {

  // load the service's module
  beforeEach(module('migrationApp'));

  // instantiate service
  var exclusionService;
  beforeEach(inject(function (_exclusionService_) {
    exclusionService = _exclusionService_;
  }));

  it('should do something', function () {
    expect(!!exclusionService).toBe(true);
  });

});
