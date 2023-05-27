function traerDatosAPI() {
  fetch('https://randomuser.me/api') // API a leer
      // Cuando ha finalizado la lectura
      // guardo en datos el texto leido:
      .then(datos => datos.json()) //res va a guardar el dato mediante el método .json()
      .then(datos => {
          console.log(datos)
          // Y luego copio ese texto en #contenido.
          contenido.innerHTML +=
              `<div class="tarjeta">
               <img src = "${datos.results[0].picture.large}"</img><br>
               Nombre: ${datos.results[0].name.last}, ${datos.results[0].name.first}<br>
               User: ${datos.results[0].login.username}<br>
               Pass: ${datos.results[0].login.password}<br>
               ${datos.results[0].email}</div>`
      })
}

document.getElementById('donante-formulario').addEventListener('submit', function (e) {
e.preventDefault();
 function validarFormulario() { 
  var nombre = document.getElementById('nombre').value.trim();
  var pais = document.getElementById('pais').value.trim();
  var zipcode = document.getElementById('zipcode').value.trim();
  var email = document.getElementById('email').value.trim();
  var telefono = document.getElementById('telefono').value.trim();

 if (nombre == "") || (email == "") || (telefono == "") || (pais == "") || (zipcode == "")(
  alert("Por favor complete los campos");
  return false;
 }
 for (var i = 0; i < nombre.length; i++) {
  var charCode = nombre.charCodeAt(i);
  if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
    alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
    return false;
  }
  for (var j = 0; j < telefono.length; j++) {
    var digit = telefono.charAt(j);
    if (digit < "0" || digit > "12") {
      alert("El campo 'telefono' solo puede contener dígitos numéricos.");
      return false;
    }

  alert("¡Gracias por tu interés! Nos pondremos en contacto.");
  return: true;
};



// Animaciones
const miImagen = document.getElementById("myImage");
function comenzarAnimacion() {
  miImagen.style.animationPlayState = "running";
}
function paraAnimacion() {
  miImagen.style.animationPlayState = "paused";
}

// Eventos del cursor
miImagen.addEventListener("mouseover", comenzarAnimacion);
miImagen.addEventListener("mouseout", paraAnimacion);
