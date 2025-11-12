window.addEventListener("DOMContentLoaded", () => {

  (function () {
    emailjs.init("Po4FXEHTafrKPyAaA"); 
  })();

  // --- Contact form submission ---
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_94tvd8d", "template_wukv5rc", this).then(
        function () {
          alert("✅ Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("❌ Failed to send message. Please try again later.");
          console.error("EmailJS error:", error);
        }
      );
    });
  }

  
  const mainContent = document.getElementById("mainContent");
  const navLinks = document.querySelectorAll(".nav-link");

  
  if (mainContent) {
    mainContent.style.opacity = "0";
    mainContent.style.transform = "translateY(80px)";
  }

  function showMainContent() {
    if (mainContent && mainContent.style.opacity !== "1") {
      mainContent.style.opacity = "1";
      mainContent.style.transform = "translateY(0)";
    }
  }


  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.2) {
      showMainContent();
    }
  });

  
  navLinks.forEach(link => {
    link.addEventListener("click", showMainContent);
  });

  
  setTimeout(showMainContent, 3000);
});
