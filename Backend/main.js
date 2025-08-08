//Declarando funciones útiles

function contienedato(pais,dato) {

}

function buscardato(pais,dato) {

}

function compararpaises(pais1,pais2,dato){
    if (traerdato(pais1,dato) > traerdato(pais2,dato)){
        return true;
    }
    else {
        return false;
    }
}

function paisrandom() {
 return Math.round(Math.random() * cantidadpaises);
} //Por ahora la función solo da un entero al azar según cantidad de países.


function paisdiario() {

}

function datorandom(pais){

}

console.log(paisrandom());