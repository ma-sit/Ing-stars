/**
 * MAIN.JS
 * Script principal pour le site IngéFutur
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialisation des composants
  initMobileMenu();
  initHeroSlider();
  initTestimonials();
  initCounters();
  initScrollEvents();
  initThemeToggle();
  initNewsletterForm();
  initSearchForm();
});

/**
 * Initialisation du menu mobile
 */
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (!mobileMenuToggle || !mainNav) return;
  
  mobileMenuToggle.addEventListener('click', function() {
    mobileMenuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Fermer le menu quand on clique sur un lien
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}

/**
 * Initialisation du slider de la page d'accueil
 */
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');
  
  if (!slides.length || !dots.length) return;
  
  let currentSlide = 0;
  let slideInterval;

  // Afficher un slide spécifique
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  // Passer au slide suivant
  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  // Passer au slide précédent
  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  // Démarrer le défilement automatique
  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Arrêter le défilement automatique
  function stopSlideInterval() {
    clearInterval(slideInterval);
  }

  // Événements pour les boutons précédent et suivant
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevSlide();
      stopSlideInterval();
      startSlideInterval();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextSlide();
      stopSlideInterval();
      startSlideInterval();
    });
  }

  // Événements pour les points indicateurs
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showSlide(index);
      stopSlideInterval();
      startSlideInterval();
    });
  });

  // Démarrer le défilement automatique
  startSlideInterval();

  // Arrêter le défilement au survol du slider
  const sliderContainer = document.querySelector('.slider-container');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopSlideInterval);
    sliderContainer.addEventListener('mouseleave', startSlideInterval);
  }
}

/**
 * Initialisation du carousel de témoignages
 */
function initTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const prevBtn = document.querySelector('.prev-testimonial');
  const nextBtn = document.querySelector('.next-testimonial');
  
  if (!testimonials.length || !dots.length) return;
  
  let currentTestimonial = 0;
  let testimonialInterval;

  // Afficher un témoignage spécifique
  function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
  }

  // Passer au témoignage suivant
  function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
  }

  // Passer au témoignage précédent
  function prevTestimonial() {
    const prev = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prev);
  }

  // Démarrer le défilement automatique
  function startTestimonialInterval() {
    testimonialInterval = setInterval(nextTestimonial, 7000);
  }

  // Arrêter le défilement automatique
  function stopTestimonialInterval() {
    clearInterval(testimonialInterval);
  }

  // Événements pour les boutons précédent et suivant
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevTestimonial();
      stopTestimonialInterval();
      startTestimonialInterval();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextTestimonial();
      stopTestimonialInterval();
      startTestimonialInterval();
    });
  }

  // Événements pour les points indicateurs
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showTestimonial(index);
      stopTestimonialInterval();
      startTestimonialInterval();
    });
  });

  // Démarrer le défilement automatique
  startTestimonialInterval();

  // Arrêter le défilement au survol du carousel
  const testimonialContainer = document.querySelector('.testimonials-container');
  if (testimonialContainer) {
    testimonialContainer.addEventListener('mouseenter', stopTestimonialInterval);
    testimonialContainer.addEventListener('mouseleave', startTestimonialInterval);
  }
}

/**
 * Animation des compteurs
 */
function initCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  
  if (!counters.length) return;
  
  let counted = false;

  // Fonction d'animation des compteurs
  function animateCounters() {
    if (counted) return;
    
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;
    
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition < screenPosition) {
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 secondes
        const step = target / (duration / 20); // 20ms par étape
        let current = 0;
        
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.innerText = Math.ceil(current);
            setTimeout(updateCounter, 20);
          } else {
            counter.innerText = target;
          }
        };
        
        updateCounter();
      });
      
      counted = true;
    }
  }

  // Déclencher l'animation au défilement
  window.addEventListener('scroll', animateCounters);
  
  // Vérifier une première fois au chargement de la page
  animateCounters();
}

/**
 * Initialisation des événements liés au défilement
 */
