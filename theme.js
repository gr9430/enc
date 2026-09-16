(function () {
  var KEY = "enc-theme";

  function isLight(theme) {
    if (theme === "light") return true;
    if (theme === "dark") return false;
    return matchMedia("(prefers-color-scheme: light)").matches;
  }

  document.documentElement.classList.toggle("light", isLight(localStorage.getItem(KEY)));

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var light = document.documentElement.classList.toggle("light");
      localStorage.setItem(KEY, light ? "light" : "dark");
    });
  });
})();
