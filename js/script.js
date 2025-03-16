/* js/script.js */
// document.addEventListener('DOMContentLoaded', () => {
//   const animatedElements = document.querySelectorAll('.animate__animated');
//   animatedElements.forEach(elem => {
//     // You can add more dynamic interactions here if needed.
//     elem.classList.add('animate__fadeIn');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  // Initially hide all animated elements
  const animatedElements = document.querySelectorAll('.animate__animated');
  animatedElements.forEach(elem => {
    // Store the animation class
    const animationClass = [...elem.classList].find(c => c.startsWith('animate__') && c !== 'animate__animated');
    if (animationClass) {
      // Remove the animation class temporarily
      elem.classList.remove(animationClass);
      // Add this class to prevent flickering
      elem.classList.add('opacity-0');
      // Store the original animation class as a data attribute
      elem.dataset.animation = animationClass;
    }
  });
  
  // Set up the intersection observer to trigger animations when scrolled into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        // Get the stored animation class
        const animationClass = element.dataset.animation;
        if (animationClass) {
          // Remove the opacity-0 class and add back the animation class
          element.classList.remove('opacity-0');
          element.classList.add(animationClass);
          // Unobserve after animation is triggered
          observer.unobserve(element);
        }
      }
    });
  }, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible
  
  // Observe all animated elements
  animatedElements.forEach(elem => {
    observer.observe(elem);
  });
});


function toggleDetails(element) {
  const details = element.nextElementSibling;
  details.style.display = details.style.display === "block" ? "none" : "block";
}


document.addEventListener("DOMContentLoaded", function() {
const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function(e) {
  navMenu.classList.toggle("active");
  e.stopPropagation();
});

document.addEventListener("click", function(e) {
  if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && e.target !== menuToggle) {
    navMenu.classList.remove("active");
  }
});
});
