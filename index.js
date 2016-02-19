(function() {
  'use strict';

  angular
    .module('crazy-resize')
    .directive('resize-height', resizeHeight);

  function resizeHeight($window) {

    return function($scope, $element, attributes) {
      // Only percentage for now
      var winElement = angular.element($window);
      var resizeValue = attributes['resize-height'];

      var changeHeight = function(event) {
        var currentHeight = winElement.height() * parseFloat(resizeValue);
        $element.css('height', currentHeight + 'px');
      };

      winElement.bind('resize', changeHeight);
      changeHeight(); // when page loads 
    }

  }

})();
