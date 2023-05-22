document.getElementById('donante-formulario').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var pais = document.getElementById('pais').value;
    var zipcode = document.getElementById('zipcode').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
  
    // Realizar acciones con los datos ingresados
  
    document.getElementById('donante-formulario').reset();
  
    alert('¡Gracias por tu interés en ser donante! Nos pondremos en contacto contigo pronto.');
  });
  
 <script>
  const miImagen = document.getElementById("myImage");

  // Función para iniciar la animación
  function startAnimation() {
    miImagen.style.animationPlayState = "running";
  }

  // Función para detener la animación
  function stopAnimation() {
    miImagen.style.animationPlayState = "paused";
  }

  // Eventos del cursor
  miImagen.addEventListener("mouseover", startAnimation);
  miImagen.addEventListener("mouseout", stopAnimation);
</script>

