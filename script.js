// Form submission handler
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Form validation
    alert("Message sent successfully! I'll get back to you shortly.");

    // Clear the form
    this.reset();
  });
