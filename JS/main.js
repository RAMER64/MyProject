document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('[href="#Menu"]').addEventListener('click',function(){
      let element = document.querySelector('.menuBlackBackground');
      element.classList.remove("hide");
      document.body.style.overflow = 'hidden';
    });
    document.querySelector('[href="#Close"]').addEventListener('click',function(){
      let element = document.querySelector('.menuBlackBackground');
      element.classList.add("hide");
      document.body.style.overflow = 'visible';
        });
});