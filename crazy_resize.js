(function() {
  'use strict';

  angular
    .module('crazy-resize', [])
    .directive('resizeHeight', resizeHeight);

  function resizeHeight($window) {

    return {
      restrict: 'A',
      link: function($scope, $element, attributes) {
        // Only percentage for now
        var resizeValue = attributes.resizeHeight;
        var related = angular.element($window);
        var relatedSelector = attributes.resizeRelated;

        // If present, we use the selector instead of $window
        if (relatedSelector != undefined) {
          related = angular.element(relatedSelector);
        }

        var changeHeight = function(event) {
          // TODO: use jQuery.height to improve total number
          console.log(related.height());
          var elementHeight = related.height();
          var currentHeight = elementHeight * parseFloat(resizeValue);
          $element.css('height', currentHeight + 'px');
        };

        related.bind('resize', changeHeight);
        changeHeight(); // when page loads 
      }
    }

  }

})();
