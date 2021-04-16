const form = document.querySelector("form");//llama <l <form> del HTML
const input = document.querySelector("input"); //llama al <input> del HTML
const list = document.querySelector("ul"); //llama al <ul> del HTML
const error = document.querySelector(".error");//llama al <p class="error"> del HTML
const pending = document.querySelector("span"); //llama al <span> del HTML 
let tasks = getNewTask(); //array para guardar las nuevas tareas

//* función para crear un Array donde guardar la <ul> de <li> */

function getNewTask() {//función para crear el array
    return [];
}

//* función para crear nuevo <li> del <ul> */

function createItem(newValue){
    const item = document.createElement("li"); //crea un <li> para la lista
    item.innerText= newValue;// El texto del item e igual al nuevo valor pasado por parámetro
    list.appendChild(item);// Se apunta el item como hijo del <ul> en el navegador
    tasks.push(item);//guarda el item en el array de la lista
}

//* Crear nuevo <li>, guardar en ARRAY (<ul>) e indicar tareas guardas = tareas pendientes que ha de realizar el usuario */

tasks.forEach(createItem); // crear nuevo item y guardarlo en array tasks
updatePendingTasks();//indica tareas guardadas en el array

//*Al presionar ENTER o hacer CLICK, se realiza: crear y guardar <li> en array y consola, limpiar INPUT y ERROR, indicar tareas guardadas en ARRAY*/

form.addEventListener("submit",(event)=>{
    event.preventDefault();//elimina la recarga automática el formulario en el navegador 
    if (input.value) {
        createItem(input.value);//crea un nuevo item con el valor del input y se guarda en la lista
    //    saveTask(input.value);//guardar la tarea en el console.log
        clearInput();//limpia y focaliza el input al presionar click o enter
        clearError(); //limpia el error al iniciar la escritura en el input
        updatePendingTasks(); //indica las tareas array
    } else {
        setError("No hay tarea nueva para guardar. Escribe una tarea nueva")

    }
    
});

function removeItemArray(array , task){
    const item = task.target;
    //console.log(item);
    for (var i = 0; i < array.length; i++) {
        if (array[i]== item) {
            //delete array[i];
            array.splice(i,1);//se le pone 1 porque se quiere eliminar únicamente el <li> que se ha clickado del array
        }
        //console.log(array[i]);
    }
    item.remove();
    //console.log(array.length);
    updatePendingTasks();//actualiza las tareas pendientes al eliminar tareas.
  return updatePendingTasks(); 
}

list.addEventListener("click",(event)=>{
    removeItemArray(tasks, event);
});


function updatePendingTasks(){
    pending.innerText= tasks.length;//tareas pendientes igual a la dimensión del array tasks
}

function clearInput(){
    input.value="";
    input.focus();
}

function clearError(){
    error.innerHTML = "";

}

function setError(text){
    error.innerHTML = text;
    input.focus();
}