const button = document.querySelector("button");
/*console.dir(button);
button.innerText = "Hola!";*/


/*cuando se haga clic en el botón, se imprimirá por consola la frase :button clicked*/
/*button.addEventListener("click", () =>{ /*primer parámeto(click)= el nombre del evento que se quiere escuchar con la función addEventListener
    console.log("button clicked")/*segundo parámetro (@functión) = a la acción que se ha de ejecutar cuando ocurra el evento especificado en el primer parámetro
});*/


/*cuando se haga clic en el botón, se cambiará en el botón el texto:Hola*/
/*button.addEventListener("click", () =>{ primer parámeto(click)= el nombre del evento que se quiere escuchar con la función addEventListener
    button.innerText = "Hola";segundo parámetro (String) = la acción que se ha de ejecutar cuando ocurra el evento especificado en el primer parámetro
});*/

/*cuando se haga click en el botón, se mostratá en el botón la suma de las veces que se clika*/

let count = 0;
button.addEventListener("click", () =>{ /*primer parámeto(click)= el nombre del evento que se quiere escuchar con la función addEventListener*/
    button.innerText = count;/*segundo parámetro (contador) = /*la acción que se ha de ejecutar cuando ocurra el evento especificado en el primer parámetro*/
    count += 1;
});
