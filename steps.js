// Contenu des étapes, partagé par index.html et variante-uliege.html
const steps = [
  {
    title: "Ouvrir l'onglet « Documents »",
    desc: "Placez-vous dans l'onglet « Documents » pour accéder à la recherche.",
    video: "videos/Diapositive_1.mp4"
  },
  {
    title: "Choisir un champ de recherche",
    desc: "La liste déroulante « Search within » permet de choisir les champs sur lesquels la recherche va porter. Ici, on laisse le champ par défaut « Article title, Abstract, Keywords ».",
    video: "videos/Diapositive_2.mp4"
  },
  {
    title: "Entrer vos mots-clés",
    desc: "Entrez le mot-clé souhaité pour ce champ.",
    video: "videos/Diapositive_3.mp4",
    tip: `<p>Deux caractères de substitution permettent d'élargir une recherche par troncature&nbsp;:</p>
      <ul>
        <li><strong>L'astérisque</strong> <code>*</code> remplace un nombre illimité de caractères, y compris aucun. Utile pour retrouver les variations d'un même mot (singulier/pluriel, dérivés).
          <span class="ex">Exemple&nbsp;: <code>behavio*</code> trouve <em>behavior</em>, <em>behaviour</em>, <em>behavioral</em>, <em>behavioural</em>.</span></li>
        <li><strong>Le point d'interrogation</strong> <code>?</code> remplace exactement un seul caractère. Utile pour les variations d'orthographe internes.
          <span class="ex">Exemple&nbsp;: <code>wom?n</code> trouve <em>woman</em> et <em>women</em>.</span></li>
      </ul>`
  },
  {
    title: "Ajouter un second champ de recherche",
    desc: "Avec « Add search field », ajoutez un champ complémentaire, puis choisissez-le dans la liste déroulante. Nous sélectionnons ici « Keywords ».",
    video: "videos/Diapositive_4-5.mp4"
  },
  {
    title: "Entrer un second mot-clé",
    desc: "Entrez ensuite le mot-clé souhaité pour ce nouveau champ.",
    video: "videos/Diapositive_7.mp4"
  },
  {
    title: "Choisir l'opérateur booléen",
    desc: "L'opérateur booléen par défaut entre chaque champ est « AND », mais il peut être modifié en « OR » ou en « AND NOT ». Ici, on laisse « AND ».",
    video: "videos/Diapositive_8.mp4"
  },
  {
    title: "Définir une plage de dates",
    desc: "Pour limiter la recherche à des dates de publication spécifiques, cliquez sur « Add date range », puis définissez la période de publication souhaitée.",
    video: "videos/Diapositive_8-9.mp4"
  },
  {
    title: "Filtrer par date d'ajout à Scopus",
    desc: "Le filtre « Added to Scopus » permet de limiter les résultats aux ajouts les plus récents sur la base de données. Nous laissons ici « Anytime ».",
    video: "videos/Diapositive_11.mp4"
  },
  {
    title: "Lancer la recherche et consulter les résultats",
    desc: "Une fois tous vos critères de recherche encodés, cliquez sur « Search ». Les résultats de recherche s'affichent.",
    video: "videos/Diapositive_11-12.mp4"
  },
  {
    title: "Voir l'équation de recherche",
    desc: "Il est possible de voir l'équation détaillée de votre recherche en cliquant sur le bouton « Advanced query ».",
    video: "videos/Diapositive_14.mp4"
  },
  {
    title: "Affiner avec les filtres",
    desc: "Vous pouvez également affiner la recherche grâce aux filtres à votre disposition si cela est nécessaire.",
    video: "videos/Diapositive_15.mp4"
  }
];
