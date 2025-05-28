document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = themeToggleBtn.querySelector("i");
  const themeText = themeToggleBtn.querySelector("span");

  function applyTheme(theme) {
    if (theme === "dark") {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
      themeIcon.classList.replace("fa-moon", "fa-sun");
      themeText.textContent = "Modo Claro";
    } else {
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
      themeIcon.classList.replace("fa-sun", "fa-moon");
      themeText.textContent = "Modo Escuro";
    }
  }

  function toggleTheme() {
    const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("preferredTheme", newTheme);
  }

  // Aplicar tema salvo
  const savedTheme = localStorage.getItem("preferredTheme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  themeToggleBtn.addEventListener("click", toggleTheme);
});
