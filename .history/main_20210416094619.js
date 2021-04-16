const form = document.querySelector("form");//llama <l <form> del HTML
const input = document.querySelector("input"); //llama al <input> del HTML
const list = document.querySelector("ul"); //llama al <ul> del HTML
const error = document.querySelector(".error");//llama al <p class="error"> del HTML
const pending = document.querySelector("span"); //llama al <span> del HTML 

let tasks = getNewTask(); //array para guardar las nuevas tareas
tasks.forEach(createItem); // crear nuevo item y guardarlo en array tasks
updatePendingTasks();//indica tareas pendientes en el array

function getNewTask() {//función para crear el array
    return ["Hola"];
}

function createItem(newValue){
    const item = document.createElement("li"); //crea un <li> para la lista
    item.innerText= newValue;// El texto del item e igual al nuevo valor pasado por parámetro
    list.appendChild(item);// Se añade el item como hijo del <ul>
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();//elimina la recarga automática el formulario en el navegador 
    if (input.value) {
        createItem(input.value);//crea un nuevo item con el valor del input y se guarda en la lista
        saveTask(input.value);//guardar la tarea en el console.log
        clearInput();//limpia y focaliza el input al presionar click o enter
        clearError(); //limpia el error al iniciar la escritura en el input
        updatePendingTasks(); //indica las tareas pendientes
    } else {
        setError("No hay tarea nueva para guardar. Escribe una tarea nueva")

    }
    
});

list.addEventListener("click",(event)=>{
    removeItem(event.target);//elimina el item de la lista de tareas
    updatePendingTasks();//actualiza las tareas pendientes
});


function updatePendingTasks(){
    pending.innerText= tasks.length;//tareas pendientes igual a la dimensión del array tasks
}