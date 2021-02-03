// Global variables
const burger = document.querySelector(".burger-box");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links a");
// const questions = [];

// Functions
function navMovement() {
  nav.classList.toggle("nav-active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
}

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to("#line1", 0.5, { rotate: 45, y: 8 });
    gsap.to("#line2", 1, { background: "none" });
    gsap.to("#line3", 2, {
      rotate: -225,
      y: -8,
      ease: "bounce.out",
    });
    navMovement();
  } else {
    e.target.classList.remove("active");
    gsap.to("#line1", 0.5, { rotate: 0, y: 0 });
    gsap.to("#line2", 1, { background: "black" });
    gsap.to("#line3", 2, {
      rotate: 0,
      y: 0,
      ease: "bounce.out",
    });
    navMovement();
  }
}

// Event listeners
burger.addEventListener("click", navToggle);
