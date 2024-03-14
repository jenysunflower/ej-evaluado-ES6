//Clase Impuestos encapsulada

export class Impuestos {

    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(nuevo_monto) {
         //Type of para  que el dato sea de tipo número y se captura el error
        if (typeof nuevoMonto !== "number") {
            throw new Error("El monto bruto anual debe ser un número");
        }
        this._montoBrutoAnual = nuevo_monto
    }

    get deducciones() {

        return this._deducciones;
    }

    set deducciones(nuevas_deducciones) {
        //Type of para  que el dato sea de tipo número y se captura el error
        if (typeof nuevas_deducciones !== "number") {
            throw new Error("El monto de las deducciones debe ser un número");
        }
        this._deducciones = nuevas_deducciones;
    }

}

