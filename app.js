let listaDeAmigos = [];

// Añadir nombres a la lista después de verificar que no están repetidos ni vacíos
function anadirAmigos() {
    const nombreAmigos = document.getElementById('amigo').value.trim(); // Elimina espacios innecesarios
    if (!nombreAmigos) {
        alert("Por favor, inserte un nombre");
        return;
    }
    else if (listaDeAmigos.includes(nombreAmigos)) { // Verifica si el nombre ya existe en la lista
        alert("El nombre ya está en la lista");
        limpiarCaja();
        return;
    }
    listaDeAmigos.push(nombreAmigos); // Agrega el nombre a la lista
    limpiarCaja();
    actualizarLista();
}

// Limpia la caja de texto para nuevos ingresos
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

// Actualiza dinámicamente la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista existente

    listaDeAmigos.forEach(amigo => { // Usar forEach para mayor claridad
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortea un amigo aleatoriamente y muestra el resultado
function sortearAmigo() {
    if (listaDeAmigos.length === 0) { // Comprueba si la lista está vacía
        alert("No hay amigos para sortear");
        return;
    }
    const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    asignaTextoElemento('listaAmigos','')
    asignaTextoElemento('resultado', `Amigo sorteado: ${amigoSorteado}`);
}

// Asigna texto a un elemento HTML específico
function asignaTextoElemento(elemento, texto) {
    document.getElementById(elemento).innerHTML = texto;
}

/* // Restaura la página a su estado inicial
function restaurarPagina() {
    listaDeAmigos = []; // Vacía la lista de amigos
    limpiarCaja(); // Limpia el cuadro de texto
    actualizarLista(); // Actualiza la lista en el HTML
    asignaTextoElemento('resultado', ''); // Limpia el resultado del sorteo
    console.log("La página ha sido restaurada");
} */
