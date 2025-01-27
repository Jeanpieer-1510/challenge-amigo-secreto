// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

//Luego agregar la funcion de verificar si el nombre esta repetido en la lista
function sorteoDeAmigos() {
    const nombreAmigos = document.getElementById('amigo').value.trim();
    if (nombreAmigos === ''){
        alert("Por favor, inserte un nombre");
    }else if (listaAmigos.includes(nombreAmigos)){
        alert("El nombre ya esta en la lista");
        limpiarCaja();
    }else{
        listaAmigos.push(nombreAmigos);
        limpiarCaja();
        console.log(nombreAmigos);
    }
}

function limpiarCaja() {
    return document.getElementById('amigo').value='';
}
