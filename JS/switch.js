document.addEventListener("DOMContentLoaded", function () {
  // Код будет выполняться, когда структура HTML-документа полностью загрузится.

  // Получаем ссылки на элементы страницы
  let switchButton = document.querySelector('.switch'); // Кнопка переключения темы
  let switchButtonBox = document.querySelector('.switchBox'); // Обертка для кнопки
  let body = document.querySelector('body'); // Тело документа
  let discriptionBoxes = document.querySelectorAll('.infoBox'); // Все контейнеры с классом .infoBox
  let photoBox = document.querySelector('.headPhoto'); // Контейнер для фотографии
  let lightMainBox = document.querySelector('.navigationMainBox');
  let AButtons = document.querySelectorAll('.AButtons');
  let headNavigationBoxLight = document.querySelector('.headNavigationBox');
  let spanLineBlack = document.querySelectorAll('.spanLine');
  let spanBorder = document.querySelectorAll('.spanRadius');
  let telLight = document.querySelector('.tel');
  let windowMenuLight = document.querySelector('.windowMenu');
  let closeButtonMenuLight = document.querySelector('.closeButtonMenu');
  let buttonNavigationLight = document.querySelector('.buttonNavigation');
  let StarLight = document.querySelector('.Star');
  let numCardLight = document.querySelectorAll('.numCard');
  //====================================================| ANIMATED OBJECTS
  let animCardLight_1 = document.querySelector('.animCard_1');
  let animCardLight_2 = document.querySelector('.animCard_2');
  let animCardLight_3 = document.querySelector('.animCard_3');
  //====================================================| ANIMATED OBJECTS
  let URLMenuButtonLight = document.querySelector('.URLMenuButton');

  // Получаем текущую тему из локального хранилища
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    toggleThemeClasses(); // Если тема светлая, сразу применяем соответствующие классы
  }

  // Добавляем обработчик события на клик по переключателю темы
  document.querySelector('[href="#Switch"]').addEventListener('click', function () {
    toggleThemeClasses(); // Вызываем функцию для переключения классов и темы

    // Определяем новую тему
    let theme = body.classList.contains("bodyLight") ? "light" : "dark";
    localStorage.setItem("theme", theme); // Сохраняем выбранную тему в локальном хранилище
  });

  // Функция для переключения классов и темы
  function toggleThemeClasses() {
    // Используем метод .toggle() для добавления/удаления классов
    switchButton.classList.toggle("switchON"); // Переключаем класс .switchON
    switchButtonBox.classList.toggle("switchBoxON"); // Переключаем класс .switchBoxON
    body.classList.toggle("bodyLight"); // Переключаем класс .bodyLight
    photoBox.classList.toggle("headPhoto"); // Переключаем класс .headPhoto
    photoBox.classList.toggle("headPhotoLight"); // Переключаем класс .headPhotoLight
    lightMainBox.classList.toggle("navigationMainBox");
    lightMainBox.classList.toggle("lightMainBox");
    headNavigationBoxLight.classList.toggle("headNavigationBoxLight");
    telLight.classList.toggle("tel");
    telLight.classList.toggle("telLight");
    windowMenuLight.classList.toggle("windowMenu");
    windowMenuLight.classList.toggle("windowMenuLight");
    closeButtonMenuLight.classList.toggle("closeButtonMenuLight");
    buttonNavigationLight.classList.toggle("buttonNavigationLight");
    StarLight.classList.toggle("Star");
    StarLight.classList.toggle("StarLight");
    //====================================================| ANIMATED OBJECTS
    animCardLight_1.classList.toggle("animCard_1");
    animCardLight_1.classList.toggle("animCardLight_1");
    animCardLight_2.classList.toggle("animCard_2");
    animCardLight_2.classList.toggle("animCardLight_2");
    animCardLight_3.classList.toggle("animCard_3");
    animCardLight_3.classList.toggle("animCardLight_3");
    //====================================================| ANIMATED OBJECTS
    URLMenuButtonLight.classList.toggle("URLMenuButton");
    URLMenuButtonLight.classList.toggle("URLMenuButtonLight");
    
    // Переключаем классы для всех контейнеров .infoBox
    discriptionBoxes.forEach(function(box) {
      box.classList.toggle("discriptionElementWindow"); // Переключаем класс .discriptionElementWindow
      box.classList.toggle("infoBox"); // Переключаем класс .infoBox
    });
    AButtons.forEach(function(button){
      button.classList.toggle("mainButtonsLight");
      button.classList.toggle("AButtons");
    });
    spanLineBlack.forEach(function(span){
      // span.classList.toggle("spanRadius");
      span.classList.toggle("spanLine");
      span.classList.toggle("spanLineBlack");
    });
    spanBorder.forEach(function(spanBorder){
      spanBorder.classList.toggle("spanBorder");
    });
    numCardLight.forEach(function(numCardLight){
      numCardLight.classList.toggle("numCardLight");
      numCardLight.classList.toggle("numCard");
    });
  }
});
