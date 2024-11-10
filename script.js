// ***********************8menu section**********************************
                    // What customers say. TESTIMONY SECTION 
document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimonial-card");
    let current = 0;

    function showNextTestimonial() {
        testimonials.forEach((card, index) => {
            card.classList.remove("active");
        });
        
        testimonials[current].classList.add("active");
        current = (current + 1) % testimonials.length;
    }

    // Initial display and interval
    showNextTestimonial();
    setInterval(showNextTestimonial, 3500);
});

// *******************************************************************
// JavaScript to handle card flip on "See Details" and "Back" button clicks
                //types of food  MENU ENTREES 
function flipCard(event) {
    const card = event.target.closest('.menu-card');
    card.classList.add('flip');
  }
  
  function flipBack(event) {
    const card = event.target.closest('.menu-card');
    card.classList.remove('flip');
  }
  