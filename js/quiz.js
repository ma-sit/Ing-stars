/**
 * QUIZ.JS
 * Gestion du quiz d'orientation vers les métiers d'ingénieur
 */

document.addEventListener('DOMContentLoaded', function() {
  initQuiz();
});

/**
 * Initialisation du quiz
 */
function initQuiz() {
  // Vérifier si l'élément quiz existe sur la page
  const quizContainer = document.getElementById('quiz-container');
  if (!quizContainer) return;

  // Données du quiz (à adapter selon les besoins)
  const quizData = {
    title: "Quel type d'ingénieur êtes-vous ?",
    description: "Répondez à ces questions pour découvrir quelles spécialités d'ingénieur pourraient vous correspondre.",
    questions: [
      {
        id: 1,
        text: "Parmi ces activités, laquelle préférez-vous ?",
        options: [
          { id: 'a', text: "Résoudre des problèmes mathématiques complexes", traits: { analyse: 3, info: 2, math: 3 } },
          { id: 'b', text: "Concevoir et construire des objets", traits: { mecanique: 3, civil: 2, creation: 3 } },
          { id: 'c', text: "Programmer et développer des applications", traits: { info: 3, telecom: 2, logique: 3 } },
          { id: 'd', text: "Étudier des phénomènes naturels et scientifiques", traits: { bio: 3, chimie: 3, environnement: 2 } }
        ]
      },
      {
        id: 2,
        text: "Quelle matière vous passionne le plus ?",
        options: [
          { id: 'a', text: "Les mathématiques", traits: { math: 3, analyse: 2, finance: 2 } },
          { id: 'b', text: "La physique", traits: { physique: 3, energie: 2, civil: 1 } },
          { id: 'c', text: "L'informatique", traits: { info: 3, telecom: 2, cyber: 2 } },
          { id: 'd', text: "La biologie/chimie", traits: { bio: 3, chimie: 3, agroalimentaire: 2 } }
        ]
      },
      {
        id: 3,
        text: "Quel environnement de travail vous attire le plus ?",
        options: [
          { id: 'a', text: "Un bureau avec des ordinateurs puissants", traits: { info: 2, telecom: 2, finance: 1 } },
          { id: 'b', text: "Un laboratoire de recherche", traits: { recherche: 3, bio: 2, chimie: 2 } },
          { id: 'c', text: "Un site de construction ou une usine", traits: { civil: 3, mecanique: 2, industriel: 3 } },
          { id: 'd', text: "Le terrain, en extérieur", traits: { environnement: 3, mines: 2, agronome: 3 } }
        ]
      },
      {
        id: 4,
        text: "Quel défi vous motive le plus ?",
        options: [
          { id: 'a', text: "Développer des technologies innovantes", traits: { innovation: 3, info: 2, telecom: 2 } },
          { id: 'b', text: "Résoudre des problèmes environnementaux", traits: { environnement: 3, energie: 2, agronome: 2 } },
          { id: 'c', text: "Optimiser des processus et systèmes", traits: { industriel: 3, logistique: 3, organisation: 2 } },
          { id: 'd', text: "Créer des structures durables", traits: { civil: 3, mecanique: 2, materiaux: 2 } }
        ]
      },
      {
        id: 5,
        text: "Comment préférez-vous résoudre un problème ?",
        options: [
          { id: 'a', text: "Par une analyse mathématique rigoureuse", traits: { analyse: 3, math: 3, recherche: 2 } },
          { id: 'b', text: "Par l'expérimentation et les tests", traits: { recherche: 3, materiaux: 2, physique: 2 } },
          { id: 'c', text: "Par le développement d'un programme informatique", traits: { info: 3, cyber: 2, ia: 3 } },
          { id: 'd', text: "Par la conception d'un système ou mécanisme", traits: { mecanique: 3, civil: 2, industriel: 2 } }
        ]
      },
      {
        id: 6,
        text: "Quel impact souhaitez-vous avoir sur le monde ?",
        options: [
          { id: 'a', text: "Améliorer la santé et le bien-être", traits: { bio: 3, biomedical: 3, agroalimentaire: 2 } },
          { id: 'b', text: "Développer les technologies du futur", traits: { info: 2, telecom: 2, ia: 3, nano: 2 } },
          { id: 'c', text: "Construire des infrastructures durables", traits: { civil: 3, environnement: 2, urbain: 3 } },
          { id: 'd', text: "Optimiser la gestion des ressources", traits: { energie: 3, logistique: 2, financier: 2 } }
        ]
      },
      {
        id: 7,
        text: "Quelle compétence souhaitez-vous le plus développer ?",
        options: [
          { id: 'a', text: "La créativité et l'innovation", traits: { creation: 3, innovation: 3, design: 2 } },
          { id: 'b', text: "L'analyse et la résolution de problèmes complexes", traits: { analyse: 3, recherche: 2, math: 2 } },
          { id: 'c', text: "La maîtrise technique et pratique", traits: { mecanique: 2, civil: 2, materiaux: 2, industriel: 2 } },
          { id: 'd', text: "La gestion de projet et le travail en équipe", traits: { management: 3, organisation: 3, communication: 2 } }
        ]
      },
      {
        id: 8,
        text: "Quelle technologie vous intéresse le plus ?",
        options: [
          { id: 'a', text: "L'intelligence artificielle et le big data", traits: { ia: 3, info: 3, data: 3 } },
          { id: 'b', text: "Les énergies renouvelables", traits: { energie: 3, environnement: 3, electricite: 2 } },
          { id: 'c', text: "La robotique et l'automatisation", traits: { mecanique: 2, robotique: 3, automatique: 3 } },
          { id: 'd', text: "Les biotechnologies", traits: { bio: 3, biomedical: 3, chimie: 2 } }
        ]
      },
      {
        id: 9,
        text: "Qu'est-ce qui vous fait vous sentir accompli ?",
        options: [
          { id: 'a', text: "Voir un projet concret se réaliser", traits: { civil: 3, mecanique: 2, creation: 2 } },
          { id: 'b', text: "Résoudre un problème technique difficile", traits: { analyse: 3, recherche: 2, info: 2 } },
          { id: 'c', text: "Innover et créer quelque chose de nouveau", traits: { innovation: 3, creation: 3, recherche: 2 } },
          { id: 'd', text: "Améliorer le quotidien des gens", traits: { biomedical: 2, urbain: 2, environnement: 2, agroalimentaire: 2 } }
        ]
      },
      {
        id: 10,
        text: "Comment vous projetez-vous dans 10 ans ?",
        options: [
          { id: 'a', text: "Expert technique reconnu dans mon domaine", traits: { expertise: 3, recherche: 2, specialisation: 3 } },
          { id: 'b', text: "Entrepreneur créant ma propre entreprise", traits: { entrepreneuriat: 3, innovation: 2, management: 3 } },
          { id: 'c', text: "Manager dirigeant des équipes techniques", traits: { management: 3, organisation: 3, communication: 2 } },
          { id: 'd', text: "Chercheur faisant avancer les connaissances", traits: { recherche: 3, innovation: 2, analyse: 2 } }
        ]
      }
    ],
    specialities: [
      { id: 'info', name: "Ingénieur en informatique", description: "Développement logiciel, architecture système, intelligence artificielle, cybersécurité..." },
      { id: 'mecanique', name: "Ingénieur mécanique", description: "Conception de machines, systèmes mécaniques, robotique, automobile, aéronautique..." },
      { id: 'civil', name: "Ingénieur civil", description: "Construction, infrastructures, bâtiment, ouvrages d'art, génie urbain..." },
      { id: 'telecom', name: "Ingénieur télécommunications", description: "Réseaux, systèmes de communication, technologies sans fil, infrastructure cloud..." },
      { id: 'energie', name: "Ingénieur énergéticien", description: "Production d'énergie, énergies renouvelables, efficacité énergétique, réseaux..." },
      { id: 'bio', name: "Ingénieur en biotechnologies", description: "Applications technologiques liées au vivant, santé, agriculture, environnement..." },
      { id: 'chimie', name: "Ingénieur chimiste", description: "Procédés chimiques, matériaux, formulation, analyse, pétrochimie..." },
      { id: 'biomedical', name: "Ingénieur biomédical", description: "Technologies médicales, dispositifs médicaux, imagerie, biomatériaux..." },
      { id: 'environnement', name: "Ingénieur environnement", description: "Gestion des ressources, traitement des pollutions, développement durable..." },
      { id: 'industriel', name: "Ingénieur industriel", description: "Optimisation de la production, logistique, qualité, usine 4.0..." },
      { id: 'agronome', name: "Ingénieur agronome", description: "Agriculture, agroalimentaire, gestion des ressources naturelles..." },
      { id: 'materiaux', name: "Ingénieur matériaux", description: "Développement et caractérisation de matériaux, métallurgie, composites..." },
      { id: 'ia', name: "Ingénieur en intelligence artificielle", description: "Machine learning, deep learning, systèmes experts, data science..." },
      { id: 'robotique', name: "Ingénieur en robotique", description: "Conception et programmation de robots, automatisation, cobotique..." },
      { id: 'financier', name: "Ingénieur financier", description: "Modélisation financière, gestion des risques, trading algorithmique..." }
    ]
  };

  // Variables pour suivre l'état du quiz
  let currentQuestion = 0;
  let userAnswers = [];
  let userTraits = {};

  // Fonction pour initialiser les traits de l'utilisateur
  function initUserTraits() {
    // Parcourir toutes les spécialités et traits possibles
    quizData.specialities.forEach(speciality => {
      userTraits[speciality.id] = 0;
    });
    
    // Ajouter d'autres traits qui pourraient être mentionnés dans les questions
    const additionalTraits = [
      'analyse', 'math', 'creation', 'logique', 'physique', 'cyber', 'agroalimentaire',
      'recherche', 'mines', 'innovation', 'logistique', 'organisation', 'nano',
      'urbain', 'design', 'management', 'communication', 'data', 'electricite',
      'automatique', 'expertise', 'entrepreneuriat', 'specialisation'
    ];
    
    additionalTraits.forEach(trait => {
      userTraits[trait] = 0;
    });
  }

  // Initialiser les traits
  initUserTraits();

  // Créer l'interface du quiz
  function renderQuiz() {
    let quizHTML = `
      <div class="quiz-header">
        <h2>${quizData.title}</h2>
        <p>${quizData.description}</p>
        <div class="quiz-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
          </div>
          <div class="progress-text">Question 1/${quizData.questions.length}</div>
        </div>
      </div>
      <div class="quiz-content">
        <div class="question-container">
          <!-- Les questions seront générées dynamiquement ici -->
        </div>
        <div class="results-container hidden">
          <!-- Les résultats seront affichés ici -->
        </div>
      </div>
      <div class="quiz-actions">
        <button class="btn btn-secondary" id="prev-question" disabled>Question précédente</button>
        <button class="btn btn-primary" id="next-question">Question suivante</button>
        <button class="btn btn-primary hidden" id="show-results">Voir mes résultats</button>
        <button class="btn btn-secondary hidden" id="restart-quiz">Recommencer le quiz</button>
      </div>
    `;
    
    quizContainer.innerHTML = quizHTML;
    
    // Afficher la première question
    showQuestion(0);
    
    // Ajouter les événements aux boutons
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('prev-question').addEventListener('click', prevQuestion);
    document.getElementById('show-results').addEventListener('click', showResults);
    document.getElementById('restart-quiz').addEventListener('click', restartQuiz);
  }

  // Afficher une question spécifique
  function showQuestion(index) {
    const questionContainer = document.querySelector('.question-container');
    const question = quizData.questions[index];
    
    let questionHTML = `
      <div class="question">
        <h3>Question ${index + 1}:</h3>
        <p>${question.text}</p>
        <div class="options">
    `;
    
    question.options.forEach(option => {
      const isSelected = userAnswers[index] === option.id;
      questionHTML += `
        <div class="option ${isSelected ? 'selected' : ''}">
          <input type="radio" name="q${index}" id="q${index}_${option.id}" value="${option.id}" ${isSelected ? 'checked' : ''}>
          <label for="q${index}_${option.id}">${option.text}</label>
        </div>
      `;
    });
    
    questionHTML += `
        </div>
      </div>
    `;
    
    questionContainer.innerHTML = questionHTML;
    
    // Mettre à jour la barre de progression
    updateProgress(index);
    
    // Ajouter des événements aux options
    document.querySelectorAll(`.option input[type="radio"]`).forEach(radio => {
      radio.addEventListener('change', function() {
        // Mettre à jour l'interface
        document.querySelectorAll('.option').forEach(opt => {
          opt.classList.remove('selected');
        });
        this.closest('.option').classList.add('selected');
        
        // Enregistrer la réponse
        userAnswers[index] = this.value;
        
        // Activer le bouton suivant
        document.getElementById('next-question').disabled = false;
      });
    });
    
    // Activer/désactiver les boutons de navigation
    document.getElementById('prev-question').disabled = index === 0;
    
    if (index === quizData.questions.length - 1) {
      document.getElementById('next-question').classList.add('hidden');
      document.getElementById('show-results').classList.remove('hidden');
      document.getElementById('show-results').disabled = !userAnswers[index];
    } else {
      document.getElementById('next-question').classList.remove('hidden');
      document.getElementById('show-results').classList.add('hidden');
      document.getElementById('next-question').disabled = !userAnswers[index];
    }
  }

  // Mettre à jour la barre de progression
  function updateProgress(index) {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    const progressPercentage = ((index + 1) / quizData.questions.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `Question ${index + 1}/${quizData.questions.length}`;
  }

  // Passer à la question suivante
  function nextQuestion() {
    if (currentQuestion < quizData.questions.length - 1) {
      currentQuestion++;
      showQuestion(currentQuestion);
    }
  }

  // Revenir à la question précédente
  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion(currentQuestion);
    }
  }

  // Calculer les résultats
  function calculateResults() {
    // Réinitialiser les traits
    initUserTraits();
    
    // Calculer les scores pour chaque trait en fonction des réponses
    userAnswers.forEach((answer, qIndex) => {
      const question = quizData.questions[qIndex];
      const selectedOption = question.options.find(opt => opt.id === answer);
      
      if (selectedOption && selectedOption.traits) {
        Object.entries(selectedOption.traits).forEach(([trait, value]) => {
          if (userTraits.hasOwnProperty(trait)) {
            userTraits[trait] += value;
          }
        });
      }
    });
    
    // Trier les spécialités par score
    return quizData.specialities
      .map(speciality => ({
        ...speciality,
        score: userTraits[speciality.id] || 0
      }))
      .sort((a, b) => b.score - a.score);
  }

  // Afficher les résultats
  function showResults() {
    const questionContainer = document.querySelector('.question-container');
    const resultsContainer = document.querySelector('.results-container');
    
    // Calculer les résultats
    const results = calculateResults();
    
    // Prendre les 5 meilleures correspondances
    const topResults = results.slice(0, 5);
    
    let resultsHTML = `
      <h3>Vos affinités avec les métiers d'ingénieur</h3>
      <p>D'après vos réponses, voici les spécialités qui pourraient vous correspondre :</p>
      <div class="results-list">
    `;
    
    topResults.forEach((result, index) => {
      // Calculer le pourcentage de correspondance (score max possible = 15 pour chaque trait)
      const matchPercentage = Math.min(Math.round((result.score / 15) * 100), 100);
      
      resultsHTML += `
        <div class="result-card">
          <div class="result-header">
            <h4>${result.name}</h4>
            <div class="match-percentage">${matchPercentage}%</div>
          </div>
          <p>${result.description}</p>
          <div class="match-bar">
            <div class="match-fill" style="width: ${matchPercentage}%"></div>
          </div>
          <a href="metiers.html#${result.id}" class="btn-text">En savoir plus <i class="fas fa-arrow-right"></i></a>
        </div>
      `;
    });
    
    resultsHTML += `
      </div>
      <div class="results-actions">
        <p>Vous souhaitez en savoir plus sur ces métiers ou explorer d'autres spécialités ?</p>
        <div class="action-buttons">
          <a href="metiers.html" class="btn btn-primary">Explorer tous les métiers</a>
          <a href="formation.html" class="btn btn-secondary">Découvrir les formations</a>
        </div>
      </div>
    `;
    
    // Afficher les résultats
    questionContainer.classList.add('hidden');
    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.classList.remove('hidden');
    
    // Mettre à jour les boutons
    document.getElementById('prev-question').classList.add('hidden');
    document.getElementById('show-results').classList.add('hidden');
    document.getElementById('restart-quiz').classList.remove('hidden');
    
    // Faire défiler vers le haut
    quizContainer.scrollIntoView({ behavior: 'smooth' });
  }

  // Redémarrer le quiz
  function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    
    // Réinitialiser l'interface
    document.querySelector('.question-container').classList.remove('hidden');
    document.querySelector('.results-container').classList.add('hidden');
    
    document.getElementById('prev-question').classList.remove('hidden');
    document.getElementById('prev-question').disabled = true;
    document.getElementById('next-question').classList.remove('hidden');
    document.getElementById('next-question').disabled = true;
    document.getElementById('show-results').classList.add('hidden');
    document.getElementById('restart-quiz').classList.add('hidden');
    
    // Afficher la première question
    showQuestion(0);
  }

  // Initialiser le quiz
  renderQuiz();
}