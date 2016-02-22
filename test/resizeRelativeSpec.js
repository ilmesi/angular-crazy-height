describe("resize elements according to another object", function() {
  
  var wrapperElm, scope;

  beforeEach(module('crazy-resize'));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    wrapperElm = angular.element(
      '<div id="big-daddy" style="height: 600px">' +
        '<div resize-related="#big-daddy" resize-height="0.5"></div>' +
      '</div>');
    wrapperElm = $compile(wrapperElm)(scope);
    scope.$digest();
  }));

  it("resize div as the half of the parent", function() {
    // Must be 600 * 0.5
    $(window).trigger('resize');
    // FIXME: not working, angular.element is not finding parent
    // inside directive link.
    expect(wrapperElm.find('div').height()).toEqual(300);
  });

});