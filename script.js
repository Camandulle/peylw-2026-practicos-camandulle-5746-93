console.log("Script cargado exitosamente");

const formulario = document.querySelector("form");
const botonLeerMas = document.getElementById("btn-leer-mas-camandulle-5746-93");

if (formulario) {
  const camposTexto = ["nombre", "apellido", "email", "telefono", "direccion", "cp"];

  camposTexto.forEach(function (id) {
    const control = document.getElementById(id);
    const celda = document.getElementById("resumen-" + id);

    control.addEventListener("input", function () {
      celda.innerText = control.value;
    });
  });

  const campoEdad = document.getElementById("edad");
  const celdaEdad = document.getElementById("resumen-edad");

  function actualizarEdad() {
    const valor = campoEdad.value;

    if (valor !== "" && Number(valor) < 18) {
      celdaEdad.style.backgroundColor = "#ffcccc";
      celdaEdad.innerText = valor + " (Menor de edad)";
    } else {
      celdaEdad.style.backgroundColor = "";
      celdaEdad.innerText = valor;
    }
  }

  campoEdad.addEventListener("input", actualizarEdad);

  const campoProvincia = document.getElementById("provincia");
  const celdaProvincia = document.getElementById("resumen-provincia");

  campoProvincia.addEventListener("change", function () {
    celdaProvincia.innerText = campoProvincia.value;
  });

  const radiosMetodo = document.querySelectorAll('input[name="metodo-contacto"]');
  const celdaMetodo = document.getElementById("resumen-metodo-contacto");

  function actualizarMetodo() {
    const elegido = document.querySelector('input[name="metodo-contacto"]:checked');

    if (elegido) {
      celdaMetodo.innerText = document.querySelector('label[for="' + elegido.id + '"]').innerText;
    } else {
      celdaMetodo.innerText = "";
    }
  }

  radiosMetodo.forEach(function (radio) {
    radio.addEventListener("change", actualizarMetodo);
  });

  const casillasSuscripcion = document.querySelectorAll('input[name="suscripcion"]');
  const celdaSuscripciones = document.getElementById("resumen-suscripciones");

  function actualizarSuscripciones() {
    const marcadas = document.querySelectorAll('input[name="suscripcion"]:checked');
    const nombres = [];

    marcadas.forEach(function (casilla) {
      nombres.push(document.querySelector('label[for="' + casilla.id + '"]').innerText);
    });

    celdaSuscripciones.innerText = nombres.join(", ");
  }

  casillasSuscripcion.forEach(function (casilla) {
    casilla.addEventListener("change", actualizarSuscripciones);
  });

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
  });

  actualizarMetodo();
  actualizarSuscripciones();
}

if (botonLeerMas) {
  const bloqueCompleto = document.querySelector(".cv-completo");

  botonLeerMas.addEventListener("click", function () {
    if (bloqueCompleto.style.display === "block") {
      bloqueCompleto.style.display = "none";
      botonLeerMas.innerText = "Leer más";
    } else {
      bloqueCompleto.style.display = "block";
      botonLeerMas.innerText = "Leer menos";
    }
  });
}