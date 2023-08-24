// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Переключаем класс .dark-theme у <body>
  document.body.classList.toggle("dark-theme");
  // Допустим, тема светлая
  let theme = "light";
  // Если <body> содержит класс .dark-theme…
  if (document.body.classList.contains("dark-theme")) {
    // …тогда делаем тему тёмной
    theme = "dark";
  }
  // После чего сохраняем выбор в файле cookie
  document.cookie = "theme=" + theme;
});