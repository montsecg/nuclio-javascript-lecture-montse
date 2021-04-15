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

//*TRABAJANDO CON INPUT Y BUTTON EN HTML *//

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

/*cuando se escriba en el input la tarea y se CLIKA el botón ADD, se agregue un <li>*/
/*const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul"); /* guarda la lista de tareas*/

//cada vez que se escriba en el input, que se imprima la lista por consola
/*input.addEventListener("input", () =>{
    //console.log(list);
});*/ 

//Cuando se presione el ENTER que se agrege el elemento a la lista 
/*input.addEventListener("keypress", (event) =>{//el evento sucede cuando se presiona la tecla ENTER
    if (event.key === 'Enter') {
        addItem();*/
       /* const item = document.createElement("li"); //se crea el elemento <li> y se guarda en una constante item
        item.innerText = input.value; // se guarda en item el valor del input 
        list.append(item); //se añade a la lista el item guardado

        input.value = ""; //se cambia el valor del input a nada, sirve para limpiar el input
        input.focus(); // se usa para que el cursor se focalice siempre en el input después de CLICKAR en el botón ADD;*/
    /*}
    
});*/

//Crear un elemento nuevo para guardar el valor(texto) que se escribe en el INPUT y se clicka el boton ADD
/*button.addEventListener("click", () =>{ // se puede simplificar: button.addEventListener("click", addItem);
        addItem();
   /* const item = document.createElement("li"); //se crea el elemento <li> y se guarda en una constante item
    item.innerText = input.value; // se guarda en item el valor del input 
    list.append(item); //se añade a la lista el item guardado

    input.value = ""; //se cambia el valor del input a nada, sirve para limpiar el input
    input.focus(); // se usa para que el cursor se focalice siempre en el input después de CLICKAR en el botón ADD*/

/*}); */
//*como en las dos funciones anteriores se repite el código, es mejor crear una función que englobe todo el código y se aplique donde sea necesario*//
//Función para crear elemeto"li", guardarlo en una constante, añadirlo a la lista, borrar el input y mantener el cursos en el input
/*function addItem (){
    const item = document.createElement("li"); //se crea el elemento <li> y se guarda en una constante item
    item.innerText = input.value; // se guarda en item el valor del input 
    list.append(item); //se añade a la lista el item guardado

    input.value = ""; //se cambia el valor del input a nada, sirve para limpiar el input
    input.focus(); // se usa para que el cursor se focalice siempre en el input después de CLICKAR en el botón ADD

};*/

//*AÑADIR ETIQUETAS EN HTML CON JAVASCRIPT - EJEMPLO AÑADIR <LI> EN UNA LISTA USANDO UN FORMULARIO CON UN INPUT Y UN BOTÓN EN HTML*/
const form = document.querySelector ("form");
const input = document.querySelector ("input");
const list = document.querySelector (".li");
console.log(list.textContent);

function addItem (newValue){//sin parámetro
    
    const item = document.createElement("li"); //se crea el elemento <li> y se guarda en una constante item
    item.innerText = newValue;// input.value // se guarda en item el valor del input 
    list.append(item); //se añade a la lista el item guardado
    //newArray.push(newElement);
};

/*se crea una funcion para limpiar el INPUT*/

function clearInput(){
    input.value = ""; //se cambia el valor del input a nada, sirve para limpiar el input
    input.focus(); // se usa para que el cursor se focalice siempre en el input después de CLICKAR en el botón ADD

}

/*form.addEventListener("submit", addItem()); // esto es correcto, pero el <form> por defecto recarga la página y elimina el print del <list> realizado

/*para que no recarge el <form> la página, hay que usar preventDefault en el evento*/

form.addEventListener("submit", (event)=> {
    event.preventDefault();//
    if (input.value) {
        addItem(input.value);//con el parámetro, se pueden añadir por defecto nuevos items <li> con el código
        clearInput();//se limpia el INPUT;
    } 
    
});

addItem("Hola"); //añadir por defecto un item <li> sin pasar por el IMPUT

//* Al hacer CLICK  en una tarea ha de borrarse*/
function removeItems(event){
    if(event == "click" && list.childNodes.addEventListener("click")){
        list.childNodes.remove();}//eliminar un <li> del <ul>
};

//console.log(list.childNodes)
