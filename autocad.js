
/* Sous-menu mobile */
document.querySelectorAll('.dropdown-submenu > a').forEach(function(element){
  element.addEventListener('click', function(e){
    if(window.innerWidth < 992){
      e.preventDefault();
      e.stopPropagation();
      let submenu = this.nextElementSibling;
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    }
  });
});

/* Bouton retour haut */
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function(){
  scrollBtn.style.display =
    document.documentElement.scrollTop > 300 ? "block" : "none";
};

scrollBtn.onclick = function(){
  window.scrollTo({ top:0, behavior:'smooth' });
};
