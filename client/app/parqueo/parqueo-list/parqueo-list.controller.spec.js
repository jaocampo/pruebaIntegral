'use strict';

describe('Component: ParqueoListComponent', function () {

  // load the controller's module
  beforeEach(module('paraisoCiclistaApp'));

  var ParqueoListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ParqueoListComponent = $componentController('parqueo-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
