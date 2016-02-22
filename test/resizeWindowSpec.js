describe("resize elements according to window", function() {
  
  var elm, scope;

  beforeEach(module('crazy-resize'));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    elm = angular.element('<div resize-height="0.5"></div>');
    elm = $compile(elm)(scope);
    scope.$digest();
  }));

  it("resize div as the half of the window", function() {
    // Set window height's to 200px
    var original = $.prototype.height;
    spyOn($.prototype, 'height').and.callFake(function() {
      if (this[0] === window)
        return 200;
      return original.apply(this);
    });
    $(window).trigger('resize');
    // Must be 200 * 0.5
    expect(elm.height()).toEqual(100);
  });

});