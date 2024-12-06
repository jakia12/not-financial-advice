
// navclose
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Hide the navbar collapsef
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      bootstrap.Collapse.getInstance(navbarCollapse).hide();
    }
  });
});

// Animation
// Function to handle the intersection of the target elements
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      const animationClass = targetElement.dataset.animation;

      if (animationClass) {
        targetElement.classList.add(animationClass);
        // Remove the animate-on-scroll class to prevent animation on subsequent scrolls
        targetElement.classList.remove("animate-on-scroll");
      }
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const observer = new IntersectionObserver(handleIntersection, options);

// Observe all elements with the "animate-on-scroll" class
const animatedElements = document.querySelectorAll(".animate-on-scroll");
animatedElements.forEach((element) => {
  observer.observe(element);
});

   
   

        //  copy

    
		function copyToClipboard1() {
			// Create a textarea element to hold the text to be copied
			var textArea = document.createElement("textarea");
			textArea.value = "xxxxxxxxxxxxxxxxxxxxxx";
			document.body.appendChild(textArea);

			// Select and copy the text
			textArea.select();
			document.execCommand('copy');

			// Remove the textarea
			document.body.removeChild(textArea);

			// Display a message (optional)
			alert("Text copied to clipboard!");
		}





    // accordion
    document.addEventListener('DOMContentLoaded', () => {
      const togglers = document.querySelectorAll('[data-toggle]');
      
        togglers.forEach((btn) => {
          btn.addEventListener('click', (e) => {
             const selector = e.currentTarget.dataset.toggle
             const block = document.querySelector(`${selector}`);
            if (e.currentTarget.classList.contains('active')) {
              block.style.maxHeight = '';
            } else {
              block.style.maxHeight = block.scrollHeight + 'px';
            }
              
             e.currentTarget.classList.toggle('active')
          })
        })
      })




      // nav
          document.addEventListener('DOMContentLoaded', function() {
              const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
              const navbarToggler = document.querySelector('.navbar-toggler');
              const navbarCollapse = document.querySelector('.navbar-collapse');
  
              navLinks.forEach(link => {
                  link.addEventListener('click', function(e) {
                      e.preventDefault();
                      const targetId = this.getAttribute('href');
                      const targetSection = document.querySelector(targetId);
  
                      if (targetSection) {
                          targetSection.scrollIntoView({ behavior: 'smooth' });
                      }
  
                      // Close the navbar if it's open (for mobile view)
                      if (navbarCollapse.classList.contains('show')) {
                          navbarToggler.click();
                      }
                  });
              });
          });




          