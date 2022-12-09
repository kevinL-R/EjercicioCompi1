const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion")
const Asignacion = require("./Asignacion")
const Declaracion = require("./Declaracion")
const DecMetodo = require("./DecMetodo")
const Exec = require("./Exec")


function Global(_instrucciones, _ambito){
    var cadena = ""
    //1era pasada verficar que solo venga 1 exec
    var contadorExec = 0;
    for (let i = 0; i < _instrucciones.length; i++) {
        
       if(_instrucciones[i].tipo == TIPO_INSTRUCCION.EXEC){
          contadorExec++;
       }
       
    }
    if(contadorExec>1){
        return "Solo puede haber 1 exec"
    }else if(contadorExec==0){
        return "No hay exec"
    }
    // 2da pasada vamos a declarar las variables metodos funciones y asignarles su valor
    for (let i = 0; i < _instrucciones.length; i++) {
        
        if(_instrucciones[i].tipo===TIPO_INSTRUCCION.DECLARACION){
            var mensaje = Declaracion(_instrucciones[i],_ambito)
            if(mensaje!=null){
               cadena+= mensaje+ "\n"
            }
        }else if(_instrucciones[i].tipo===TIPO_INSTRUCCION.ASIGNACION){
            var mensaje = Asignacion(_instrucciones[i],_ambito)
            if(mensaje!=null){
               cadena+= mensaje+ "\n"
            }
        }else if (_instrucciones[i].tipo === TIPO_INSTRUCCION.DEC_METODO) {
            var mensaje = DecMetodo(_instrucciones[i], _ambito)
            if (mensaje != null) {
                cadena += mensaje + "\n"
            }
        }

    }
    //3ra pasada ejecutar el exec
    for (let i = 0; i < _instrucciones.length; i++) {
        
        if(_instrucciones[i].tipo===TIPO_INSTRUCCION.EXEC){
            var mensaje = Exec(_instrucciones[i],_ambito)
            //console.log(mensaje)
            if(mensaje!=null){
                cadena+= mensaje+ "\n"
        }
            break

        }

    }
    
    return cadena
}

module.exports=Global