let ON = false;
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('[href="#Switch"]').addEventListener('click', function () {
    if (ON == false) {
      let element = document.querySelector('.switch');
      element.classList.add("switchON");
      let element1 = document.querySelector('.switchBox');
      element1.classList.add("switchBoxON");
      let element2 = document.querySelector('body');
      element2.classList.add("bodyLight");
      ON = true
      // console.log(ON)
    } else if (ON == true) {
      let element = document.querySelector('.switch');
      element.classList.remove("switchON");
      let element1 = document.querySelector('.switchBox');
      element1.classList.remove("switchBoxON");
      let element2 = document.querySelector('body');
      element2.classList.remove("bodyLight");
      ON = false
      // console.log(ON)
    }
  });
});