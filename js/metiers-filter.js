/**
 * METIERS-FILTER.JS
 * Filtrage des spécialités d'ingénieur par catégorie
 */

document.addEventListener('DOMContentLoaded', function() {
  initSpecialitiesFilter();
});

/**
 * Initialisation du système de filtrage des spécialités
 */
function initSpecialitiesFilter() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const specialityCards = document.querySelectorAll('.speciality-card');
  
  if (!tabButtons.length || !specialityCards.length) return;
  
  // Fonction pour filtrer les spécialités
  function filterSpecialities(category) {
    specialityCards.forEach(card => {
      // Si la catégorie est "all" ou la carte a la catégorie sélectionnée
      if (category === 'all' || card.dataset.categories.includes(category)) {
        card.style.display = 'block';
        // Animation d'apparition
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        // Animation de disparition
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }
  
  // Événements des boutons de filtre
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Mise à jour des boutons actifs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filtrer les spécialités
      const category = this.getAttribute('data-category');
      filterSpecialities(category);
    });
  });
  
  // Initialiser avec toutes les spécialités
  specialityCards.forEach(card => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });
}

/**
 * Fonction pour les détails d'une spécialité
 * (à implémenter pour les liens "En savoir plus")
 */
function showSpecialityDetails(specialityId) {
  // Cette fonction serait implémentée pour afficher une modal ou rediriger vers une page détaillée
  console.log(`Afficher les détails de la spécialité: ${specialityId}`);
  
  // Exemple: redirection vers une ancre de la page
  window.location.href = `#${specialityId}`;
}