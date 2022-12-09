const Ambito = require("../Ambito/Ambito")
const TIPO_DATO = require("../Enums/TipoDato")
const Operacion = require("../Operaciones/Operacion")

function CicloDoWhile(_instruccion,_ambito){
    var mensaje=""
    var operacion= Operacion(_instruccion.expresion,_ambito)
    if(operacion.tipo===TIPO_DATO.BOOL){
        do{
            var nuevoAmbito = new Ambito(_ambito, "doWhile")
            const Bloque = require("./Bloque")
            var ejec = Bloque(_instruccion.instrucciones, nuevoAmbito)
            mensaje += ejec.cadena
            operacion=Operacion(_instruccion.expresion,_ambito)
        }while(operacion.valor)
        return mensaje
    }
    return `Error: No es una expresion de tipo BANDERA en la condicion... Linea: ${_instruccion.linea} Columna: ${_instruccion.columna}`

}
module.exports = CicloDoWhile