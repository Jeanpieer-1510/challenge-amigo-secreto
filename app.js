// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

//Esta función añade los nombres al arreglo despues de verificar si no esta repetido o el cuadro de texto este vacio
function anadirAmigos() {
    const nombreAmigos = document.getElementById('amigo').value.trim(); //.trim() es una funcion integrada que solo con llamarla es suficiente y esta elimina espacio innecesarios al inicio y al final de una oración
    if (nombreAmigos === ''){
        alert("Por favor, inserte un nombre");
    }else if (listaDeAmigos.includes(nombreAmigos)){ //El metodo ".includes" se encarga de verificar la existencia de un elemento en un array o cadena de texto y da como resultado un booleano
        alert("El nombre ya esta en la lista");
        limpiarCaja();
    }else{
        listaDeAmigos.push(nombreAmigos); //El metodo ".push" inserta o empuja el nombre a la lista
        limpiarCaja();
        actualizarLista();
        console.log(listaDeAmigos);
    }
}

//Esta función solo limpia el input, es decir, la caja de texto, para poder seguir ingresando nombres y evitar estar borrando cada vez
function limpiarCaja() {
    return document.getElementById('amigo').value='';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos'); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista existente

    // Iterar sobre el arreglo listaAmigos y crear elementos <li>
    for (let amigo of listaDeAmigos) {
        const li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Establecer el texto del <li> con el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

function sortearAmigo(params) {
    if (listaDeAmigos == 0){
        alert("No hay amigos para sortear");
        return;
    }else{
        let amigoSorteado = listaDeAmigos[Math.floor(Math.random()*listaDeAmigos.length)]
        console.log(amigoSorteado);
        asignaTextoElemento('resultado',amigoSorteado);
        const lista = document.getElementById('listaAmigos'); // Obtener el elemento de la lista
    lista.innerHTML = ""; 
        return;
    }
}

function asignaTextoElemento(elemento,texto){
    let elementoHTML=document.getElementById(elemento);
    elementoHTML.innerHTML=texto;
}
/* //Luego crear una funcion y boton para restaurar la pagina a sus inicios
function restaurarPagina() {
    listaDeAmigos = []; // Vacía la lista de amigos
    limpiarCaja(); // Limpia el cuadro de texto
    actualizarLista(); // Actualiza la lista en el HTML
    asignaTextoElemento('resultado', ''); // Limpia el resultado del sorteo
    console.log("La página ha sido restaurada");
} */