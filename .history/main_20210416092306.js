const form = document.querySelector("form");//llama <l <form> del HTML
const input = document.querySelector("input"); //llama al <input> del HTML
const list = document.querySelector("ul"); //llama al <ul> del HTML
const error = document.querySelector(".error");//llama al <p class="error"> del HTML
const pending = document.querySelector("span"); //llama al <span> del HTML 

let tasks = getNewTasks(); //array para guardar las nuevas tareas
tasks.forEach(createItem); // crear nuevo item y guardarlo en array tasks
updatePendingTasks();//guardar tareas pendientes en el array

form.addEventListener("submit",(event)=>{
    event.preventDefault();//elimina la recarga automática el formulario en el navegador 
    if (input.value) {
        createItem(input.value);//crea un nuevo item con el valor del input
        saveTask(input.value);//guardar la tarea en el console.log
        clearInput();//limpia el input al presionar click o enter
        focus();//focaliza el cursor en el input, para que esté siempre preparado para escribir en el input
        clearError(); //limpia el error al iniciar la escritura en el input
        updatePendingTasks(); //indica las tareas pendientes
    } else {
        setError("No hay tarea nueva para guardar. Escribe una tarea nueva")

    }
    
});

list.addEventListener("click",(event)=>{
    removeItem(event.target);//elimina el item de la lista de tareas
})