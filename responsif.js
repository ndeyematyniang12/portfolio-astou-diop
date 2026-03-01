document.querySelectorAll('.dropdown-submenu > a').forEach(function(element){
  element.addEventListener('click', function(e){
    if(window.innerWidth < 992){
      e.preventDefault();
      e.stopPropagation();
      let submenu = this.nextElementSibling;

      if(submenu.style.display === "block"){
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    }
  });
});
