const Operacion = require("../Operaciones/Operacion");

function Asignacion(_instruccion,_ambito){
    const id=_instruccion.id;
    const existe= _ambito.existeSimbolo(id);
    if(existe){
        var valor=Operacion(_instruccion.expresion,_ambito)
        var simbolo=_ambito.getSimbolo(id);  
        var tipos={
            tipoSimbolo:simbolo.tipo,  
            tipoNuevoValor:valor.tipo
        }
        if(tipos.tipoSimbolo===tipos.tipoNuevoValor){ 
            simbolo.valor=valor.valor;
            _ambito.actualizar(id,simbolo);
            return null
        }else{
             
            return "No es posible asignar un valor de tipo " + tipos.tipoNuevoValor + " a la variable " + id + " que es de tipo: " + tipos.tipoSimbolo + " Linea: " + _instruccion.linea + " columna: " + _instruccion.columna;
        
        }
    }else{
        return "La variable " + id + " no existe Linea: " + _instruccion.linea + " columna: " + _instruccion.columna;

    }
}
module.exports = Asignacion