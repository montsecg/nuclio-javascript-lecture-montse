//////*FUNCIONES *//////////
/* varias formas de escribir la misma función en JAVASCRIPT*/

/*JOINSTING
Este tipo de funciones, se pueden dedlarar antes o después de ser usadas
Son las usadas para generar funciones en documentos externos donde únicamente hay funciones*/
function sum(a,b){
    return a+b;
}


/*Este otro tipo de funciones, se han de declarar primero para poder ser usadas
NO USAR @function*/
const sum = (a,b) => {
    return a+b;
}
/*@function simplificada en una línea*/
const sum = (a,b) => a+b;
[1,2,3,4].map((z)=> z+1) /*Ejemplo de sumar 1 a todos los elementos del ARRAY con @FUNCTION, creada en la misma linea*/


/*NO USAR: @function forma antigua.*/
const sum = function(a,b) {
    return a+b;
}