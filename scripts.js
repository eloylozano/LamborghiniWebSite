function changeBackground(model, button) {
  // Verifica si el botón ya tiene la clase "clicked"
  if (button.classList.contains("clicked")) {
    return;
  }

  const configuradorMain = document.querySelector(".configurador-main");
  const hexagonEmpty = document.querySelector(".hexagon-empty");

  // Restablece la clase clicked en todos los botones
  document.querySelectorAll(".buttons-configurador button").forEach((btn) => {
    btn.classList.remove("clicked");
  });

  // Agrega la clase clicked al botón actual
  button.classList.add("clicked");

  // Aplica la clase show al hexagon-empty para activar la animación
  hexagonEmpty.classList.add("show");

  // Detén y reinicia la animación de los elementos h2
  const h2Letters = document.querySelectorAll(".text-configurador h2 div");
  h2Letters.forEach((letter) => {
    letter.classList.remove("show");
  });

  // Cambia el fondo y el contenido según el modelo
  switch (model) {
    case "revuelto":
      configuradorMain.style.backgroundImage =
        "url(assets/images/ConfiguradorRevuelto.png)";
      updateH1Content("REVUELTO");
      break;
    case "huracan":
      configuradorMain.style.backgroundImage =
        "url(assets/images/ConfiguradorHuracan.png)";
      updateH1Content("HURACÁN");
      break;
    case "urus":
      configuradorMain.style.backgroundImage =
        "url(assets/images/ConfiguradorUrus.png)";
      updateH1Content("URUS");
      break;
    default:
      break;
  }

  // Reinicia la animación de letra en letra después de un breve retraso
  setTimeout(() => {
    h2Letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("show");
      }, index * 100);
    });
  }, 100);
}

function updateH1Content(content) {
  // Elimina la clase show de los h1
  const h1Elements = document.querySelectorAll(".text-configurador h1");
  h1Elements.forEach((h1) => {
    h1.classList.remove("show");
  });

  // Añade la clase show a los h1 con un retraso y actualiza el contenido
  setTimeout(() => {
    h1Elements.forEach((h1) => {
      h1.textContent = `CREAR TU ${content}`;
      h1.classList.add("show");
    });
  }, 100);
}

document.addEventListener("DOMContentLoaded", function () {
  // Añade la clase show al hexagon-empty al cargar la página con un retraso
  const hexagonEmpty = document.querySelector(".hexagon-empty");
  setTimeout(() => {
    hexagonEmpty.classList.add("show");
  }, 100);
});

