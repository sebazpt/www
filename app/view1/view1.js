'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller("View1Ctrl", function($scope) {
  console.log('Controlador Sección Desarrollo');
  
  //$scope.name = "";
  $scope.cantidadAccesos = '001';
  $scope.mostrarNombre = function(){
    if($scope.nombre!==undefined){
      alert('Bienvenido! ' + $scope.nombre);
      console.log('Nombre: ', $scope.nombre)
    }else{
      alert('Debes ingresar algún nombre');
    }
  }

});

