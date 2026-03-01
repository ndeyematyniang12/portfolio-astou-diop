  const toggleBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("close-menu");
  const menu = document.getElementById("menu-overlay");

  toggleBtn.addEventListener("click", () => {
    menu.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
  });
