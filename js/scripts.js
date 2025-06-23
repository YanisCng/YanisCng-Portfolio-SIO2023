/*!
 * Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 72,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// Custom animations and interactions
document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));

  // Add hover effects to portfolio items
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Enhanced navbar background change on scroll
  function updateNavbar() {
    const navbar = document.getElementById("mainNav");
    if (window.scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }

  window.addEventListener("scroll", updateNavbar);

  // Animate progress bars when they come into view
  const progressBars = document.querySelectorAll(".progress-bar");
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const width = progressBar.style.width;
          progressBar.style.width = "0%";
          setTimeout(() => {
            progressBar.style.width = width;
            progressBar.style.transition = "width 2s ease-in-out";
          }, 300);
        }
      });
    },
    { threshold: 0.5 }
  );

  progressBars.forEach((bar) => progressObserver.observe(bar));

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add floating animation to footer social icons
  const socialIcons = document.querySelectorAll(".social-icon");
  socialIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.1}s`;
    icon.addEventListener("mouseenter", function () {
      this.style.animation = "none";
      this.style.transform = "translateY(-8px) scale(1.15) rotate(5deg)";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.animation = "";
      this.style.transform = "";
    });
  });

  // Add parallax effect to masthead background elements
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(
      ".masthead .position-absolute.rounded-circle"
    );

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Scroll progress indicator
  const scrollIndicator = document.getElementById("scrollIndicator");
  if (scrollIndicator) {
    window.addEventListener("scroll", function () {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      scrollIndicator.style.transform = `scaleX(${scrollPercent})`;
    });
  }

  // Add loading animation for images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    if (img.complete) {
      img.style.opacity = "1";
    } else {
      img.addEventListener("load", function () {
        this.style.opacity = "1";
      });
    }
  });
});
