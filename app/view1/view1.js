'use strict';
console.log('Inicio Prueba Desarrollo 2020');


angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  console.log('Sección Desarrollo');
  const cantidadPreguntas = '9';  
  console.log('Cantidad de Preguntas', cantidadPreguntas);

}]);

