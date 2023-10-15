document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('[href="#OpenBlock1"]').addEventListener('click',function(){
      let element = document.querySelector('[href="#ModalDiscription"]');
      element.classList.remove("hide");
      document.body.style.overflow = 'hidden';
    });
    document.querySelector('[href="#Close1"]').addEventListener('click',function(){
      let element = document.querySelector('[href="#ModalDiscription"]');
      element.classList.add("hide");
      document.body.style.overflow = 'visible';
        });
});