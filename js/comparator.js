        admissionRate: 40,
        studentCount: 10000,
        internationalStudents: 5,
        employmentRate: 90,
        averageSalary: 36000
      },
      description: "L'École d'Ingénieurs CESI propose des formations d'ingénieurs en alternance ou en formation initiale sur plusieurs campus en France, avec une approche pratique orientée vers les besoins de l'industrie.",
      strengths: [
        "Formation en alternance de qualité",
        "Réseau national de campus",
        "Proximité avec les entreprises",
        "Accessibilité (post-bac et admission parallèle)",
        "Approche pédagogique par projets"
      ],
      website: "https://www.cesi.fr"
    },
    {
      id: 'isae-supaero',
      name: 'ISAE-SUPAERO',
      shortName: 'SUPAERO',
      logo: 'img/logos/isae-supaero.svg',
      type: 'publique',
      location: 'Toulouse',
      region: 'Occitanie',
      admissionTypes: ['CPGE', 'Admission sur titre'],
      specialities: ['Aéronautique', 'Aérospatial', 'Mécanique', 'Systèmes embarqués', 'Intelligence artificielle'],
      ranking: {
        national: 5,
        international: 98
      },
      fees: {
        cpge: 2500,
        international: 9000
      },
      stats: {
        admissionRate: 7,
        studentCount: 1700,
        internationalStudents: 35,
        employmentRate: 97,
        averageSalary: 44000
      },
      description: "L'ISAE-SUPAERO est une école d'ingénieurs française spécialisée dans les domaines de l'aéronautique et de l'aérospatial, offrant une formation d'excellence reconnue mondialement.",
      strengths: [
        "Référence mondiale en aéronautique et aérospatial",
        "Partenariats industriels majeurs (Airbus, Thales, Safran)",
        "Excellence de la recherche",
        "Réseau international d'universités partenaires",
        "Campus et installations de pointe"
      ],
      website: "https://www.isae-supaero.fr"
    },
    {
      id: 'epf',
      name: 'EPF - École d\'Ingénieur·e·s',
      shortName: 'EPF',
      logo: 'img/logos/epf.svg',
      type: 'privée',
      location: 'Sceaux, Troyes, Montpellier',
      region: 'Plusieurs régions',
      admissionTypes: ['Post-bac', 'Admission parallèle'],
      specialities: ['Généraliste', 'Aéronautique', 'Énergie', 'Environnement', 'Numérique', 'Santé'],
      ranking: {
        national: 25,
        international: 0
      },
      fees: {
        postbac: 8900,
        international: 11000
      },
      stats: {
        admissionRate: 30,
        studentCount: 2400,
        internationalStudents: 15,
        employmentRate: 90,
        averageSalary: 38000
      },
      description: "L'EPF est une école d'ingénieurs généralistes qui s'est illustrée par son engagement en faveur de la mixité dans les formations d'ingénieurs, avec une proportion de femmes plus élevée que la moyenne nationale.",
      strengths: [
        "Formation généraliste avec spécialisation progressive",
        "Engagement pour la parité femmes-hommes",
        "Approche pédagogique innovante",
        "Possibilité de mobilité entre les campus",
        "Nombreux partenariats internationaux"
      ],
      website: "https://www.epf.fr"
    }
  ];
}

/**
 * Créer l'interface du comparateur
 */
