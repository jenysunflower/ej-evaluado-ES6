"use strict";

var _Cliente = require("./Cliente.js");
var _Impuestos = require("./Impuestos.js");
//Se importan las clases

// let impuestos = new Impuestos(40000, 10000)
// let cliente1 = new Cliente('Pedro Pica Piedra', impuestos);

var cliente1 = new _Cliente.Cliente("Pedro Pica Piedra", new _Impuestos.Impuestos(40000, 10000));

//Probando que solo reciba datos tipo number
var cliente2 = new _Cliente.Cliente('María Piedra', new _Impuestos.Impuestos('sasa', 20000));
var cliente3 = new _Cliente.Cliente('Rosa Rosal', new _Impuestos.Impuestos(80000, 10000));
var cliente4 = new _Cliente.Cliente('Juancho Gil', new _Impuestos.Impuestos(35500, 20000));
var cliente5 = new _Cliente.Cliente('Mañungo Gonzales', new _Impuestos.Impuestos(12000, 500));
var cliente6 = new _Cliente.Cliente('Chino Ríos', new _Impuestos.Impuestos(400000, 100000));
console.log("El/la cliente ".concat(cliente1.nombre, " tiene adeudado $ ").concat(cliente1.calcularImpuesto(), " en impuestos."));
console.log("El/la cliente ".concat(cliente2.nombre, " tiene adeudado $ ").concat(cliente2.calcularImpuesto(), " en impuestos."));
console.log("El/la cliente ".concat(cliente3.nombre, " tiene adeudado $ ").concat(cliente3.calcularImpuesto(), " en impuestos."));
console.log("El/la cliente ".concat(cliente4.nombre, " tiene adeudado $ ").concat(cliente4.calcularImpuesto(), " en impuestos."));
console.log("El/la cliente ".concat(cliente5.nombre, " tiene adeudado $ ").concat(cliente5.calcularImpuesto(), " en impuestos."));
console.log("El/la cliente ".concat(cliente6.nombre, " tiene adeudado $ ").concat(cliente6.calcularImpuesto(), " en impuestos."));

//Cambiando los impuestos, deducciones y nombre a impuestosClienteX
var clienteX = new _Cliente.Cliente('Cliente X', new _Impuestos.Impuestos(200000, 90000));
clienteX.montoBrutoAnual = 850000;
clienteX.deducciones = 200000;
clienteX.nombre = 'Cliente Y';
console.log("El nuevo monto bruto anual es $:".concat(clienteX.montoBrutoAnual));
console.log("Las nuevas deducciones son $:".concat(clienteX.deducciones));
console.log("El nuevo nombre del cliente es: ".concat(clienteX.nombre));