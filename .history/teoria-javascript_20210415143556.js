
/* varias formas de escribir la misma función en JAVASCRIPT*/
function sum(a,b){
    return a+b;
}
/*@function*/
const sum = (a,b) => {
    return a+b;
}
/*@function simplificada en una línea*/
const sum = (a,b) => a+b;

/*@function forma antigua*/
const sum = function(a,b) {
    return a+b;
}