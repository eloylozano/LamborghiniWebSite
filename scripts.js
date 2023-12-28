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

