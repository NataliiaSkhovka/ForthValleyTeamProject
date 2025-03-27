document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector("header");

    // Toggle Mobile Menu
    burger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Change Header Background on Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

function toggleVisibility(hiddenTextId, toggleIconId) {
    const hiddenText = document.getElementById(hiddenTextId);
    const toggleIcon = document.getElementById(toggleIconId);

    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        toggleIcon.className = "fas fa-chevron-up"; // Change to "chevron-up"
    } else {
        hiddenText.style.display = "none";
        toggleIcon.className = "fas fa-chevron-down"; // Change back to "chevron-down"
    }
}

// Scrole activates animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(
      '.tracking-in-expand-fwd, .tracking-in-contract-bck-bottom, .text-shadow-pop-tr, .scale-in-top'
    );
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'; // Make visible
          entry.target.style.animationPlayState = 'running'; // Activate animation
        }
      });
    });
  
    elements.forEach((el) => {
      el.style.animationPlayState = 'paused'; // Pause animations by default
      observer.observe(el);
    });
  });

//   Form
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      // Simulate successful submission
      document.getElementById('successMessage').classList.remove('hidden');
      document.getElementById('errorMessage').classList.add('hidden');
      // Clear form fields
      this.reset();
    } else {
      // Show error message
      document.getElementById('successMessage').classList.add('hidden');
      document.getElementById('errorMessage').classList.remove('hidden');
    }
  });
  