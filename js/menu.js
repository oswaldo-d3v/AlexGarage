function showHidenMenu() {
  var x = document.getElementById("menu-navegacion");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function cambiarIdioma(idioma, pagina) {
  document.cookie = "lenguaje=" + idioma + ";expires=Thu, 12 Aug 2049 20:47:11 UTC;";
  location.href = pagina + ".html";
}