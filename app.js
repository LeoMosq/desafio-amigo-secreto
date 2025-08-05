// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];//lista de nombres

function agregarAmigo() {//funcion al boton añadir
  const nombre = document.getElementById("amigo").value;//guardado de nombre escrito en el campo

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;//esto detiene la funcion
  }

  amigos.push(nombre);//nombre de la caja de nombres

  //Mostrar la lista en pantalla 
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  for (let i = 0; i < amigos.length; i++) {//limpiado de caja para evitar duplicados y vovler a poner todos los nombres
    lista.innerHTML += "<li>" + amigos[i] + "</li>";
  }

  //limpiar el input/campo
  document.getElementById("amigo").value = "";
}