function initScrollEvents() {
  const header = document.querySelector('header');
  const backToTop = document.querySelector('.back-to-top');
  
  // Modification du header au défilement
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // Bouton "Retour en haut" au défilement
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * Gestion du changement de thème (clair/sombre)
 */
function initThemeToggle() {
  const lightModeBtn = document.getElementById('light-mode');
  const darkModeBtn = document.getElementById('dark-mode');
  
  if (!lightModeBtn || !darkModeBtn) return;
  
  // Vérifier le thème enregistré
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    lightModeBtn.classList.remove('active');
    darkModeBtn.classList.add('active');
  }
  
  // Passer au mode clair
  lightModeBtn.addEventListener('click', function() {
    document.body.classList.remove('dark-theme');
    darkModeBtn.classList.remove('active');
    lightModeBtn.classList.add('active');
    localStorage.setItem('theme', 'light');
  });
  
  // Passer au mode sombre
  darkModeBtn.addEventListener('click', function() {
    document.body.classList.add('dark-theme');
    lightModeBtn.classList.remove('active');
    darkModeBtn.classList.add('active');
    localStorage.setItem('theme', 'dark');
  });
}

/**
 * Gestion du formulaire de newsletter
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = form.querySelector('input[type="email"]');
    const consentCheckbox = form.querySelector('input[type="checkbox"]');
    
    if (!emailInput || !consentCheckbox) return;
    
    if (emailInput.value && consentCheckbox.checked) {
      // Simuler un envoi réussi (à remplacer par l'API réelle)
      showNotification('Merci pour votre inscription à notre newsletter !', 'success');
      form.reset();
    } else {
      // Afficher une erreur
      showNotification('Veuillez remplir tous les champs requis.', 'error');
    }
  });
}

/**
 * Gestion du formulaire de recherche
 */
function initSearchForm() {
  const form = document.getElementById('search-form');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const searchInput = form.querySelector('input');
    
    if (!searchInput || !searchInput.value.trim()) {
      showNotification('Veuillez entrer un terme de recherche.', 'error');
      return;
    }
    
    // Rediriger vers la page de résultats (à implémenter)
    showNotification('Recherche en cours pour : ' + searchInput.value, 'info');
    // window.location.href = 'search.html?q=' + encodeURIComponent(searchInput.value);
  });
}

/**
 * Fonction d'affichage de notifications
 */
function showNotification(message, type = 'info') {
  // Supprimer les notifications existantes
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => {
    notification.remove();
  });
  
  // Créer la notification
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <p>${message}</p>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Ajouter la notification au DOM
  document.body.appendChild(notification);
  
  // Afficher la notification avec un délai
  setTimeout(() => {
    notification.classList.add('active');
  }, 10);
  
  // Fermer la notification au clic sur le bouton
  const closeBtn = notification.querySelector('.notification-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      notification.classList.remove('active');
      setTimeout(() => {
        notification.remove();
      }, 300);
    });
  }
  
  // Fermer automatiquement après 5 secondes
  setTimeout(() => {
    if (notification.parentNode) {
      notification.classList.remove('active');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }
  }, 5000);
}

// Ajouter les styles de notification au chargement
function addNotificationStyles() {
  // Créer l'élément style
  const style = document.createElement('style');
  
  // Ajouter les règles CSS
  style.textContent = `
    .notification {
      position: fixed;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%) translateY(100%);
      z-index: ${Number.MAX_SAFE_INTEGER};
      width: 90%;
      max-width: 400px;
      opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
    
    .notification.active {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    
    .notification-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
    }
    
    .notification p {
      margin: 0;
    }
    
    .notification-close {
      background: none;
      border: none;
      font-size: 1.25rem;
      margin-left: 1rem;
      cursor: pointer;
    }
    
    .notification.success .notification-content {
      background-color: var(--success);
      color: white;
    }
    
    .notification.error .notification-content {
      background-color: var(--danger);
      color: white;
    }
    
    .notification.info .notification-content {
      background-color: var(--info);
      color: white;
    }
    
    .notification.warning .notification-content {
      background-color: var(--warning);
      color: white;
    }
  `;
  
  // Ajouter l'élément style au head
  document.head.appendChild(style);
}

// Ajouter les styles de notification
addNotificationStyles();