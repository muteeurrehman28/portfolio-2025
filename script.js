document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle functionality
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", function () {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    });
  
    // Bootstrap-like Form Validation for Contact Form
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        showAlert("Your message has been sent successfully!", "success");
        form.reset();
        form.classList.remove("was-validated");
      }
      form.classList.add("was-validated");
    });
  
    // Function to display alert messages in the Contact section
    function showAlert(message, type) {
      const alertPlaceholder = document.getElementById("alertPlaceholder");
      const alert = document.createElement("div");
      alert.className = `alert alert-${type}`;
      alert.textContent = message;
      alertPlaceholder.appendChild(alert);
      setTimeout(() => {
        alert.remove();
      }, 3000);
    }
  
    // Animate progress bars when the Home section is scrolled into view
    const progressBars = document.querySelectorAll('.progress-bar');
    const animateProgressBars = () => {
      progressBars.forEach(bar => {
        const target = bar.getAttribute('data-target');
        if (parseInt(bar.getAttribute('aria-valuenow')) < target) {
          let current = parseInt(bar.getAttribute('aria-valuenow'));
          const increment = Math.ceil(target / 50);
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            bar.style.width = current + '%';
            bar.setAttribute('aria-valuenow', current);
          }, 20);
        }
      });
    };
  
    // Trigger the progress bar animation on scroll (if in view)
    const homeSection = document.getElementById("home");
    const onScroll = () => {
      const rect = homeSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        animateProgressBars();
        window.removeEventListener('scroll', onScroll);
      }
    };
  
    window.addEventListener('scroll', onScroll);
    onScroll();
  });
  