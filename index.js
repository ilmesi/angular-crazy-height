(function() {
  'use strict';

  angular
    .module('crazy-resize', [])
    .directive('resizeHeight', resizeHeight);

  function resizeHeight($window) {

    return function($scope, $element, attributes) {
      // Only percentage for now
      var winElement = angular.element($window);
      var resizeValue = attributes['resizeHeight'];

      var changeHeight = function(event) {
        var currentHeight = winElement[0].innerHeight * parseFloat(resizeValue);
        $element.css('height', currentHeight + 'px');
      };

      winElement.bind('resize', changeHeight);
      changeHeight(); // when page loads 
    }

  }

})();
