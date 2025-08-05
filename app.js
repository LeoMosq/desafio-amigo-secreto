// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];//variable del amigo secreto

function agregarAmigo() {
  const nombre = document.getElementById("amigo").value;

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);

  //Mostrar la lista en pantalla 
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += "<li>" + amigos[i] + "</li>";
  }

  //limpiar el input
  document.getElementById("amigo").value = "";
}


