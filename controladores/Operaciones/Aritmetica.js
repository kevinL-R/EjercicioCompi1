const TIPO_DATO = require("../Enums/TipoDato")
const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion")
const TIPO_OPERACION = require("../Enums/TipoOperacion")
const TIPO_VALOR = require("../Enums/TipoValor")
const TipoResultado = require("./TipoResultado")
const ValorExpresion = require("./ValorExpresion")   


function Aritmetica(_expresion,_ambito){
    if (_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BOOL || _expresion.tipo === TIPO_VALOR.ENTERO ||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR || _expresion.tipo === TIPO_VALOR.CHAR || _expresion.tipo === TIPO_INSTRUCCION.LLAMADA_METODO) {
        return ValorExpresion(_expresion, _ambito)
    }else if (_expresion.tipo === TIPO_OPERACION.SUMA) {
        // console.log("suma")
        return suma(_expresion.opIzq, _expresion.opDer, _ambito)
    }else if (_expresion.tipo === TIPO_OPERACION.RESTA) {

        return resta(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if (_expresion.tipo === TIPO_OPERACION.MULTIPLICACION) {

        return multiplicacion(_expresion.opIzq, _expresion.opDer, _ambito)
    } else if (_expresion.tipo === TIPO_OPERACION.DIVISION) {

        return division(_expresion.opIzq, _expresion.opDer, _ambito)
    } else if (_expresion.tipo === TIPO_OPERACION.POTENCIA) {

        return potencia(_expresion.opIzq, _expresion.opDer, _ambito)
    } else if (_expresion.tipo === TIPO_OPERACION.MODULO) {

        return modulo(_expresion.opIzq, _expresion.opDer, _ambito)
    } else if (_expresion.tipo === TIPO_OPERACION.UNARIA) {
        //console.log("unaria")
        return unario(_expresion.opDer, _ambito)
    }
}
function suma(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)
    const opDer = Aritmetica(_opDer, _ambito)
    
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)  


    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                if (opIzq.tipo === TIPO_DATO.BOOL) {
                    if (opIzq.valor === true) {
                        const resultado = 1 + Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = 0 + Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
                else if (opDer.tipo === TIPO_DATO.BOOL) {
                    if (opDer.valor === true) {
                        const resultado = Number(opIzq.valor) + 1;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = Number(opIzq.valor) + 0;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number((opIzq.valor).charCodeAt(0)) + Number(opDer.valor);
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number(opIzq.valor) + Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Number(opIzq.valor) + Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        }
        if (tipores === TIPO_DATO.CADENA) {
            const resultado = opIzq.valor.toString() + opDer.valor.toString();
            return {
                valor: resultado,
                tipo: tipores,
                linea: _opizq.linea,
                columna: _opizq.columna

            }

        }

    } else {
        var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
        return {
            valor: respuesta + 'Error semantico: no se puede realizar la suma: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
            tipo: null,
            linea: _opizq.linea,
            columna: _opizq.columna
        }
    }
}
function resta(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)
    const opDer = Aritmetica(_opDer, _ambito)
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)
    // console.log(tipores)
    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                if (opIzq.tipo === TIPO_DATO.BOOL) {
                    if (opIzq.valor === true) {
                        const resultado = 1 - Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = 0 - Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
                else if (opDer.tipo === TIPO_DATO.BOOL) {
                    if (opDer.valor === true) {
                        const resultado = Number(opIzq.valor) - 1;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = Number(opIzq.valor) - 0;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number((opIzq.valor).charCodeAt(0)) - Number(opDer.valor);
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number(opIzq.valor) - Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Number(opIzq.valor) - Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        } else if (tipores === TIPO_DATO.CADENA) {
            
            return {
                valor: 'Error semantico: no se puede realizar la resta: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                tipo: null,
                linea: _opizq.linea,
                columna: _opizq.columna
            }



        }


    } else {
        

        var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
        return {
            valor: respuesta + 'Error semantico: no se puede realizar la resta: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
            tipo: null,
            linea: _opizq.linea,
            columna: _opizq.columna
        }
    }
}
function multiplicacion(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)
    const opDer = Aritmetica(_opDer, _ambito)
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)
    // console.log(tipores)
    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                
                return {
                    valor: 'Error semantico: no se puede realizar la multiplicacion: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                    tipo: null,
                    linea: _opizq.linea,
                    columna: _opizq.columna
                }

            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number((opIzq.valor).charCodeAt(0)) * Number(opDer.valor);
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number(opIzq.valor) * Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Number(opIzq.valor) * Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        } else if (tipores === TIPO_DATO.CADENA) {
            
            return {
                valor: 'Error semantico: no se puede realizar la multiplicacion: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                tipo: null,
                linea: _opizq.linea,
                columna: _opizq.columna
            }



        }


    } else {

        
        var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
        return {
            valor: respuesta + 'Error semantico: no se puede realizar la multiplicacion: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
            tipo: null,
            linea: _opizq.linea,
            columna: _opizq.columna
        }
    }
}
function division(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)
    const opDer = Aritmetica(_opDer, _ambito)
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)
    //console.log(tipores,opIzq, opDer)
    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                
                return {
                    valor: 'Error semantico: no se puede realizar la division: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                    tipo: null,
                    linea: _opizq.linea,
                    columna: _opizq.columna
                }

            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number((opIzq.valor).charCodeAt(0)) / Number(opDer.valor);
                    return {
                        valor: resultado,
                        tipo: TIPO_DATO.DECIMAL,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number(opIzq.valor) / Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: TIPO_DATO.DECIMAL,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Number(opIzq.valor) / Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: TIPO_DATO.DECIMAL,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        } else if (tipores === TIPO_DATO.CADENA) {
            
            return {
                valor: 'Error semantico: no se puede realizar la division: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                tipo: null,
                linea: _opizq.linea,
                columna: _opizq.columna
            }



        }


    } else {

       
        var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
        return {
            valor: respuesta + 'Error semantico: no se puede realizar la division: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
            tipo: null,
            linea: _opizq.linea,
            columna: _opizq.columna
        }
    }
}
function potencia(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)
    const opDer = Aritmetica(_opDer, _ambito)
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)
    // console.log(tipores)
    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                
                return {
                    valor: 'Error semantico: no se puede realizar la potencia: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                    tipo: null,
                    linea: _opizq.linea,
                    columna: _opizq.columna
                }

            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                
                return {
                    valor: 'Error semantico: no se puede realizar la potencia: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                    tipo: null,
                    linea: _opizq.linea,
                    columna: _opizq.columna
                }

            } else {
                const resultado = Math.pow(Number(opIzq.valor), Number(opDer.valor));
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        } else if (tipores === TIPO_DATO.CADENA) {
            
            return {
                valor: 'Error semantico: no se puede realizar la potencia: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                tipo: null,
                linea: _opizq.linea,
                columna: _opizq.columna
            }



        }


    } else {

    
        var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
        return {
            valor: respuesta + 'Error semantico: no se puede realizar la potencia: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
            tipo: null,
            linea: _opizq.linea,
            columna: _opizq.columna
        }
    }
}
function modulo(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)
    const opDer = Aritmetica(_opDer, _ambito)
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)
    // console.log(tipores)
    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                
                return {
                    valor: 'Error semantico: no se puede realizar el modulo: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                    tipo: null,
                    linea: _opizq.linea,
                    columna: _opizq.columna
                }

            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                
                return {
                    valor: 'Error semantico: no se puede realizar el modulo: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                    tipo: null,
                    linea: _opizq.linea,
                    columna: _opizq.columna
                }

            } else {
                const resultado = Number(opIzq.valor) % Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: TIPO_DATO.DECIMAL,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        } else if (tipores === TIPO_DATO.CADENA) {
            
            return {
                valor: 'Error semantico: no se puede realizar el modulo: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
                tipo: null,
                linea: _opizq.linea,
                columna: _opizq.columna
            }



        }


    } else {

        var respuesta = (opIzq.tipo === null ? opIzq.valor : "") + (opDer.tipo === null ? opDer.valor : "")
        return {
            valor: respuesta + 'Error semantico: no se puede realizar el modulo: Linea: ' + _opizq.linea + " Colulmna: " + _opizq.columna,
            tipo: null,
            linea: _opizq.linea,
            columna: _opizq.columna
        }
    }
}
function unario(_opDer, _ambito) {
    const opDer = Aritmetica(_opDer, _ambito)
    const tipores = TipoResultado(null, opDer.tipo)
    //console.log(opDer)
    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opDer.tipo === TIPO_DATO.BOOL) {
               
                return {
                    valor: 'Error semantico: no se puede realizar el unario: Linea: ' + _opDer.linea + " Colulmna: " + _opDer.columna,
                    tipo: null,
                    linea: _opDer.linea,
                    columna: _opDer.columna
                }

            } else if (opDer.tipo === TIPO_DATO.CHAR) {
                
                return {
                    valor: 'Error semantico: no se puede realizar el unario: Linea: ' + _opDer.linea + " Colulmna: " + _opDer.columna,
                    tipo: null,
                    linea: _opDer.linea,
                    columna: _opDer.columna
                }

            } else {
                const resultado = -Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opDer.linea,
                    columna: _opDer.columna

                }
            }


        } else if (tipores === TIPO_DATO.CADENA) {
            
            return {
                valor: 'Error semantico: no se puede realizar el unario: Linea: ' + _opDer.linea + " Colulmna: " + _opDer.columna,
                tipo: null,
                linea: _opDer.linea,
                columna: _opDer.columna
            }



        }


    } else {

        
        var respuesta = (opDer.tipo === null ? opDer.valor : "")
        return {
            valor: respuesta + 'Error semantico: no se puede realizar el unario: Linea: ' + _opDer.linea + " Colulmna: " + _opDer.columna,
            tipo: null,
            linea: _opDer.linea,
            columna: _opDer.columna
        }
    }
}
module.exports = Aritmetica