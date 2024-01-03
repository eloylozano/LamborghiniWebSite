function marcado(elemento) {
  // Elimina la clase 'modelo-seleccionado' de todos los elementos
  var elementos = document.querySelectorAll(".nav-header-text");
  elementos.forEach(function (el) {
    el.classList.remove("modelo-seleccionado");
  });

  // Agrega la clase 'modelo-seleccionado' al elemento clicado
  elemento.classList.add("modelo-seleccionado");
}

document.addEventListener("DOMContentLoaded", function () {
  var modelos = document.getElementById("modelos");
  var submenu = document.getElementById("submenu-modelos");
  var header = document.getElementById("header");
  var beyond = document.getElementById("beyond");
  var logo = document.getElementById("logo");

  modelos.addEventListener("mouseover", function () {
    submenu.classList.add("show");
  });

  submenu.addEventListener("mouseleave", function (event) {
    if (
      !submenu.contains(event.relatedTarget) &&
      !beyond.contains(event.relatedTarget)
    ) {
      submenu.classList.remove("show");
    }
  });

  beyond.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });

  logo.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });
});

function handleHuracanHover() {
  var huracanElement = document.getElementById("huracan");
  var submenuHuracan = document.querySelector(".submenu-huracan");

  huracanElement.addEventListener("mouseover", function () {
    submenuHuracan.style.opacity = "1";
    submenuHuracan.style.visibility = "visible";
  });

  huracanElement.addEventListener("mouseout", function () {
    submenuHuracan.style.opacity = "0";
    submenuHuracan.style.visibility = "hidden";
  });

  submenuHuracan.addEventListener("mouseover", function () {
    submenuHuracan.style.opacity = "1";
    submenuHuracan.style.visibility = "visible";
  });

  submenuHuracan.addEventListener("mouseout", function () {
    submenuHuracan.style.opacity = "0";
    submenuHuracan.style.visibility = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", handleHuracanHover);

function handleUrusHover() {
  var urusElement = document.getElementById("urus");
  var submenuUrus = document.querySelector(".submenu-urus");

  urusElement.addEventListener("mouseover", function () {
    submenuUrus.style.opacity = "1";
    submenuUrus.style.visibility = "visible";
  });

  urusElement.addEventListener("mouseout", function () {
    submenuUrus.style.opacity = "0";
    submenuUrus.style.visibility = "hidden";
  });

  submenuUrus.addEventListener("mouseover", function () {
    submenuUrus.style.opacity = "1";
    submenuUrus.style.visibility = "visible";
  });

  submenuUrus.addEventListener("mouseout", function () {
    submenuUrus.style.opacity = "0";
    submenuUrus.style.visibility = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", handleUrusHover);


function handleSerieLimitadaHover() {
  var serielimitadaElement = document.getElementById("serie-limitada");
  var submenuserielimitada = document.querySelector(".submenu-serielimitada");

  serielimitadaElement.addEventListener("mouseover", function () {
    submenuserielimitada.style.opacity = "1";
    submenuserielimitada.style.visibility = "visible";
  });

  serielimitadaElement.addEventListener("mouseout", function () {
    submenuserielimitada.style.opacity = "0";
    submenuserielimitada.style.visibility = "hidden";
  });

  submenuserielimitada.addEventListener("mouseover", function () {
    submenuserielimitada.style.opacity = "1";
    submenuserielimitada.style.visibility = "visible";
  });

  submenuserielimitada.addEventListener("mouseout", function () {
    submenuserielimitada.style.opacity = "0";
    submenuserielimitada.style.visibility = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", handleSerieLimitadaHover);

function handleConceptHover() {
  var conceptElement = document.getElementById("concept");
  var submenuConcept = document.querySelector(".submenu-concept");

  conceptElement.addEventListener("mouseover", function () {
    submenuConcept.style.opacity = "1";
    submenuConcept.style.visibility = "visible";
  });

  conceptElement.addEventListener("mouseout", function () {
    submenuConcept.style.opacity = "0";
    submenuConcept.style.visibility = "hidden";
  });

  submenuConcept.addEventListener("mouseover", function () {
    submenuConcept.style.opacity = "1";
    submenuConcept.style.visibility = "visible";
  });

  submenuConcept.addEventListener("mouseout", function () {
    submenuConcept.style.opacity = "0";
    submenuConcept.style.visibility = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", handleConceptHover);


document.addEventListener("DOMContentLoaded", function () {
  var clientservice = document.getElementById("clientservice");
  var submenu = document.getElementById("submenu-servicios");
  var header = document.getElementById("header");
  var beyond = document.getElementById("beyond");
  var motorsport = document.getElementById("motorsport");

  clientservice.addEventListener("mouseover", function () {
    submenu.classList.add("show");
  });

  submenu.addEventListener("mouseleave", function (event) {
    if (
      !submenu.contains(event.relatedTarget) &&
      !beyond.contains(event.relatedTarget)
    ) {
      submenu.classList.remove("show");
    }
  });

  beyond.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });

  motorsport.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var motorsport = document.getElementById("motorsport");
  var submenu = document.getElementById("submenu-motorsport");
  var header = document.getElementById("header");
  var concesionarios = document.getElementById("concesionarios");
  var motorsport = document.getElementById("motorsport");

  motorsport.addEventListener("mouseover", function () {
    submenu.classList.add("show");
  });

  submenu.addEventListener("mouseleave", function (event) {
    if (
      !submenu.contains(event.relatedTarget) &&
      !concesionarios.contains(event.relatedTarget)
    ) {
      submenu.classList.remove("show");
    }
  });

  concesionarios.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });

  clientservice.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });
});

function toggleBars() {
  const barras = document.querySelector(".barras");
  barras.classList.toggle("active");
}

function toggleBars() {
  const barras = document.querySelector(".barras");
  const submenuGeneral = document.getElementById("submenu-general");

  barras.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var barras = document.querySelector(".barras");
  var submenuGeneral = document.querySelector(".submenu-general");
  var header = document.querySelector("#header");

  barras.addEventListener("click", function () {
    submenuGeneral.classList.toggle("show");
    header.classList.toggle("submenu-active");
  });
});

function changeBackground(model, button) {
  if (button.classList.contains("clicked")) {
    return;
  }

  const configuradorMain = document.querySelector(".configurador-main");
  const hexagonEmpty = document.querySelector(".hexagon-empty");

  document.querySelectorAll(".buttons-configurador button").forEach((btn) => {
    btn.classList.remove("clicked");
  });

  button.classList.add("clicked");

  hexagonEmpty.classList.add("show");

  const h2Letters = document.querySelectorAll(".text-configurador h2 div");
  h2Letters.forEach((letter) => {
    letter.classList.remove("show");
  });

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

  setTimeout(() => {
    h2Letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("show");
      }, index * 100);
    });
  }, 100);
}

function updateH1Content(content) {
  const h1Elements = document.querySelectorAll(".text-configurador h1");
  h1Elements.forEach((h1) => {
    h1.classList.remove("show");
  });

  setTimeout(() => {
    h1Elements.forEach((h1) => {
      h1.textContent = `CREAR TU ${content}`;
      h1.classList.add("show");
    });
  }, 100);
}

document.addEventListener("DOMContentLoaded", function () {
  const hexagonEmpty = document.querySelector(".hexagon-empty");
  setTimeout(() => {
    hexagonEmpty.classList.add("show");
  }, 100);
});
