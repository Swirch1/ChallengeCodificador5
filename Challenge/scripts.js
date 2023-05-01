// Seleccionar los elementos y el botón
const imagen = document.getElementById('imagen');
const encriptador = document.getElementById('encriptar');
const desencriptador = document.getElementById('desencriptar');
const reiniciador = document.getElementById('reiniciar');
const vocal = ["e", "i", "a", "o", "u"];
const vocalEncriptada = ["enter", "imes", "ai", "ober", "uber"];

// Agregar un controlador de eventos para el clic en el botón
encriptador.addEventListener('click', function() {
  imagen.style.display = "none";	
  var textoEncriptado = document.getElementById('textoEncriptado');
  var mensaje = document.getElementById("mensaje").value

  mensaje = mensaje.replace(/e/g,"enter")
                   .replace(/i/g,"imes") 
                   .replace(/a/g,"ai")
                   .replace(/o/g,"ober") 
                   .replace(/u/g,"ufat"); 
                  
  textoEncriptado.innerHTML = mensaje;

  textoEncriptado.style.display = 'block';
  
});

desencriptador.addEventListener('click', function() {
  imagen.style.visibility = "hidden";
  var textoDesencriptado = document.getElementById('textoDesencriptado');
  var mensaje = document.getElementById("mensaje").value


  mensaje = mensaje.replace(/ai/g,"a")
                   .replace(/enter/g,"e")
                   .replace(/imes/g,"i") 
                   .replace(/ober/g,"o") 
                   .replace(/ufat/g,"u"); 

  textoDesencriptado.innerHTML = mensaje;

  textoDesencriptado.style.display = 'block';
});

reiniciar.addEventListener('click', function() {
  
  document.getElementById("textoDesencriptado").textContent = "";
  document.getElementById("textoEncriptado").textContent = "";
  imagen.style.visibility = "visible";
});

