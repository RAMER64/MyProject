document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelector('.switch');
  let element1 = document.querySelector('.switchBox');
  let element2 = document.querySelector('body');
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme == "light") {
    element.classList.toggle("switchON");
    element1.classList.toggle("switchBoxON");
    element2.classList.toggle("bodyLight");
  }
  document.querySelector('[href="#Switch"]').addEventListener('click', function () {
    element.classList.toggle("switchON");
    element1.classList.toggle("switchBoxON");
    element2.classList.toggle("bodyLight");
    let theme = "dark";
    if (element2.classList.contains("bodyLight")) {
      theme = "light";
    }
    localStorage.setItem("theme", theme);
    console.log(theme)
  });
});