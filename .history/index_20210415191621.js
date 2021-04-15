const button = document.querySelector("button");
/*console.dir(button);
button.innerText = "Hola!";*/
/*cuando se haga clic en el botón, se imprimirá por consola la frase :button clicked*/
button.addEventListener("click", () =>{ /* primer parámeto(click)= el nombre del evento que se quiere escuchar con la función addEventListener*/
    console.log("button clicked")/**/
});


