const form = document.querySelector("form");//llama <l <form> del HTML
const input = document.querySelector("input"); //llama al <input> del HTML
const list = document.querySelector("ul"); //llama al <ul> del HTML
const error = document.querySelector(".error");//llama al <p class="error"> del HTML
const pending = document.querySelector("span"); //llama al <span> del HTML 

let tasks = getNewTasks(); //array para guardar las nuevas tareas
tasks.forEach(createItem); // crear nuevo item y guardarlo en array tasks
updatePendingTasks();//guardar tareas pendientes en el array

form.addEventListener("submit",(event)=>{
    event.preventDefault();//elimina la recarga del formulario en el navegador después de añadir una tarea
    createItem();
    clearInput();
    focus();
})