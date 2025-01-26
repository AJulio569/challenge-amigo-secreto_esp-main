// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let jugadores = []; //Lista de jugadores de amigo secreto.
let listaDeAmigosSorteados = [];

// Función para agregar amigos a jugar.
function agregarAmigo() {
  const nombreInput = document.getElementById("amigo");
  const nombre = nombreInput.value.trim();

  if (nombre && !jugadores.includes(nombre)) {
    jugadores.push(nombre);
    limpiarListaExistente('resultado');
    visualizarListaDeJugadores();
    limpiarInput(nombreInput);
  } else {
    alert("Por favor, ingresa un nombre válido o evita nombres duplicados.");
  }
}



// Fuinción para visualizar jugadores participantes.
function visualizarListaDeJugadores() {
  const listaDeJugadores = limpiarListaExistente('listaAmigos');
  

  jugadores.forEach((jugador) => {
    const li = document.createElement("li");
    li.textContent = jugador;
    listaDeJugadores.appendChild(li);
  });
}

// Función sortear amigos.
function sortearAmigo() {

  if (jugadores.length > 0) {
    const amigoSectreto = [...jugadores];
    const resultado = limpiarListaExistente('resultado');
    

    let amigo;
    amigo = amigoSectreto[Math.floor(Math.random() * amigoSectreto.length)];

    const li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es : ${amigo}`;
    resultado.appendChild(li);
    
     limpiarListaExistente("listaAmigos");
     jugadores=[];
  } else {
    alert("Debe haber al menos dos jugadores para asignar amigos secretos.");
    return;
  }
}
 // Función limpia y retorna una lista(li).
function limpiarListaExistente(idLista) {
  let lista = document.getElementById(idLista);
  lista.innerHTML = "";
  return lista;
}

// Función para limpiar input o caja de texto.
function limpiarInput(limpiar) {
    limpiar.value = "";
  }
