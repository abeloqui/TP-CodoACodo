//nuevo intento

// Obtener el elemento con el ID 'datos-api'
var datosApiElement = document.getElementById('datos-api');

// Función para mostrar los datos en la página
function mostrarDatosAPI(datos) {
  // Actualizar el contenido del elemento con los datos de la API
  datosApiElement.innerHTML = JSON.stringify(datos);
}

// Función para obtener los datos de la API
function obtenerDatosAPI(callback) {
  // Realizar la llamada a la API utilizando fetch u otro método de tu elección
  fetch('https://rapidapi.com/standingapi-standingapi-default/api/rapidweather', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ad72736cb2msh3ba70d06c592ebap179ab7jsn70dca5e10242',
      'X-RapidAPI-Host': 'standingapi-standingapi-default.p.rapidapi.com'
    }
  })
    .then(function(response) {
      // Verificar si la respuesta de la API es exitosa
      if (response.ok) {
        // Parsear la respuesta como JSON
        return response.json();
      } else {
        // En caso de error, lanzar una excepción
        throw new Error('Error en la llamada a la API');
      }
    })
    .then(function(datos) {
      // Llamar al callback pasando los datos de la API
      callback(datos);
    })
    .catch(function(error) {
      // Manejar el error en caso de que ocurra
      console.log('Error:', error.message);
    });
}

// Llamar a la función obtenerDatosAPI() y pasar la función mostrarDatosAPI como callback
obtenerDatosAPI(mostrarDatosAPI);





//document.getElementById('donante-formulario').addEventListener('submit', function (e) {
 // e.preventDefault();
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
