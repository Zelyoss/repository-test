const THEME_KEY = "ebook-theme";

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  updateToggleText(theme);
}

function updateToggleText(theme) {
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  const isDark = theme === "dark";
  btn.textContent = isDark ? "🌙 Mode Gelap" : "☀️ Mode Terang";
}

function toggleDarkMode() {
  const current = document.documentElement.dataset.theme || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (prefersDark ? "dark" : "light"));
}

window.addEventListener("DOMContentLoaded", initTheme);
