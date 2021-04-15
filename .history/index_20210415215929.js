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

//*declaración de variables que para conectar las etiquetas de HTML y darle lógica con JAVASCRIPT 
/*const input = document.querySelector ("input");
const button = document.querySelector ("button");
const title = document.querySelector ("h1");*/

/*Cuando el input cambie, imprime por consola "Hola"*/
/*const input = document.querySelector ("input");
input.addEventListener("input", () =>{
    console.log("Hola");
});*/


//*en este caso se imprime por consola un evento por cada caracter que se escribe en el input*/

/*input.addEventListener("input", (event) =>{
    console.log(event);
});*/

//*en este caso se imprime por consola un caracter por cada caracter que se escribe en el input*/

/*input.addEventListener("input", () =>{
    console.log(input.value);
});*/

//*Para recoger como título lo que se escriba en el input*/

/*input.addEventListener("input", () =>{
    title.innerText = input.value;
});*/

//*AÑADIR ETIQUETAS EN HTML CON JAVASCRIPT - EJEMPLO AÑADIR <LI> EN UNA LISTA USANDO UN INPUT Y UN BOTÓN EN HTML*/

/*cuando se escriba en el input la tarea y se CLIKA el boton ADD, se agregue un <li>*/
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul"); /* guarda la lista de tareas*/

/*input.addEventListener("input", () =>{
    //console.log(list);
});*/ 

input.addEventListener("input", () =>{
    //console.log(list);
});

//Crear un elemento nuevo para guardar el valor(texto) que se escribe en el INPUT y se clicka el boton ADD
button.addEventListener("click", () =>{

    const item = document.createElement("li"); //se crea el elemento <li> y se guarda en una constante item
    item.innerText = input.value; // se guarda en item el valor del input 
    list.append(item); //se añade a la lista el item guardado

    input.value =""; //se cambia el valor del input a nada, sirve para limpiar el input
    input.focus(); // se usa para que el cursor se focalice siempre en el input después de CLICKAR en el botón ADD

});
