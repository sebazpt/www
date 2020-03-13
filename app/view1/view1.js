'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  console.log('Prueba Desarrollo 2020');

}]);

console.log('Prueba Desarrollo 2020');

const cantidadPreguntas = '9';  
console.log('Cantidad de Preguntas', cantidadPreguntas);
