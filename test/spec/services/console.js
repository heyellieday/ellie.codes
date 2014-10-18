'use strict';

describe('Service: console', function () {

  // load the service's module
  beforeEach(module('elliecodesApp'));

  // instantiate service
  var console;
  beforeEach(inject(function (_console_) {
    console = _console_;
  }));

  it('should do something', function () {
    expect(!!console).toBe(true);
  });

});
