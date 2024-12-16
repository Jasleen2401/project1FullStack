
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('click', (event) => {
  event.preventDefault();
  const isVisible = dropdownMenu.style.display === 'flex';
  dropdownMenu.style.display = isVisible ? 'none' : 'flex';
});

//third code
const searchToggle = document.getElementById('searchToggle');
const searchPopup = document.getElementById('searchPopup');

searchToggle.addEventListener('click', (e) => {
    e.preventDefault();
    searchPopup.classList.toggle('active');
});


//first code
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

// Function to update carousel position
function updateCarousel() {
  const offset = -currentIndex * 100; // Calculate offset based on current index
  carousel.style.transform = `translateX(${offset}%)`;
}

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop
  updateCarousel();
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop 
  updateCarousel();
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count-number");
  const speed = 200; // Adjust to control animation speed

  const countUp = (counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / speed;

      const updateCount = () => {
          const current = +counter.innerText;
          if (current < target) {
              counter.innerText = Math.ceil(current + increment);
              setTimeout(updateCount, 10); // Adjust time for smoothness
          } else {
              counter.innerText = target;
          }
      };

      updateCount();
  };
//second code
  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const counter = entry.target;
                  countUp(counter);
                  observer.unobserve(counter); // Stop observing after animation
              }
          });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  counters.forEach((counter) => {
      observer.observe(counter);
  });
});
//last code


// showText.js

function showText(element) {
  var textElement = element.querySelector('.text');
  if (textElement) {
      textElement.style.display = 'flex'; // Show the text
  }
}

function hideText(element) {
  var textElement = element.querySelector('.text');
  if (textElement) {
      textElement.style.display = 'none'; // Hide the text
  }
}

