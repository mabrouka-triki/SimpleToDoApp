// Sélection des éléments
const entreeTache = document.getElementById('entree-tache'); // Champ pour entrer une tâche
const boutonAjouterTache = document.getElementById('ajouter-tache'); // Bouton "Ajouter"
const listeTaches = document.getElementById('liste-taches'); // Liste des tâches (ul)

// Ajouter une tâche
boutonAjouterTache.addEventListener('click', () => {
  const texteTache = entreeTache.value.trim(); // Texte de la tâche sans espaces inutiles

  if (texteTache !== '') { // Si l'utilisateur a entré du texte
    const elementTache = document.createElement('li'); // Crée un élément de liste (li)
    elementTache.innerHTML = `
      <span>${texteTache}</span>
      <button>Supprimer</button>
    `;

    // Marquer la tâche comme terminée en cliquant sur le texte
    elementTache.querySelector('span').addEventListener('click', () => {
      elementTache.classList.toggle('terminee'); // Ajoute ou enlève la classe "terminee"
    });

    // Supprimer la tâche au clic sur le bouton
    elementTache.querySelector('button').addEventListener('click', () => {
      listeTaches.removeChild(elementTache); // Retire l'élément de la liste
    });

    listeTaches.appendChild(elementTache); // Ajoute la tâche à la liste
    entreeTache.value = ''; // Vide le champ de saisie
  } else {
    alert('Veuillez entrer une tâche.'); // Message si aucun texte n'est entré
  }
});
