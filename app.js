let amigos = [];//lista de nombres

function agregarAmigo() {//funcion al boton añadir
  const nombre = document.getElementById("amigo").value;//guardado de nombre escrito en el campo

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;// detiene la funcion
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
function sortearAmigo() {//funcion en caso que se realice el sorteo sin agregar nombres
  if (amigos.length === 0){
    alert ("La lista está vacía. Agrega al menos un amigo.")
    return;//detiene la funcion
  }
  const indice = Math.floor(Math.random ()* amigos.length);//elige el nombre de la lista al azar 
  const amigoElegido = amigos[indice];//almacena el amigo secreto ganador del sorteo
  
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = "<li>El amigo secreto es: <strong>" + amigoElegido + "</strong></li>";//muestra el amigo secreto ganador

}

