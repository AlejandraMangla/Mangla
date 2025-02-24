/*=======SHOW MENU===========*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    //add show-menu  class to nav menu
    nav.classList.toggle("show-menu");
    //add show-icon to show and hide menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

/*---------------para mantener línea blanca en top bar-------------- */
const topbar = (toggleId) => {
  const toggle = document.getElementById(toggleId);

  toggle.addEventListener("click", () => {
    //add show-icon to show and hide menu icon
    toggle.classList.toggle("active");
  });
};

topbar("inicio", "desarrollo", "servicios", "contacto");
