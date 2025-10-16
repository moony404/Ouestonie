function toggleTheme() {
  let img = document.getElementById("icon_theme");
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = currentTheme === "dark" ? "light" : "dark";

  // Change le thème et stocke la préférence
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Ajoute une animation de fondu avant de changer l'image
  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = newTheme === "dark" ? "img/moon.svg" : "img/sun.svg";
    img.classList.remove("fade-out"); // Réactive l'opacité après le changement
  }, 300); // Doit correspondre à la durée de transition en CSS
}

// Vérifier et appliquer le bon thème + icône au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  // Synchroniser l'icône avec le bon thème
  let img = document.getElementById("icon_theme");
  img.src = savedTheme === "dark" ? "img/moon.svg" : "img/sun.svg";
});
function toggleTheme() {
  let img = document.getElementById("icon_theme");
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = currentTheme === "dark" ? "light" : "dark";

  // Change le thème et stocke la préférence
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Ajoute une animation de fondu avant de changer l'image
  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = newTheme === "dark" ? "img/moon.svg" : "img/sun.svg";
    img.classList.remove("fade-out"); // Réactive l'opacité après le changement
  }, 200);
}