// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Scroll-to-Top Button Visibility
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    event.preventDefault();
  }
});