function renderComparator(schools) {
  const comparatorContainer = document.getElementById('school-comparator');
  
  let comparatorHTML = `
    <div class="comparator-header">
      <h2>Comparer les écoles d'ingénieurs</h2>
      <p>Sélectionnez jusqu'à 3 écoles pour les comparer</p>
    </div>
    
    <div class="comparator-selection">
      <div class="search-filters">
        <div class="form-group">
          <label for="school-search">Rechercher une école</label>
          <input type="text" id="school-search" placeholder="Nom de l'école...">
        </div>
        
        <div class="filter-group">
          <div class="form-group">
            <label for="type-filter">Type d'école</label>
            <select id="type-filter">
              <option value="">Tous les types</option>
              <option value="publique">Publique</option>
              <option value="privée">Privée</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="region-filter">Région</label>
            <select id="region-filter">
              <option value="">Toutes les régions</option>
              <option value="Île-de-France">Île-de-France</option>
              <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
              <option value="Occitanie">Occitanie</option>
              <option value="National">Plusieurs régions</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="admission-filter">Admission</label>
            <select id="admission-filter">
              <option value="">Tous types d'admission</option>
              <option value="CPGE">Classe préparatoire</option>
              <option value="Post-bac">Post-bac</option>
              <option value="Admission parallèle">Admission parallèle</option>
              <option value="Alternance">Alternance</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="speciality-filter">Spécialité</label>
            <select id="speciality-filter">
              <option value="">Toutes les spécialités</option>
              <option value="Informatique">Informatique</option>
              <option value="Mécanique">Mécanique</option>
              <option value="Génie civil">Génie civil</option>
              <option value="Aéronautique">Aéronautique</option>
              <option value="Énergie">Énergie</option>
              <option value="Télécommunications">Télécommunications</option>
              <option value="Environnement">Environnement</option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="selected-schools">
        <div class="selected-slot" data-slot="0">
          <div class="empty-slot">
            <i class="fas fa-plus"></i>
            <p>Sélectionnez une école</p>
          </div>
        </div>
        <div class="selected-slot" data-slot="1">
          <div class="empty-slot">
            <i class="fas fa-plus"></i>
            <p>Sélectionnez une école</p>
          </div>
        </div>
        <div class="selected-slot" data-slot="2">
          <div class="empty-slot">
            <i class="fas fa-plus"></i>
            <p>Sélectionnez une école</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="schools-list-container">
      <h3>Liste des écoles</h3>
      <div class="schools-list">
        <!-- La liste des écoles sera générée dynamiquement ici -->
      </div>
    </div>
    
    <div class="comparison-results">
      <!-- Les résultats de comparaison seront affichés ici -->
    </div>
  `;
  
  comparatorContainer.innerHTML = comparatorHTML;
  
  // Générer la liste des écoles
  renderSchoolsList(schools);
}

/**
 * Générer la liste des écoles
 */
function renderSchoolsList(schools, filters = {}) {
  const schoolsListContainer = document.querySelector('.schools-list');
  
  // Filtrer les écoles selon les critères
  let filteredSchools = schools;
  
  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredSchools = filteredSchools.filter(school => 
      school.name.toLowerCase().includes(searchTerm) || 
      school.shortName.toLowerCase().includes(searchTerm)
    );
  }
  
  if (filters.type) {
    filteredSchools = filteredSchools.filter(school => school.type === filters.type);
  }
  
  if (filters.region) {
    filteredSchools = filteredSchools.filter(school => school.region === filters.region);
  }
  
  if (filters.admission) {
    filteredSchools = filteredSchools.filter(school => 
      school.admissionTypes.includes(filters.admission)
    );
  }
  
  if (filters.speciality) {
    filteredSchools = filteredSchools.filter(school => 
      school.specialities.includes(filters.speciality)
    );
  }
  
  // Obtenir les écoles déjà sélectionnées
  const selectedSchoolIds = [];
  document.querySelectorAll('.selected-school').forEach(element => {
    const schoolId = element.getAttribute('data-school-id');
    if (schoolId) {
      selectedSchoolIds.push(schoolId);
    }
  });
  
  // Générer le HTML de la liste des écoles
  if (filteredSchools.length === 0) {
    schoolsListContainer.innerHTML = `
      <div class="no-results">
        <p>Aucune école ne correspond à vos critères de recherche.</p>
        <button class="btn btn-secondary" id="reset-filters">Réinitialiser les filtres</button>
      </div>
    `;
    return;
  }
  
  let schoolsListHTML = '';
  
  filteredSchools.forEach(school => {
    const isSelected = selectedSchoolIds.includes(school.id);
    
    schoolsListHTML += `
      <div class="school-card ${isSelected ? 'selected' : ''}" data-school-id="${school.id}">
        <div class="school-logo">
          <img src="${school.logo}" alt="${school.name} logo">
        </div>
        <div class="school-info">
          <h4>${school.name}</h4>
          <div class="school-details">
            <span class="school-type">${school.type.charAt(0).toUpperCase() + school.type.slice(1)}</span>
            <span class="school-location"><i class="fas fa-map-marker-alt"></i> ${school.location}</span>
          </div>
          <div class="school-specialities">
            ${school.specialities.slice(0, 3).map(spec => `<span class="tag">${spec}</span>`).join('')}
            ${school.specialities.length > 3 ? `<span class="tag">+${school.specialities.length - 3}</span>` : ''}
          </div>
        </div>
        <div class="school-actions">
          <button class="btn-text view-details" data-school-id="${school.id}">
            Détails <i class="fas fa-info-circle"></i>
          </button>
          <button class="btn-text select-school" data-school-id="${school.id}" ${isSelected ? 'disabled' : ''}>
            ${isSelected ? 'Sélectionnée' : 'Comparer'} <i class="fas fa-${isSelected ? 'check' : 'plus'}"></i>
          </button>
        </div>
      </div>
    `;
  });
  
  schoolsListContainer.innerHTML = schoolsListHTML;
}

