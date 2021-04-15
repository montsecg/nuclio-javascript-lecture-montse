//* TRABAJANDO CON BOTONES EN HTML*//

/*const button = document.querySelector("button");*/
/*console.dir(button);
button.innerText = "Hola!";*/


//*cuando se haga clic en el botón, se imprimirá por consola la frase :button clicked*/
/*button.addEventListener("click", () =>{ /*primer parámeto(click)= el nombre del evento que se quiere escuchar con la función addEventListener
    console.log("button clicked")/*segundo parámetro (@functión) = a la acción que se ha de ejecutar cuando ocurra el evento especificado en el primer parámetro
});*/


//*cuando se haga clic en el botón, se cambiará en el botón el texto:Hola*/
/*button.addEventListener("click", () =>{ primer parámeto(click)= el nombre del evento que se quiere escuchar con la función addEventListener
    button.innerText = "Hola";segundo parámetro (String) = la acción que se ha de ejecutar cuando ocurra el evento especificado en el primer parámetro
});*/

//*cuando se haga click en el botón, se mostratá en el botón la suma de las veces que se clika*/

/*let count = 1;
button.addEventListener("click", () =>{ primer parámeto(click)= el nombre del evento que se quiere escuchar con la función addEventListener
    button.innerText = count;segundo parámetro (contador) = /*la acción que se ha de ejecutar cuando ocurra el evento especificado en el primer parámetro
    count += 1;
    if (count >= 11 ) {
        count = 1;
    }
});*/

//*cuando se haga click en el botón, se cambia el style (CSS) del h1*/
/*const title = document.querySelector("h1");
let count = 1;

button.addEventListener("click", () =>{ primer parámeto(click)= el nombre del evento que se quiere escuchar con la función addEventListener
    button.innerText = count;segundo parámetro (contador) = la acción que se ha de ejecutar cuando ocurra el evento especificado en el primer parámetro
    count += 1;
    if (count >= 6 ) {
        //title.style.textTransform = "uppercase";
 /*en todos los titulos se aplica la classe uppercase cuando se realizan 5 clicks en el botón
        title.classList.add("uppercase"); 
    }
});*/


//*cuando se haga click en el botón, se cambia el h1 a MAYUSCULAS y a MINUSCULAS*////
/*const title = document.querySelector("h1");

button.addEventListener("click", () =>{
    title.classList.toggle("uppercase"); /*uppercases tiene que estar definido en la hoja de CCS, para transformar h1*/
/*});*/

//*TRABAJANDO CON INPUT EN HTML *//

/*Cuando el input cambie, imprime por consola "Hola"*/
/*const input = document.querySelector ("input");
input.addEventListener("input", () =>{
    console.log("Hola");
});*/

/*Cuando el input se rellena, imprime en por consola lo que se ha escrito en el input */
const input = document.querySelector ("input");
const button = document.querySelector ("button");

//*en este caso se imprime por consola cada caracter que se escribe en el input*/

/*input.addEventListener("input", (event) =>{
    console.log(event);
});*/

//*en este caso se imprime por consola cada caracter que se escribe en el input*/

input.addEventListener("input", (event) =>{
    console.log(event);
});



