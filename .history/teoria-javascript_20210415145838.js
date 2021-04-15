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
/* siguiendo el mismo ejemplo, el código puede ser el siguiente*/
const numbers = [1,2,3,4] /*Se declara el ARRAY*/
const newNumbers = numbers.map((n)=> n+1);/*se declara una nueva constante para guardar el resultado de mapear con la@function el ARRAY numbers*/

/*NO USAR: @function forma antigua.*/
const sum = function(a,b) {
    return a+b;
}