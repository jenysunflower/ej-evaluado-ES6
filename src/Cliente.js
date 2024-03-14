
//Clase Cliente encapsulada
export class Cliente {

    constructor(nombre, impuestos){
        this._nombre = nombre;
        this._impuestos = impuestos;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    calcularImpuesto(){
        const montoTotal = ((this._impuestos.montoBrutoAnual - this._impuestos.deducciones) * 0.21);
        return montoTotal;
    }

}