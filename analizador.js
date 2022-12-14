/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var analizador = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,10],$V1=[1,9],$V2=[1,11],$V3=[1,12],$V4=[1,13],$V5=[1,14],$V6=[1,15],$V7=[1,16],$V8=[5,12,13,23,27,28,29,30,31],$V9=[1,35],$Va=[1,29],$Vb=[1,27],$Vc=[1,28],$Vd=[1,30],$Ve=[1,31],$Vf=[1,32],$Vg=[1,33],$Vh=[1,34],$Vi=[1,36],$Vj=[1,40],$Vk=[1,41],$Vl=[1,42],$Vm=[1,43],$Vn=[1,44],$Vo=[1,45],$Vp=[1,46],$Vq=[1,47],$Vr=[1,48],$Vs=[1,49],$Vt=[1,50],$Vu=[1,51],$Vv=[1,52],$Vw=[1,53],$Vx=[8,15,44,45,46,47,48,49,50,51,52,53,54,55,56,58],$Vy=[8,15,55,56],$Vz=[15,20],$VA=[8,15,44,45,50,51,52,53,54,55,56,58],$VB=[8,15,44,45,46,47,49,50,51,52,53,54,55,56,58],$VC=[8,15,50,51,52,53,54,55,56,58],$VD=[1,94],$VE=[1,93],$VF=[1,92],$VG=[1,95],$VH=[13,18,27,28,29,30,31,37,38,39,43],$VI=[1,132],$VJ=[13,18,27,28,29,30,31,37,38,39,40,43];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"OPCIONESCUERPO":4,"EOF":5,"CUERPO":6,"DEC_VAR":7,"ptcoma":8,"ASIG_VAR":9,"METODOS":10,"EXEC":11,"Rvoid":12,"identificador":13,"parA":14,"parC":15,"llaveA":16,"INSTRUCCIONES":17,"llaveC":18,"LIST_PARAMETROS":19,"coma":20,"PARAMETROS":21,"TIPO":22,"Rexec":23,"PARAMETROS_LLAMADA":24,"igual":25,"EXPRESION":26,"Rint":27,"Rdouble":28,"Rchar":29,"Rboolean":30,"Rstring":31,"INSTRUCCION":32,"IF":33,"WHILE":34,"DOWHILE":35,"PRINT":36,"Rdo":37,"Rwhile":38,"Rif":39,"Relse":40,"ELSEIF":41,"CONEIF":42,"Rprint":43,"suma":44,"menos":45,"multi":46,"div":47,"exponente":48,"modulo":49,"menor":50,"mayor":51,"menorIgual":52,"mayorIgual":53,"diferente":54,"and":55,"or":56,"not":57,"igualigual":58,"decimal":59,"entero":60,"Rtrue":61,"Rfalse":62,"string":63,"char":64,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"ptcoma",12:"Rvoid",13:"identificador",14:"parA",15:"parC",16:"llaveA",18:"llaveC",20:"coma",23:"Rexec",24:"PARAMETROS_LLAMADA",25:"igual",27:"Rint",28:"Rdouble",29:"Rchar",30:"Rboolean",31:"Rstring",37:"Rdo",38:"Rwhile",39:"Rif",40:"Relse",43:"Rprint",44:"suma",45:"menos",46:"multi",47:"div",48:"exponente",49:"modulo",50:"menor",51:"mayor",52:"menorIgual",53:"mayorIgual",54:"diferente",55:"and",56:"or",57:"not",58:"igualigual",59:"decimal",60:"entero",61:"Rtrue",62:"Rfalse",63:"string",64:"char"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,1],[6,1],[10,7],[10,8],[19,3],[19,1],[21,2],[11,5],[11,6],[7,2],[7,4],[9,3],[22,1],[22,1],[22,1],[22,1],[22,1],[17,2],[17,1],[32,2],[32,2],[32,1],[32,1],[32,1],[32,1],[35,9],[34,7],[33,7],[33,11],[33,8],[33,12],[41,2],[41,1],[42,8],[36,5],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,2],[26,2],[26,3],[26,3],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
$$[$0-1].push($$[$0]); this.$=$$[$0-1];
break;
case 3: case 38:
this.$=[$$[$0]];
break;
case 4: case 5: case 25: case 26:
this.$=$$[$0-1];
break;
case 6: case 7: case 27: case 28: case 29: case 30:
this.$=$$[$0];
break;
case 8:
this.$ = INSTRUCCION.nuevoMetodo($$[$0-5], null, $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 9:
this.$ = INSTRUCCION.nuevoMetodo($$[$0-6], $$[$0-4], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 10:
this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
break;
case 11: case 24:
this.$ = [$$[$0]];
break;
case 12:
this.$ = INSTRUCCION.nuevaDeclaracion($$[$0-1], null, this._$.first_line,this._$.first_column+1);
break;
case 13:
this.$ = INSTRUCCION.nuevoExec($$[$0-3], null, this._$.first_line,this._$.first_column+1)
break;
case 14:
this.$ = INSTRUCCION.nuevoExec($$[$0-4], $$[$0-2], this._$.first_line,this._$.first_column+1)
break;
case 15:
this.$= INSTRUCCION.nuevaDeclaracion($$[$0],null, $$[$0-1],this._$.first_line, this._$.first_column+1)
break;
case 16:
this.$= INSTRUCCION.nuevaDeclaracion($$[$0-2], $$[$0], $$[$0-3],this._$.first_line, this._$.first_column+1);

        
break;
case 17:
this.$ = INSTRUCCION.nuevaAsignacion($$[$0-2], $$[$0],this._$.first_line, this._$.first_column+1)
break;
case 18:
this.$= TIPO_DATO.ENTERO
break;
case 19:
this.$= TIPO_DATO.DECIMAL
break;
case 20:
this.$= TIPO_DATO.CHAR
break;
case 21:
this.$= TIPO_DATO.BOOL
break;
case 22:
this.$= TIPO_DATO.CADENA
break;
case 23:
this.$ = $$[$0-1]; $$[$0-1].push($$[$0]);
break;
case 31:
this.$ = new INSTRUCCION.nuevoDoWhile($$[$0-2], $$[$0-6] , this._$.first_line,this._$.first_column+1)
break;
case 32:
this.$ = new INSTRUCCION.nuevoWhile($$[$0-4], $$[$0-1] , this._$.first_line,this._$.first_column+1)
break;
case 33:
this.$ = new INSTRUCCION.nuevoIf($$[$0-4], $$[$0-1] , this._$.first_line,this._$.first_column+1)
break;
case 34:
this.$ = new INSTRUCCION.nuevoIfElse($$[$0-8], $$[$0-5], $$[$0-1] , this._$.first_line,this._$.first_column+1)
break;
case 35:
this.$= new INSTRUCCION.nuevoIfConElseIf($$[$0-5], $$[$0-2], $$[$0], null, this._$.first_line,this._$.first_column+1)
break;
case 36:
this.$= new INSTRUCCION.nuevoIfConElseIf($$[$0-9], $$[$0-6], $$[$0-4], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 37:
this.$=$$[$0-1]; $$[$0-1].push($$[$0]);
break;
case 39:
this.$ = new INSTRUCCION.nuevoElseIf($$[$0-4], $$[$0-1] , this._$.first_line,this._$.first_column+1) 
break;
case 40:
this.$ = INSTRUCCION.nuevoPrint($$[$0-2], this._$.first_line,this._$.first_column+1)
break;
case 41:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.SUMA,this._$.first_line, this._$.first_column+1);
break;
case 42:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.RESTA,this._$.first_line, this._$.first_column+1);
break;
case 43:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MULTIPLICACION,this._$.first_line, this._$.first_column+1);
break;
case 44:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.DIVISION,this._$.first_line, this._$.first_column+1);
break;
case 45:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.POTENCIA,this._$.first_line, this._$.first_column+1);
break;
case 46:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MODULO,this._$.first_line, this._$.first_column+1);
break;
case 47:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MENOR,this._$.first_line, this._$.first_column+1);
break;
case 48:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MAYOR,this._$.first_line, this._$.first_column+1);
break;
case 49:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MENORIGUAL,this._$.first_line, this._$.first_column+1);
break;
case 50:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MAYORIGUAL,this._$.first_line, this._$.first_column+1);
break;
case 51:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.DIFERENTE,this._$.first_line, this._$.first_column+1);
break;
case 52:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.AND,this._$.first_line, this._$.first_column+1);
break;
case 53:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.OR,this._$.first_line, this._$.first_column+1);
break;
case 54:
this.$= INSTRUCCION.nuevaOperacionUnaria($$[$0], TIPO_OPERACION.UNARIA,this._$.first_line, this._$.first_column+1);
break;
case 55:
this.$= INSTRUCCION.nuevaOperacionBinaria(null,$$[$0], TIPO_OPERACION.NOT,this._$.first_line, this._$.first_column+1);
break;
case 56:
this.$=$$[$0-1]
break;
case 57:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.IGUALIGUAL,this._$.first_line, this._$.first_column+1);
break;
case 58:
this.$= INSTRUCCION.nuevoValor(Number($$[$0]),TIPO_VALOR.DECIMAL,this._$.first_line, this._$.first_column+1);
break;
case 59:
this.$= INSTRUCCION.nuevoValor(Number($$[$0]),TIPO_VALOR.ENTERO,this._$.first_line, this._$.first_column+1);
break;
case 60: case 61:
this.$= INSTRUCCION.nuevoValor($$[$0],TIPO_VALOR.BOOL,this._$.first_line, this._$.first_column+1);
break;
case 62:
this.$= INSTRUCCION.nuevoValor($$[$0],TIPO_VALOR.CADENA,this._$.first_line, this._$.first_column+1);
break;
case 63:
this.$= INSTRUCCION.nuevoValor($$[$0],TIPO_VALOR.IDENTIFICADOR,this._$.first_line, this._$.first_column+1);
break;
case 64:
this.$= INSTRUCCION.nuevoValor($$[$0],TIPO_VALOR.CHAR,this._$.first_line, this._$.first_column+1);
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:$V0,13:$V1,22:8,23:$V2,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7},{1:[3]},{5:[1,17],6:18,7:4,9:5,10:6,11:7,12:$V0,13:$V1,22:8,23:$V2,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7},o($V8,[2,3]),{8:[1,19]},{8:[1,20]},o($V8,[2,6]),o($V8,[2,7]),{13:[1,21]},{25:[1,22]},{13:[1,23]},{13:[1,24]},{13:[2,18]},{13:[2,19]},{13:[2,20]},{13:[2,21]},{13:[2,22]},{1:[2,1]},o($V8,[2,2]),o($V8,[2,4]),o($V8,[2,5]),{8:[2,15],25:[1,25]},{13:$V9,14:$Va,26:26,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{14:[1,37]},{14:[1,38]},{13:$V9,14:$Va,26:39,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{8:[2,17],44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,58:$Vw},{13:$V9,14:$Va,26:54,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:55,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:56,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},o($Vx,[2,58]),o($Vx,[2,59]),o($Vx,[2,60]),o($Vx,[2,61]),o($Vx,[2,62]),o($Vx,[2,63]),o($Vx,[2,64]),{15:[1,57],19:58,21:59,22:60,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7},{15:[1,61],24:[1,62]},{8:[2,16],44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,58:$Vw},{13:$V9,14:$Va,26:63,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:64,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:65,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:66,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:67,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:68,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:69,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:70,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:71,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:72,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:73,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:74,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:75,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:76,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},o($Vx,[2,54]),o($Vy,[2,55],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,58:$Vw}),{15:[1,77],44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,58:$Vw},{16:[1,78]},{15:[1,79],20:[1,80]},o($Vz,[2,11]),{13:[1,81]},{8:[1,82]},{15:[1,83]},o($VA,[2,41],{46:$Vl,47:$Vm,48:$Vn,49:$Vo}),o($VA,[2,42],{46:$Vl,47:$Vm,48:$Vn,49:$Vo}),o($VB,[2,43],{48:$Vn}),o($VB,[2,44],{48:$Vn}),o($VB,[2,45]),o($VB,[2,46],{48:$Vn}),o($VC,[2,47],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo}),o($VC,[2,48],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo}),o($VC,[2,49],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo}),o($VC,[2,50],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo}),o($VC,[2,51],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo}),o($Vy,[2,52],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,58:$Vw}),o([8,15,56],[2,53],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,58:$Vw}),o($VC,[2,57],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo}),o($Vx,[2,56]),{7:86,9:87,13:$V1,17:84,22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:85,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{16:[1,96]},{21:97,22:60,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7},o($Vz,[2,12]),o($V8,[2,13]),{8:[1,98]},{7:86,9:87,13:$V1,18:[1,99],22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:100,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},o($VH,[2,24]),{8:[1,101]},{8:[1,102]},o($VH,[2,27]),o($VH,[2,28]),o($VH,[2,29]),o($VH,[2,30]),{14:[1,103]},{14:[1,104]},{16:[1,105]},{14:[1,106]},{7:86,9:87,13:$V1,17:107,22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:85,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},o($Vz,[2,10]),o($V8,[2,14]),o($V8,[2,8]),o($VH,[2,23]),o($VH,[2,25]),o($VH,[2,26]),{13:$V9,14:$Va,26:108,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{13:$V9,14:$Va,26:109,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{7:86,9:87,13:$V1,17:110,22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:85,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{13:$V9,14:$Va,26:111,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{7:86,9:87,13:$V1,18:[1,112],22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:100,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{15:[1,113],44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,58:$Vw},{15:[1,114],44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,58:$Vw},{7:86,9:87,13:$V1,18:[1,115],22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:100,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{15:[1,116],44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,58:$Vw},o($V8,[2,9]),{16:[1,117]},{16:[1,118]},{38:[1,119]},{8:[1,120]},{7:86,9:87,13:$V1,17:121,22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:85,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{7:86,9:87,13:$V1,17:122,22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:85,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{14:[1,123]},o($VH,[2,40]),{7:86,9:87,13:$V1,18:[1,124],22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:100,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{7:86,9:87,13:$V1,18:[1,125],22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:100,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{13:$V9,14:$Va,26:126,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},o($VH,[2,33],{41:128,42:129,40:[1,127]}),o($VH,[2,32]),{15:[1,130],44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,58:$Vw},{16:[1,131],39:$VI},o($VH,[2,35],{42:134,40:[1,133]}),o($VJ,[2,38]),{8:[1,135]},{7:86,9:87,13:$V1,17:136,22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:85,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{14:[1,137]},{16:[1,138],39:$VI},o($VJ,[2,37]),o($VH,[2,31]),{7:86,9:87,13:$V1,18:[1,139],22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:100,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{13:$V9,14:$Va,26:140,45:$Vb,57:$Vc,59:$Vd,60:$Ve,61:$Vf,62:$Vg,63:$Vh,64:$Vi},{7:86,9:87,13:$V1,17:141,22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:85,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},o($VH,[2,34]),{15:[1,142],44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,58:$Vw},{7:86,9:87,13:$V1,18:[1,143],22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:100,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{16:[1,144]},o($VH,[2,36]),{7:86,9:87,13:$V1,17:145,22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:85,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},{7:86,9:87,13:$V1,18:[1,146],22:8,27:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:100,33:88,34:89,35:90,36:91,37:$VD,38:$VE,39:$VF,43:$VG},o($VJ,[2,39])],
defaultActions: {12:[2,18],13:[2,19],14:[2,20],15:[2,21],16:[2,22],17:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

        const TIPO_OPERACION= require('./controladores/Enums/TipoOperacion');
        const TIPO_VALOR = require('./controladores/Enums/TipoValor');
        const TIPO_DATO= require('./controladores/Enums/TipoDato');
        const INSTRUCCION = require('./controladores/Instruccion/Instruccion');
       
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1://comentario lineal
break;
case 2:// comentario multiple l??neas   
break;
case 3:return 27
break;
case 4:return 28
break;
case 5:return 30
break;
case 6:return 29
break;
case 7:return 31
break;
case 8:return 'Rnew'
break;
case 9:return 'Rlist'
break;
case 10:return 'Radd'
break;
case 11:return 39
break;
case 12:return 40
break;
case 13:return 38
break;
case 14:return 37
break;
case 15:return 'Rreturn'
break;
case 16:return 12
break;
case 17:return 43
break;
case 18:return 61
break;
case 19:return 62
break;
case 20:return 23
break;
case 21:return 59
break;
case 22:return 'punto'
break;
case 23:return 60
break;
case 24:return 58       
break;
case 25:return 54
break;
case 26:return 52
break;
case 27:return 50
break;
case 28:return 53
break;
case 29:return 25
break;
case 30:return 51
break;
case 31:return 20
break;
case 32:return 8
break;
case 33:return 'dospuntos'
break;
case 34:return 56
break;
case 35:return 55
break;
case 36:return 16
break;
case 37:return 18
break;
case 38:return 46
break;
case 39:return 47
break;
case 40:return 'menosmenos'
break;
case 41:return 'masmas'
break;
case 42:return 45
break;
case 43:return 44
break;
case 44:return 48
break;
case 45:return 57
break;
case 46:return 49
break;
case 47:return 14
break;
case 48:return 15
break;
case 49:return 'corchA'
break;
case 50:return 'corchC'
break;
case 51:return 13
break;
case 52:return 63
break;
case 53:return 64
break;
case 54:return 5
break;
case 55:
        
        console.error('Este es un error l??xico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);

break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:string\b)/i,/^(?:new\b)/i,/^(?:list\b)/i,/^(?:add\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:while\b)/i,/^(?:Do\b)/i,/^(?:return\b)/i,/^(?:void\b)/i,/^(?:print\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:exec\b)/i,/^(?:[0-9]+(\.[0-9]+)\b)/i,/^(?:\.)/i,/^(?:[0-9]+\b)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:=)/i,/^(?:>)/i,/^(?:,)/i,/^(?:;)/i,/^(?::)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:--)/i,/^(?:\+\+)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\^)/i,/^(?:!)/i,/^(?:%)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:([a-zA-Z])([a-zA-Z0-9_])*)/i,/^(?:["\""]([^"\""])*["\""])/i,/^(?:["\'"]([^"\'"])*["\'"])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = analizador;
exports.Parser = analizador.Parser;
exports.parse = function () { return analizador.parse.apply(analizador, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}