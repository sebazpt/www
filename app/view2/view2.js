'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
  console.log('Sección Problemas');
  alert('Sección Problemas');
  

// JSZG:DESARROLLO, TEST Y PRUEBAS TECNICAS INICIO

// JSZG:DESARROLLO, TEST Y PRUEBAS TECNICAS FIN

}]);

