document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('[href="#OpenBlock1"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription"]');
    element.classList.remove("hide");
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('[href="#Close1"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription"]');
    element.classList.add("hide");
    document.body.style.overflow = 'visible';
  });

  document.querySelector('[href="#OpenBlock2"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription1"]');
    element.classList.remove("hide");
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('[href="#Close2"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription1"]');
    element.classList.add("hide");
    document.body.style.overflow = 'visible';
  });

  document.querySelector('[href="#OpenBlock3"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription2"]');
    element.classList.remove("hide");
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('[href="#Close3"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription2"]');
    element.classList.add("hide");
    document.body.style.overflow = 'visible';
  });

  document.querySelector('[href="#OpenBlock4"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription3"]');
    element.classList.remove("hide");
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('[href="#Close4"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription3"]');
    element.classList.add("hide");
    document.body.style.overflow = 'visible';
  });

  document.querySelector('[href="#OpenBlock5"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription4"]');
    element.classList.remove("hide");
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('[href="#Close5"]').addEventListener('click', function () {
    let element = document.querySelector('[href="#ModalDiscription4"]');
    element.classList.add("hide");
    document.body.style.overflow = 'visible';
  });
});