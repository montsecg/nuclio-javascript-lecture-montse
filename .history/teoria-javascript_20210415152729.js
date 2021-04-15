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
const newNumbers = numbers.map((n)=> n+2);/*se declara una nueva constante para guardar el resultado de mapear con la@function el ARRAY numbers*/

/*NO USAR: @function forma antigua.*/
const sum = function(a,b) {
    return a+b;
}

//////*CREANDO LA FUNCION MAP *//////////

function map(array, func) { /* función con 2 parametros de entrada, un ARRAY y una FUNCION*/
        for (let i = 0; i < array.length; i++) {/*con el bucle se recorre el array y se guarda cada elemento en la una nueva variable llamada "element"*/
        const element = array[i];
        const newElement = func(element); /*Esta nueva variable guarda el elemento resultante una vez se pasa por la función "func"*/
        newArray.push(newElement);/*se crea un nuevo ARRAY donde se guarda el nuevo elemento "NEWELEMENT"*/
    }
    return newArray  /*Devuelve el array nuevo que guarda los nuevos elementos*/
}

///* Otra forma de pasar por parametro una @function en otra función*///
/*se quiere poner en mayúsculas un ARRAY de letras usando la función map creada anteriormente*/
const letters = ['a','b','c','d']  //* ARRAY DE LETRAS*//
//* NUEVO ARRAY QUE GUARDA  LETRAS EN MAYÚSCULAS USANDO LA FUNCIÓN MAP CREADA CON UNA @FUNCTION*///
const newLetters = map(letters, (x) => x.toUpperCase())
///* USANDO LA FUNCIÓN MAPS DE JAVA SE PODRIA TAMBIEN HACER LO SIGUIENTE*///
letters.map(x => x.toUpperCase())  
/*o también para guardar en otro ARRAY y mantener las dos opciones*/  
const newLetters = letters.map(x => x.toUpperCase()) 


