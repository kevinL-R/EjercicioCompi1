const Ambito = require("../Ambito/Ambito");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operaciones/Operacion");

function SetenciaIf(_instruccion,_ambito){
    var mensaje=""
    var operacion= Operacion(_instruccion.expresion,_ambito)
    //console.log(operacion)
    if(operacion.tipo===TIPO_DATO.BOOL){
       if(operacion.valor){
            var nuevoAmbito = new Ambito(_ambito, "if")
            console.log(_ambito)
            const Bloque = require("./Bloque")
            var ejec = Bloque(_instruccion.instrucciones, nuevoAmbito)
            mensaje = ejec.cadena
       }
       return{
              cadena:mensaje
       }
    }
    return{
        cadena: `Error: No es una condicion válida para el if... Linea: ${_instruccion.linea} Columna: ${_instruccion.columna}`
    }

}
module.exports = SetenciaIf