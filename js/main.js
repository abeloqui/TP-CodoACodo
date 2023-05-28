function validarFormulario() {
  var nombre = document.getElementById('nombre').value.trim();
  var pais = document.getElementById('pais').value.trim();
  var zipcode = document.getElementById('zipcode').value.trim();
  var email = document.getElementById('email').value.trim();
  var telefono = document.getElementById('telefono').value.trim();

  if (nombre == "" || email == "" || telefono == "" || pais == "" || zipcode == "") {
    alert("Por favor complete todos los campos");
    return false;
  }

  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  for (var j = 0; j < telefono.length; j++) {
    var digit = telefono.charAt(j);
    if (digit < "0" || digit > "9") {
      alert("El campo 'telefono' solo puede contener dígitos numéricos.");
      return false;
    }
  }

  alert("¡Gracias por tu interés! Nos pondremos en contacto.");
  return true;
}



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



  function traerDatosAPI() {
    fetch('https://randomuser.me/api') 
      .then(response => response.json())
      .then(data => {
        mostrarInfo(data.results[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  function mostrarInfo(datos) {
    const contenido = document.getElementById("datos-api");
    contenido.innerHTML = `
      <div class="tarjetas">
        <img src="${datos.picture.large}" alt="Avatar">
        <p>Nombre: ${datos.name.first} ${datos.name.last}</p>
        <p>Email: ${datos.email}</p>
        <p>Teléfono: ${datos.phone}</p>
        <p>País: ${datos.location.country}</p>
      </div>
    `;
  }
  