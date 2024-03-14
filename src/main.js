//Se importan las clases
import { Cliente } from "./Cliente.js";
import { Impuestos } from "./Impuestos.js";



// let impuestos = new Impuestos(40000, 10000)
// let cliente1 = new Cliente('Pedro Pica Piedra', impuestos);

let cliente1 = new Cliente("Pedro Pica Piedra", new Impuestos(40000, 10000));

//Probando que solo reciba datos tipo number
let cliente2 = new Cliente('María Piedra', new Impuestos ('sasa', 20000))
let cliente3 = new Cliente('Rosa Rosal', new Impuestos (80000, 10000))
let cliente4 = new Cliente('Juancho Gil', new Impuestos (35500, 20000))
let cliente5 = new Cliente('Mañungo Gonzales', new Impuestos (12000, 500))
let cliente6 = new Cliente('Chino Ríos', new Impuestos (400000, 100000))

console.log(`El/la cliente ${cliente1.nombre} tiene adeudado $ ${cliente1.calcularImpuesto()} en impuestos.`);
console.log(`El/la cliente ${cliente2.nombre} tiene adeudado $ ${cliente2.calcularImpuesto()} en impuestos.`);
console.log(`El/la cliente ${cliente3.nombre} tiene adeudado $ ${cliente3.calcularImpuesto()} en impuestos.`);
console.log(`El/la cliente ${cliente4.nombre} tiene adeudado $ ${cliente4.calcularImpuesto()} en impuestos.`);
console.log(`El/la cliente ${cliente5.nombre} tiene adeudado $ ${cliente5.calcularImpuesto()} en impuestos.`);
console.log(`El/la cliente ${cliente6.nombre} tiene adeudado $ ${cliente6.calcularImpuesto()} en impuestos.`);

//Cambiando los impuestos, deducciones y nombre a impuestosClienteX
let clienteX = new Cliente('Cliente X', new Impuestos (200000, 90000)) ;
clienteX.montoBrutoAnual = 850000;
clienteX.deducciones = 200000;
clienteX.nombre = ('Cliente Y')

console.log(`El nuevo monto bruto anual es $:${clienteX.montoBrutoAnual}`);
console.log(`Las nuevas deducciones son $:${clienteX.deducciones}`);
console.log(`El nuevo nombre del cliente es: ${clienteX.nombre}`)


