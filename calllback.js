function imprimir( c ){
    console.log(c)
}

//callback: FUnción a ejecutar dentro de sumar
function sumar(a, b, callback){
    suma = a + b
    callback(suma)
}

let resultado = 0;

//ejecutar: llamar a sumar
sumar(7, 8, imprimir(resultado))