/**
 * Initialiser les événements du comparateur
 */
function initComparatorEvents(schools) {
  // Variables pour suivre les écoles sélectionnées
  let selectedSchools = [];
  
  // Référence aux éléments du DOM
  const searchInput = document.getElementById('school-search');
  const typeFilter = document.getElementById('type-filter');
  const regionFilter = document.getElementById('region-filter');
  const admissionFilter = document.getElementById('admission-filter');
  const specialityFilter = document.getElementById('speciality-filter');
  
  // Événement de recherche
  searchInput.addEventListener('input', () => {
    const filters = {
      search: searchInput.value,
      type: typeFilter.value,
      region: regionFilter.value,
      admission: admissionFilter.value,
      speciality: specialityFilter.value
    };
    
    renderSchoolsList(schools, filters);
    attachSchoolCardEvents();
  });
  
  // Événements des filtres
  [typeFilter, regionFilter, admissionFilter, specialityFilter].forEach(filter => {
    filter.addEventListener('change', () => {
      const filters = {
        search: searchInput.value,
        type: typeFilter.value,
        region: regionFilter.value,
        admission: admissionFilter.value,
        speciality: specialityFilter.value
      };
      
      renderSchoolsList(schools, filters);
      attachSchoolCardEvents();
    });
  });
  
  // Réinitialiser les filtres
  document.addEventListener('click', event => {
    if (event.target.id === 'reset-filters') {
      searchInput.value = '';
      typeFilter.value = '';
      regionFilter.value = '';
      admissionFilter.value = '';
      specialityFilter.value = '';
      
      renderSchoolsList(schools);
      attachSchoolCardEvents();
    }
  });
  
  // Attacher les événements aux cartes d'écoles
  attachSchoolCardEvents();
  
  function attachSchoolCardEvents() {
    // Afficher les détails d'une école
    document.querySelectorAll('.view-details').forEach(button => {
      button.addEventListener('click', () => {
        const schoolId = button.getAttribute('data-school-id');
        const school = schools.find(s => s.id === schoolId);
        
        if (school) {
          showSchoolDetails(school);
        }
      });
    });
    
    // Sélectionner une école pour la comparaison
    document.querySelectorAll('.select-school').forEach(button => {
      button.addEventListener('click', () => {
        const schoolId = button.getAttribute('data-school-id');
        const school = schools.find(s => s.id === schoolId);
        
        if (school && selectedSchools.length < 3) {
          selectSchool(school);
          button.disabled = true;
          button.innerHTML = `Sélectionnée <i class="fas fa-check"></i>`;
          button.closest('.school-card').classList.add('selected');
        }
      });
    });
    
    // Retirer une école de la sélection
    document.querySelectorAll('.remove-school').forEach(button => {
      button.addEventListener('click', () => {
        const slot = button.closest('.selected-slot').getAttribute('data-slot');
        const schoolId = button.getAttribute('data-school-id');
        
        unselectSchool(slot, schoolId);
      });
    });
  }
  
  /**
   * Sélectionner une école pour la comparaison
   */
  function selectSchool(school) {
    // Trouver un emplacement libre
    const slots = document.querySelectorAll('.selected-slot');
    let targetSlot = null;
    
    for (const slot of slots) {
      if (!slot.querySelector('.selected-school')) {
        targetSlot = slot;
        break;
      }
    }
    
    if (!targetSlot) return;
    
    // Stocker l'école dans la liste des sélectionnées
    const slotIndex = parseInt(targetSlot.getAttribute('data-slot'));
    selectedSchools[slotIndex] = school;
    
    // Mettre à jour l'interface
    targetSlot.innerHTML = `
      <div class="selected-school" data-school-id="${school.id}">
        <div class="school-header">
          <img src="${school.logo}" alt="${school.name} logo">
          <button class="remove-school" data-school-id="${school.id}">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <h4>${school.name}</h4>
        <div class="school-quick-info">
          <div class="info-item">
            <span class="label">Type:</span>
            <span class="value">${school.type}</span>
          </div>
          <div class="info-item">
            <span class="label">Localisation:</span>
            <span class="value">${school.location}</span>
          </div>
          <div class="info-item">
            <span class="label">Rang national:</span>
            <span class="value">${school.ranking.national}</span>
          </div>
        </div>
      </div>
    `;
    
    // Attacher l'événement au bouton de suppression
    const removeButton = targetSlot.querySelector('.remove-school');
    if (removeButton) {
      removeButton.addEventListener('click', () => {
        unselectSchool(slotIndex, school.id);
      });
    }
    
    // Mettre à jour la comparaison si au moins deux écoles sont sélectionnées
    updateComparison();
  }
  
  /**
   * Retirer une école de la sélection
   */
  function unselectSchool(slotIndex, schoolId) {
    // Mettre à jour la liste des écoles sélectionnées
    selectedSchools[slotIndex] = null;
    
    // Mettre à jour l'interface
    const slot = document.querySelector(`.selected-slot[data-slot="${slotIndex}"]`);
    if (slot) {
      slot.innerHTML = `
        <div class="empty-slot">
          <i class="fas fa-plus"></i>
          <p>Sélectionnez une école</p>
        </div>
      `;
    }
    
    // Réactiver le bouton de sélection dans la liste des écoles
    const schoolCard = document.querySelector(`.school-card[data-school-id="${schoolId}"]`);
    if (schoolCard) {
      const selectButton = schoolCard.querySelector('.select-school');
      if (selectButton) {
        selectButton.disabled = false;
        selectButton.innerHTML = `Comparer <i class="fas fa-plus"></i>`;
      }
      schoolCard.classList.remove('selected');
    }
    
    // Mettre à jour la comparaison
    updateComparison();
  }
  
  /**
   * Mettre à jour la section de comparaison
   */
  function updateComparison() {
    const comparisonResults = document.querySelector('.comparison-results');
    
    // Filtrer les écoles sélectionnées (enlever les null)
    const validSchools = selectedSchools.filter(school => school !== null && school !== undefined);
    
    // S'il y a moins de 2 écoles, ne pas afficher la comparaison
    if (validSchools.length < 2) {
      comparisonResults.innerHTML = `
        <div class="comparison-message">
          <p>Sélectionnez au moins 2 écoles pour les comparer.</p>
        </div>
      `;
      return;
    }
    
    // Générer le tableau de comparaison
    let comparisonHTML = `
      <h3>Tableau comparatif</h3>
      <div class="comparison-table-container">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Critères</th>
              ${validSchools.map(school => `
                <th>
                  <img src="${school.logo}" alt="${school.name}" class="table-logo">
                  <span>${school.name}</span>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="criteria-label">Type</td>
              ${validSchools.map(school => `<td>${school.type.charAt(0).toUpperCase() + school.type.slice(1)}</td>`).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Localisation</td>
              ${validSchools.map(school => `<td>${school.location}</td>`).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Région</td>
              ${validSchools.map(school => `<td>${school.region}</td>`).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Types d'admission</td>
              ${validSchools.map(school => `<td>${school.admissionTypes.join(', ')}</td>`).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Spécialités</td>
              ${validSchools.map(school => `
                <td>
                  <div class="specialities-list">
                    ${school.specialities.slice(0, 4).map(spec => `<span class="tag">${spec}</span>`).join('')}
                    ${school.specialities.length > 4 ? `
                      <div class="expandable-content">
                        <button class="btn-text expand-btn">+ ${school.specialities.length - 4} autres</button>
                        <div class="expanded-content hidden">
                          ${school.specialities.slice(4).map(spec => `<span class="tag">${spec}</span>`).join('')}
                        </div>
                      </div>
                    ` : ''}
                  </div>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Classement national</td>
              ${validSchools.map(school => `
                <td>
                  <span class="ranking">${school.ranking.national}</span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Classement international</td>
              ${validSchools.map(school => `
                <td>
                  <span class="ranking">${school.ranking.international > 0 ? school.ranking.international : 'Non classée'}</span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Frais de scolarité</td>
              ${validSchools.map(school => `
                <td>
                  <div class="fees-list">
                    ${Object.entries(school.fees).map(([type, amount]) => `
                      <div class="fee-item">
                        <span class="fee-type">${formatAdmissionType(type)}:</span>
                        <span class="fee-amount">${amount > 0 ? amount + ' €/an' : 'Gratuit'}</span>
                      </div>
                    `).join('')}
                  </div>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Statistiques</td>
              ${validSchools.map(school => `
                <td>
                  <div class="stats-list">
                    <div class="stat-item">
                      <span class="stat-label">Sélectivité:</span>
                      <span class="stat-value">${school.stats.admissionRate}%</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">Nombre d'étudiants:</span>
                      <span class="stat-value">${school.stats.studentCount}</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">Étudiants internationaux:</span>
                      <span class="stat-value">${school.stats.internationalStudents}%</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">Taux d'emploi:</span>
                      <span class="stat-value">${school.stats.employmentRate}%</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">Salaire moyen:</span>
                      <span class="stat-value">${school.stats.averageSalary} €/an</span>
                    </div>
                  </div>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Points forts</td>
              ${validSchools.map(school => `
                <td>
                  <ul class="strengths-list">
                    ${school.strengths.map(strength => `<li>${strength}</li>`).join('')}
                  </ul>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="criteria-label">Site web</td>
              ${validSchools.map(school => `
                <td>
                  <a href="${school.website}" target="_blank" class="btn-text">
                    Visiter le site <i class="fas fa-external-link-alt"></i>
                  </a>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="comparison-charts">
        <div class="chart-container">
          <h4>Comparaison des critères clés</h4>
          <div id="radar-chart" class="chart"></div>
        </div>
        <div class="chart-container">
          <h4>Frais de scolarité</h4>
          <div id="fees-chart" class="chart"></div>
        </div>
      </div>
    `;
    
    comparisonResults.innerHTML = comparisonHTML;
    
    // Ajouter les événements pour les contenus extensibles
    document.querySelectorAll('.expand-btn').forEach(button => {
      button.addEventListener('click', function() {
        const expandedContent = this.nextElementSibling;
        expandedContent.classList.toggle('hidden');
        this.textContent = expandedContent.classList.contains('hidden') 
          ? `+ ${parseInt(this.textContent.split(' ')[1])} autres` 
          : '- Réduire';
      });
    });
    
    // Créer les graphiques de comparaison (à implémenter avec Chart.js dans une vraie application)
    // initComparisonCharts(validSchools);
  }
  
  /**
   * Formater le type d'admission pour l'affichage
   */
  function formatAdmissionType(type) {
    const typeMap = {
      'cpge': 'Classe préparatoire',
      'postbac': 'Post-bac',
      'alternance': 'Alternance',
      'international': 'International'
    };
    
    return typeMap[type] || type;
  }
  
  /**
   * Afficher les détails d'une école
   */
  function showSchoolDetails(school) {
    // Créer la modal des détails
    const modalHTML = `
      <div class="modal-overlay" id="school-details-modal">
        <div class="modal-container">
          <div class="modal-header">
            <div class="school-title">
              <img src="${school.logo}" alt="${school.name} logo" class="modal-logo">
              <h3>${school.name}</h3>
            </div>
            <button class="modal-close"><i class="fas fa-times"></i></button>
          </div>
          <div class="modal-content">
            <div class="school-overview">
              <div class="school-badges">
                <span class="badge badge-type">${school.type.charAt(0).toUpperCase() + school.type.slice(1)}</span>
                <span class="badge badge-location"><i class="fas fa-map-marker-alt"></i> ${school.location}, ${school.region}</span>
                ${school.ranking.national ? `<span class="badge badge-ranking">Classement national: ${school.ranking.national}</span>` : ''}
                ${school.ranking.international > 0 ? `<span class="badge badge-ranking">Classement international: ${school.ranking.international}</span>` : ''}
              </div>
              <p class="school-description">${school.description}</p>
            </div>
            
            <div class="detail-section">
              <h4>Spécialités</h4>
              <div class="specialities-tags">
                ${school.specialities.map(spec => `<span class="tag">${spec}</span>`).join('')}
              </div>
            </div>
            
            <div class="detail-section">
              <h4>Types d'admission</h4>
              <div class="admission-types">
                ${school.admissionTypes.map(type => `<span class="badge">${type}</span>`).join('')}
              </div>
            </div>
            
            <div class="detail-section">
              <h4>Frais de scolarité</h4>
              <div class="fees-table">
                <table>
                  <thead>
                    <tr>
                      <th>Type d'admission</th>
                      <th>Frais annuels</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${Object.entries(school.fees).map(([type, amount]) => `
                      <tr>
                        <td>${formatAdmissionType(type)}</td>
                        <td>${amount > 0 ? amount + ' €' : 'Gratuit'}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="detail-section">
              <h4>Statistiques clés</h4>
              <div class="stats-grid">
                <div class="stat-box">
                  <div class="stat-value">${school.stats.admissionRate}%</div>
                  <div class="stat-label">Taux d'admission</div>
                </div>
                <div class="stat-box">
                  <div class="stat-value">${school.stats.studentCount}</div>
                  <div class="stat-label">Étudiants</div>
                </div>
                <div class="stat-box">
                  <div class="stat-value">${school.stats.internationalStudents}%</div>
                  <div class="stat-label">Étudiants internationaux</div>
                </div>
                <div class="stat-box">
                  <div class="stat-value">${school.stats.employmentRate}%</div>
                  <div class="stat-label">Taux d'emploi</div>
                </div>
                <div class="stat-box">
                  <div class="stat-value">${school.stats.averageSalary.toLocaleString()} €</div>
                  <div class="stat-label">Salaire moyen</div>
                </div>
              </div>
            </div>
            
            <div class="detail-section">
              <h4>Points forts</h4>
              <ul class="strengths-list">
                ${school.strengths.map(strength => `<li>${strength}</li>`).join('')}
              </ul>
            </div>
            
            <div class="detail-section actions-section">
              <a href="${school.website}" target="_blank" class="btn btn-primary">
                Visiter le site officiel <i class="fas fa-external-link-alt"></i>
              </a>
              ${!isSchoolSelected(school.id) && selectedSchools.length < 3 ? `
                <button class="btn btn-secondary add-to-comparison" data-school-id="${school.id}">
                  Ajouter à la comparaison <i class="fas fa-plus"></i>
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Ajouter la modal au DOM
    const modalElement = document.createElement('div');
    modalElement.innerHTML = modalHTML;
    document.body.appendChild(modalElement.firstElementChild);
    
    // Ajouter les événements de la modal
    const modal = document.getElementById('school-details-modal');
    const closeButton = modal.querySelector('.modal-close');
    
    closeButton.addEventListener('click', () => {
      modal.classList.add('closing');
      setTimeout(() => {
        modal.remove();
      }, 300);
    });
    
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.add('closing');
        setTimeout(() => {
          modal.remove();
        }, 300);
      }
    });
    
    // Événement pour ajouter à la comparaison
    const addToComparisonButton = modal.querySelector('.add-to-comparison');
    if (addToComparisonButton) {
      addToComparisonButton.addEventListener('click', () => {
        selectSchool(school);
        
        // Mettre à jour le bouton dans la modal
        addToComparisonButton.disabled = true;
        addToComparisonButton.innerHTML = `Ajoutée à la comparaison <i class="fas fa-check"></i>`;
        
        // Mettre à jour le bouton dans la liste des écoles
        const schoolCard = document.querySelector(`.school-card[data-school-id="${school.id}"]`);
        if (schoolCard) {
          const selectButton = schoolCard.querySelector('.select-school');
          if (selectButton) {
            selectButton.disabled = true;
            selectButton.innerHTML = `Sélectionnée <i class="fas fa-check"></i>`;
          }
          schoolCard.classList.add('selected');
        }
      });
    }
    
    // Afficher la modal avec un effet d'apparition
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
  }
  
  /**
   * Vérifier si une école est déjà sélectionnée
   */
  function isSchoolSelected(schoolId) {
    return selectedSchools.some(school => school && school.id === schoolId);
  }
  
  /**
   * Initialiser les graphiques de comparaison
   * Note: Dans une application réelle, cette fonction utiliserait Chart.js ou une autre bibliothèque
   */
  function initComparisonCharts(schools) {
    // Cette fonction serait implémentée avec Chart.js pour créer des graphiques comparatifs
    console.log('Initialisation des graphiques pour les écoles:', schools);
  }
}
                <div class="stat-box">
                  /**
 * COMPARATOR.JS
 * Gestion du comparateur d'écoles d'ingénieurs
 */

document.addEventListener('DOMContentLoaded', function() {
  initSchoolComparator();
});

/**
 * Initialisation du comparateur d'écoles
 */
function initSchoolComparator() {
  // Vérifier si l'élément comparateur existe sur la page
  const comparatorContainer = document.getElementById('school-comparator');
  if (!comparatorContainer) return;

  // Charger les données des écoles (en production, cela serait fait via une API)
  loadSchoolsData()
    .then(schools => {
      // Initialiser l'interface du comparateur
      renderComparator(schools);
      
      // Initialiser les événements
      initComparatorEvents(schools);
    })
    .catch(error => {
      console.error('Erreur lors du chargement des données :', error);
      comparatorContainer.innerHTML = `
        <div class="error-message">
          <p>Une erreur est survenue lors du chargement des données. Veuillez réessayer ultérieurement.</p>
          <button class="btn btn-secondary" onclick="location.reload()">Réessayer</button>
        </div>
      `;
    });
}

/**
 * Chargement des données des écoles
 * En production, cela serait remplacé par un appel API
 */
async function loadSchoolsData() {
  // Simuler un délai de chargement
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Données d'exemple (à remplacer par un appel API réel)
  return [
    {
      id: 'polytechnique',
      name: 'École Polytechnique',
      shortName: 'X',
      logo: 'img/logos/polytechnique.svg',
      type: 'publique',
      location: 'Palaiseau',
      region: 'Île-de-France',
      admissionTypes: ['CPGE', 'Admission sur titre'],
      specialities: ['Mathématiques appliquées', 'Physique', 'Informatique', 'Économie', 'Mécanique', 'Chimie'],
      ranking: {
        national: 1,
        international: 43
      },
      fees: {
        cpge: 3500,
        international: 12000
      },
      stats: {
        admissionRate: 5,
        studentCount: 3000,
        internationalStudents: 30,
        employmentRate: 98,
        averageSalary: 47000
      },
      description: "L'École polytechnique est une école d'ingénieurs française de renommée internationale, alliant recherche et enseignement de haut niveau pour former des étudiants dans les domaines scientifique et technologique les plus variés.",
      strengths: [
        "Excellence académique et scientifique",
        "Pluridisciplinarité des enseignements",
        "Réseau d'anciens élèves prestigieux",
        "Recherche de pointe",
        "Forte internationalisation"
      ],
      website: "https://www.polytechnique.edu"
    },
    {
      id: 'centrale-paris',
      name: 'CentraleSupélec',
      shortName: 'CS',
      logo: 'img/logos/centralesupelec.svg',
      type: 'publique',
      location: 'Gif-sur-Yvette',
      region: 'Île-de-France',
      admissionTypes: ['CPGE', 'Admission sur titre'],
      specialities: ['Informatique', 'Génie industriel', 'Énergie', 'Télécommunications', 'Systèmes embarqués'],
      ranking: {
        national: 3,
        international: 76
      },
      fees: {
        cpge: 3500,
        international: 10000
      },
      stats: {
        admissionRate: 10,
        studentCount: 4200,
        internationalStudents: 25,
        employmentRate: 95,
        averageSalary: 45000
      },
      description: "CentraleSupélec est une école d'ingénieurs française, issue de la fusion de l'École Centrale Paris et de Supélec en 2015. Elle forme des ingénieurs généralistes et spécialistes en sciences et technologies de l'information.",
      strengths: [
        "Formation d'ingénieur généraliste de haut niveau",
        "Partenariats industriels solides",
        "Campus moderne et innovant",
        "Forte présence internationale",
        "Double-diplômes prestigieux"
      ],
      website: "https://www.centralesupelec.fr"
    },
    {
      id: 'mines-paris',
      name: 'Mines ParisTech',
      shortName: 'Mines',
      logo: 'img/logos/mines-paristech.svg',
      type: 'publique',
      location: 'Paris',
      region: 'Île-de-France',
      admissionTypes: ['CPGE', 'Admission sur titre'],
      specialities: ['Mathématiques appliquées', 'Géosciences', 'Économie', 'Énergie', 'Matériaux', 'Robotique'],
      ranking: {
        national: 4,
        international: 85
      },
      fees: {
        cpge: 2500,
        international: 9000
      },
      stats: {
        admissionRate: 8,
        studentCount: 1800,
        internationalStudents: 28,
        employmentRate: 96,
        averageSalary: 46000
      },
      description: "MINES ParisTech est l'une des plus anciennes écoles d'ingénieurs de France. Elle forme des ingénieurs de haut niveau scientifique capables de résoudre des problèmes complexes dans des contextes variés.",
      strengths: [
        "Excellence académique",
        "Centres de recherche performants",
        "Liens étroits avec l'industrie",
        "Formation pluridisciplinaire",
        "Réseau d'alumni prestigieux"
      ],
      website: "https://www.minesparis.psl.eu"
    },
    {
      id: 'insa-lyon',
      name: 'INSA Lyon',
      shortName: 'INSA',
      logo: 'img/logos/insa-lyon.svg',
      type: 'publique',
      location: 'Villeurbanne',
      region: 'Auvergne-Rhône-Alpes',
      admissionTypes: ['Post-bac', 'Admission parallèle'],
      specialities: ['Génie mécanique', 'Informatique', 'Génie civil', 'Biosciences', 'Télécommunications', 'Génie énergétique'],
      ranking: {
        national: 7,
        international: 120
      },
      fees: {
        postbac: 1800,
        international: 4000
      },
      stats: {
        admissionRate: 15,
        studentCount: 6000,
        internationalStudents: 20,
        employmentRate: 94,
        averageSalary: 40000
      },
      description: "L'INSA Lyon est l'une des plus grandes écoles d'ingénieurs françaises, offrant une formation scientifique et technique de haut niveau, reconnue pour son accessibilité sans classe préparatoire obligatoire.",
      strengths: [
        "Formation d'ingénieur en 5 ans post-bac",
        "Spécialités variées",
        "Large réseau international",
        "Forte intégration avec la recherche",
        "Campus dynamique et inclusif"
      ],
      website: "https://www.insa-lyon.fr"
    },
    {
      id: 'telecom-paris',
      name: 'Télécom Paris',
      shortName: 'Télécom',
      logo: 'img/logos/telecom-paris.svg',
      type: 'publique',
      location: 'Palaiseau',
      region: 'Île-de-France',
      admissionTypes: ['CPGE', 'Admission sur titre'],
      specialities: ['Informatique', 'Réseaux', 'Télécommunications', 'Intelligence artificielle', 'Cybersécurité', 'Science des données'],
      ranking: {
        national: 9,
        international: 150
      },
      fees: {
        cpge: 2500,
        international: 8000
      },
      stats: {
        admissionRate: 12,
        studentCount: 1500,
        internationalStudents: 30,
        employmentRate: 95,
        averageSalary: 43000
      },
      description: "Télécom Paris est une grande école d'ingénieurs française spécialisée dans les technologies du numérique, membre de l'Institut Polytechnique de Paris et de l'Institut Mines-Télécom.",
      strengths: [
        "Leadership dans le domaine du numérique",
        "Expertise en télécommunications et informatique",
        "Fort réseau d'entreprises partenaires",
        "Incubateur de startups performant",
        "Formation à la pointe des nouvelles technologies"
      ],
      website: "https://www.telecom-paris.fr"
    },
    {
      id: 'ensimag',
      name: 'Grenoble INP - Ensimag',
      shortName: 'Ensimag',
      logo: 'img/logos/ensimag.svg',
      type: 'publique',
      location: 'Grenoble',
      region: 'Auvergne-Rhône-Alpes',
      admissionTypes: ['CPGE', 'Admission sur titre'],
      specialities: ['Informatique', 'Mathématiques appliquées', 'Finance quantitative', 'Intelligence artificielle', 'Systèmes embarqués'],
      ranking: {
        national: 11,
        international: 180
      },
      fees: {
        cpge: 1800,
        international: 5000
      },
      stats: {
        admissionRate: 14,
        studentCount: 1200,
        internationalStudents: 18,
        employmentRate: 95,
        averageSalary: 42000
      },
      description: "L'Ensimag est une école d'ingénieurs spécialisée en informatique et mathématiques appliquées, au sein de Grenoble INP. Elle forme des ingénieurs experts en sciences du numérique.",
      strengths: [
        "Excellence en informatique et mathématiques appliquées",
        "Environnement technologique grenoblois dynamique",
        "Double-diplômes avec des universités prestigieuses",
        "Fort lien avec la recherche",
        "Spécialisations de pointe en intelligence artificielle"
      ],
      website: "https://ensimag.grenoble-inp.fr"
    },
    {
      id: 'estp',
      name: 'ESTP Paris',
      shortName: 'ESTP',
      logo: 'img/logos/estp.svg',
      type: 'privée',
      location: 'Cachan',
      region: 'Île-de-France',
      admissionTypes: ['CPGE', 'Admission parallèle'],
      specialities: ['Génie civil', 'Bâtiment', 'Travaux publics', 'Topographie', 'Génie énergétique', 'Génie mécanique'],
      ranking: {
        national: 18,
        international: 250
      },
      fees: {
        cpge: 8500,
        international: 12000
      },
      stats: {
        admissionRate: 20,
        studentCount: 2700,
        internationalStudents: 15,
        employmentRate: 93,
        averageSalary: 39000
      },
      description: "L'ESTP Paris est une grande école d'ingénieurs spécialisée dans le domaine de la construction, leader en France pour la formation des ingénieurs du BTP.",
      strengths: [
        "Leader dans le domaine du BTP et de la construction",
        "Réseau professionnel étendu",
        "Forte employabilité",
        "Expertise technique reconnue",
        "Large choix de spécialisations dans le BTP"
      ],
      website: "https://www.estp.fr"
    },
    {
      id: 'ei-cesi',
      name: 'École d\'Ingénieurs CESI',
      shortName: 'CESI',
      logo: 'img/logos/cesi.svg',
      type: 'privée',
      location: 'Plusieurs campus',
      region: 'National',
      admissionTypes: ['Post-bac', 'Alternance', 'Admission parallèle'],
      specialities: ['Informatique', 'BTP', 'Généraliste', 'Systèmes électriques', 'Qualité', 'Logistique'],
      ranking: {
        national: 35,
        international: 0
      },
      fees: {
        postbac: 7500,
        alternance: 0,
        international: 9000
      },
      stats: {
        admissionRate: 40,
        studentCount: 10000,
        internationalStudents: 5,
        employmentRate: 90,
        averageSalary: 36000