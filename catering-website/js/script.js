// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.highlight, .service, .mv-item').forEach(el => {
    observer.observe(el);
});

// CSS for fade-in
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .highlight, .service, .mv-item {
        opacity: 0;
        transform: translateY(20px);
    }
`;
document.head.appendChild(style);

// Lightbox functionality
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

if (galleryImages.length > 0) {
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.dataset.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

// Menu tabs functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const menuCategories = document.querySelectorAll('.menu-category');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            menuCategories.forEach(cat => cat.classList.remove('active'));
            btn.classList.add('active');
            const category = document.getElementById(btn.dataset.category);
            if (category) category.classList.add('active');
        });
    });
}


// Show scroll-to-top button when scrolling
const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Smooth scroll to top
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// EmailJS newsletter form sending
const newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = this.email.value.trim();

  if (!emailInput) {
    alert("Please enter your email address.");
    return;
  }

  // Send email using EmailJS (replace placeholders with your EmailJS data)
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      user_email: emailInput,
    })
    .then(
      function (response) {
        alert("Thank you for subscribing!");
        newsletterForm.reset();
      },
      function (error) {
        alert("Oops! Something went wrong. Please try again.");
        console.error("EmailJS error:", error);
      }
    );
});


// slider

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-nav.prev');
  const nextBtn = document.querySelector('.slider-nav.next');
  let current = 0;
  const slidesToShow = 2; // Show 2 at a time (adjust as needed)
  const total = slides.length;

  function updateSlider() {
    const slideWidth = slides[0].clientWidth + 28; // 14px margin each side
    track.style.transform = `translateX(-${current * slideWidth}px)`;
  }

  prevBtn.addEventListener('click', function() {
    if (current > 0) current--;
    updateSlider();
  });

  nextBtn.addEventListener('click', function() {
    if (current < total - slidesToShow) current++;
    updateSlider();
  });

  // Optional auto-slide
  setInterval(() => {
    nextBtn.click();
  }, 6000);

  updateSlider();
  window.addEventListener('resize', updateSlider);
});


// Testimonials


// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('nav-open');
    this.classList.toggle('open');
});

// Close menu when clicking a link
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('navMenu').classList.remove('nav-open');
        document.getElementById('hamburger').classList.remove('open');
    });
});

