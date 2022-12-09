const Ambito = require("../controladores/Ambito/Ambito")
const Global = require("../controladores/Instruccion/Global")



module.exports=(parser, app)=>{

    var prueba;
    var ast;
    app.post('/analizar',(req,res)=>{
         prueba = req.body.prueba
         
        //try {
             ast = parser.parse(prueba)
            const AmbitoGlobal= new Ambito(null,"Global")
            var cadena =Global(ast, AmbitoGlobal)
           //var simbolof= ArregloSimbolo.arregloSimboloF
            //console.log(simbolof)
           // var e = ArregloError.arregloError
           // console.log(e)
             
        
            var resultado= {
                arbol: ast,
                consola:cadena

            }
           
            
            res.send(resultado)
        //} catch (error) {
            //res.send(error)
        //}
    })
    
    
}