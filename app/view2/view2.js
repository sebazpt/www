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

/*
SECCIÓN PROBLEMAS
- Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
- Se debe programar un algoritmo para cada método y que este retorne lo requerido.
- Debe usar nombres explicativos para sus variables.
- Usar sintaxis ES6.
*/

// 0 Arreglo con los ids de clientes
// 1 Arreglo con los ids de clientes ordenados por rut
// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
// 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
// 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
// 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
// 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
// 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
// 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado. 
// Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.

// Impresión de soluciones. No modificar.
console.log('Pregunta 0');
function listClientsIds(){
  let respuesta = 'Arreglo con los ids de clientes';
  return respuesta;
};
console.log(listClientsIds());


console.log('Pregunta 1');
function listClientsIdsSortByTaxNumber(){
  let respuesta = 'Arreglo con los ids de clientes ordenados por rut';
  return respuesta;
};
console.log(listClientsIdsSortByTaxNumber());


console.log('Pregunta 2');
function sortClientsTotalBalances(){
  let respuesta = 'Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.';
  return respuesta;
};
console.log(sortClientsTotalBalances());


console.log('Pregunta 3');
function banksClientsTaxNumbers(){
  let respuesta = 'Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.';
  return respuesta;
};
console.log(banksClientsTaxNumbers());


console.log('Pregunta 4');
function richClientsBalances(){
  let respuesta = 'Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER';
  return respuesta;
};
console.log(richClientsBalances());


console.log('Pregunta 5');
function banksRankingByTotalBalance(){
  let respuesta = 'Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.';
  return respuesta;
};
console.log(banksRankingByTotalBalance());


console.log('Pregunta 6');
function banksFidelity(){
  let respuesta = 'Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.';
  return respuesta;
};
console.log(banksFidelity());


console.log('Pregunta 7');
function banksPoorClients(){
  let respuesta = 'Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.';
  return respuesta;
};
console.log(banksPoorClients());


console.log('Pregunta 8');
function newClientRanking(){
  let respuesta = 'Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado. ';
  return respuesta;
};
console.log(newClientRanking());


// JSZG:DESARROLLO, TEST Y PRUEBAS TECNICAS FIN

}]);



