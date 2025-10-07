function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! Thank you for reaching out.');
});
