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