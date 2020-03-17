'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope) {

  $scope.mostrarCabeceras = false;

  const clients = [{
    id: 1,
    taxNumber: '86620855',
    name: 'HECTOR ACUÑA BOLAÑOS'
  },
  {
    id: 2,
    taxNumber: '7317855K',
    name: 'JESUS RODRIGUEZ ALVAREZ'
  },
  {
    id: 3,
    taxNumber: '73826497',
    name: 'ANDRES NADAL MOLINA'
  },
  {
    id: 4,
    taxNumber: '88587715',
    name: 'SALVADOR ARNEDO MANRIQUEZ'
  },
  {
    id: 5,
    taxNumber: '94020190',
    name: 'VICTOR MANUEL ROJAS LUCAS'
  },
  {
    id: 6,
    taxNumber: '99804238',
    name: 'MOHAMED FERRE SAMPER'
  },
  {
    id: 7,
    taxNumber: '399804238',
    name: 'MOHAMED FERRE SAMPER'
  }
  ];
  const accounts = [{
    clientId: 6,
    bankId: 1,
    balance: 15000
  },
  {
    clientId: 1,
    bankId: 3,
    balance: 18000
  },
  {
    clientId: 5,
    bankId: 3,
    balance: 135000
  },
  {
    clientId: 2,
    bankId: 2,
    balance: 5600
  },
  {
    clientId: 3,
    bankId: 1,
    balance: 23000
  },
  {
    clientId: 5,
    bankId: 2,
    balance: 15000
  },
  {
    clientId: 3,
    bankId: 3,
    balance: 45900
  },
  {
    clientId: 2,
    bankId: 3,
    balance: 19000
  },
  {
    clientId: 4,
    bankId: 3,
    balance: 51000
  },
  {
    clientId: 5,
    bankId: 1,
    balance: 89000
  },
  {
    clientId: 1,
    bankId: 2,
    balance: 1600
  },
  {
    clientId: 5,
    bankId: 3,
    balance: 37500
  },
  {
    clientId: 6,
    bankId: 1,
    balance: 19200
  },
  {
    clientId: 2,
    bankId: 3,
    balance: 10000
  },
  {
    clientId: 3,
    bankId: 2,
    balance: 5400
  },
  {
    clientId: 3,
    bankId: 1,
    balance: 9000
  },
  {
    clientId: 4,
    bankId: 3,
    balance: 13500
  },
  {
    clientId: 2,
    bankId: 1,
    balance: 38200
  },
  {
    clientId: 5,
    bankId: 2,
    balance: 17000
  },
  {
    clientId: 1,
    bankId: 3,
    balance: 1000
  },
  {
    clientId: 5,
    bankId: 2,
    balance: 600
  },
  {
    clientId: 6,
    bankId: 1,
    balance: 16200
  },
  {
    clientId: 2,
    bankId: 2,
    balance: 10000
  }
  ]
  const banks = [{
    id: 1,
    name: 'SANTANDER'
  },
  {
    id: 2,
    name: 'CHILE'
  },
  {
    id: 3,
    name: 'ESTADO'
  }
  ];
  

  console.clear();
  console.log('Controlador Sección Problemas');
  alert('Bienvenido a Sección Problemas');
  

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
/* $scope.pregunta0 = 'Arreglo con los ids de clientes';
function listClientsIds(){
  console.clear();
  console.log('Pregunta 0');
  console.log($scope.pregunta0);
  $scope.clients = clients;
  $scope.mostrarCabeceras= true;


  const arregloClientsIds = $scope.clients.forEach(
    function (elemento, indice, array){
      console.log($scope.clients[indice].id);
     }
  );
  return arregloClientsIds;
 }

$scope.mostrarRespuesta0 = function(){
  listClientsIds();
}
 */
$scope.pregunta1 = 'Arreglo con los ids de clientes ordenados por rut';
function listClientsIdsSortByTaxNumber(){

  console.clear();
  console.log('Pregunta 1');
  console.log($scope.pregunta1);
  $scope.clients = clients;
  $scope.mostrarCabeceras= true;

  const arregloClientsIdsSortByTaxNumber =  $scope.clients.sort(function (a, b) {
    
    return (String(a.name) - (b.name))
})

  console.log(arregloClientsIdsSortByTaxNumber);

  /* const arregloClientsIdsSortByTaxNumber = $scope.clients.forEach(
    function (elemento, indice, array){
      console.log(elemento.id, elemento.name, elemento.taxNumber);
     }
  ); */
  return arregloClientsIdsSortByTaxNumber;
};

$scope.mostrarRespuesta1 = function(){
 
  listClientsIdsSortByTaxNumber();
}


/* 
function sortClientsTotalBalances(){
  console.clear();
  console.log('Pregunta 2');
  let respuesta2 = 'Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.';

  console.log($scope.pregunta2);
};
console.log(sortClientsTotalBalances());
 */

/* 
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
console.log(newClientRanking()); */


// JSZG:DESARROLLO, TEST Y PRUEBAS TECNICAS FIN

});



