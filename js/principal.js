// La Suomilandia — pequeños comportamientos de la web.

// 1. Menú en celulares: el botón "Menú" abre y cierra la lista de páginas.
const boton = document.querySelector(".menu-boton");
const menu = document.querySelector(".menu");
if (boton && menu) {
  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
}

// 2. Nieve que cae en la portada (solo si existe el contenedor .nieve).
const nieve = document.querySelector(".nieve");
if (nieve) {
  for (let i = 0; i < 40; i++) {
    const copo = document.createElement("span");
    const tamano = 3 + Math.random() * 5;
    copo.style.left = Math.random() * 100 + "%";
    copo.style.width = copo.style.height = tamano + "px";
    copo.style.opacity = 0.4 + Math.random() * 0.5;
    copo.style.animationDuration = 8 + Math.random() * 10 + "s";
    copo.style.animationDelay = -Math.random() * 18 + "s";
    nieve.appendChild(copo);
  }
}

// 3. Año actual en el pie de página.
document.querySelectorAll(".anio").forEach((el) => (el.textContent = new Date().getFullYear()));
