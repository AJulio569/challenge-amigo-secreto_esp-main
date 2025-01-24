// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let jugadores =[]; //Lista de jugadores de amigo secreto.

// Función para agregar amigos a jugar.
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    if (nombre && !jugadores.includes(nombre)) {
        jugadores.push(nombre);
        visualizarListaDeJugadores();
        limpiarInput(nombreInput);

    }else{

        alert("Por favor, ingresa un nombre válido o evita nombres duplicados.");
    }
    
}

// Función para limpiar input o caja de texto.
function limpiarInput(limpiar) {
    limpiar.value= "";
    
}

// Fuinción para visualizar jugadores participantes.
function visualizarListaDeJugadores() {
    const listaDeJugadores = document.getElementById('listaAmigos');
    listaDeJugadores.innerHTML='';

    jugadores.forEach(jugador =>{
        const li = document.createElement("li");
        li.textContent = jugador;
        listaDeJugadores.appendChild(li);
    } );

    
}

// Función sortear amigos.
function sortearAmigo() {
    if (jugadores.length < 2) {
        
        alert("Debe haber al menos dos jugadores para asignar amigos secretos.");
        return;

        
    }else{

        
    }
}






