
      // Mobile menu toggle
      const mobileMenuBtn = document.getElementById("mobile-menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Navbar scroll effect
      const navbar = document.getElementById("navbar");
      const logo = document.getElementById("logo");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          navbar.classList.add("navbar-scroll");
          logo.classList.remove("text-white");
          logo.classList.add("text-gray-900");

          // Change nav links color
          const navLinks = navbar.querySelectorAll("a");
          navLinks.forEach((link) => {
            if (!link.closest("#mobile-menu")) {
              link.classList.remove("text-white");
              link.classList.add("text-gray-900");
            }
          });

          // Change mobile menu button color
          mobileMenuBtn.classList.remove("text-white");
          mobileMenuBtn.classList.add("text-gray-900");
        } else {
          navbar.classList.remove("navbar-scroll");
          logo.classList.add("text-white");
          logo.classList.remove("text-gray-900");

          // Revert nav links color
          const navLinks = navbar.querySelectorAll("a");
          navLinks.forEach((link) => {
            if (!link.closest("#mobile-menu")) {
              link.classList.add("text-white");
              link.classList.remove("text-gray-900");
            }
          });

          // Revert mobile menu button color
          mobileMenuBtn.classList.add("text-white");
          mobileMenuBtn.classList.remove("text-gray-900");
        }
      });

      // Menu category switching
      const categoryBtns = document.querySelectorAll(".menu-category-btn");
      const menuItems = document.querySelectorAll(".menu-item");

      categoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const category = btn.dataset.category;

          // Update active button
          categoryBtns.forEach((b) => {
            b.classList.remove("active", "bg-orange-500", "text-white");
            b.classList.add("text-gray-600");
          });
          btn.classList.add("active", "bg-orange-500", "text-white");
          btn.classList.remove("text-gray-600");

          // Show/hide menu items
          menuItems.forEach((item) => {
            if (item.classList.contains(category)) {
              item.classList.remove("hidden");
            } else {
              item.classList.add("hidden");
            }
          });
        });
      });

      // Initialize first category as active
      document
        .querySelector('.menu-category-btn[data-category="appetizers"]')
        .classList.add("bg-orange-500", "text-white");

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

            // Close mobile menu if open
            mobileMenu.classList.add("hidden");
          }
        });
      });

      // Fade in animation on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);

      // Observe all fade-in elements
      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.observe(el);
      });

      // Form submission
      document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert(
          "Thank you for your reservation request! We will contact you shortly to confirm."
        );
      });

      // Order button functionality
      document.querySelectorAll("button").forEach((btn) => {
        if (btn.textContent.trim() === "Order Now") {
          btn.addEventListener("click", function () {
            const dishName =
              this.closest(".menu-item").querySelector("h3").textContent;
            alert(`Added ${dishName} to your order!`);
          });
        }
      });

      // Review slider functionality
      const reviewSlides = document.querySelectorAll(
        "#review-slider .review-slide"
      );
      let currentReview = 0;

      function showReview(index) {
        reviewSlides.forEach((slide, i) => {
          slide.style.display = i === index ? "block" : "none";
        });
      }

      document.getElementById("prev-review").addEventListener("click", () => {
        currentReview =
          (currentReview - 1 + reviewSlides.length) % reviewSlides.length;
        showReview(currentReview);
      });

      document.getElementById("next-review").addEventListener("click", () => {
        currentReview = (currentReview + 1) % reviewSlides.length;
        showReview(currentReview);
      });

      // Show first review on load
      showReview(currentReview);

       // Theme toggle logic
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  // Check for saved theme in localStorage
  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    themeIcon.classList.toggle('fa-moon', !isDark);
    themeIcon.classList.toggle('fa-sun', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
    tailwind.config = {
    darkMode: 'class'
  }
  