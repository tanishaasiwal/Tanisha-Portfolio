const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Open / Close menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when any nav link is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
