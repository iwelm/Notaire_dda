export default class Tabs {
  // Ce code à pour but d'afficher le contenu de la tabs sélectionner par des classe SCSS. Lorsqu'une tabs avec le nom de class "union" est cliquer, le code affiche le contenu qui à le meme nom de classe.
  constructor(elementHTML) {
    this.elementHTML = elementHTML;
    this.tabs = elementHTML.querySelectorAll('.js-tab'); // Correspond au sélecteur du tabs
    this.contents = elementHTML.querySelectorAll('.tab-container > div'); // Corrrespond au contenu du tab caché de base
    this.activeTab = null;
    this.activeContent = null;
    this.init();
  }

  init() {
    for (let i = 0; i < this.tabs.length; i++) {
      // Ajouter un écouteur sur tous les éléments avec la classe .js-tab
      const tab = this.tabs[i];
      tab.addEventListener('click', () => this.activate(tab));

      // Ouvrir le premier onglet par défaut
      if (this.tabs.length > 0) {
        this.activate(this.tabs[0]);
      }
    }
  }

  activate(clicked) {
    const target = clicked.classList[1]; // "1" correspond à ma deuxieme classe SCSS qui est la cible cherché par le JS dans mes contenus

    // Si un onglet est actif, on le désactive
    if (this.activeTab) {
      this.activeTab.classList.remove('is-active');
      this.activeContent.classList.remove('is-active');
    }

    // On active le nouvel onglet
    clicked.classList.add('is-active'); // On ajoute .is-active au div qui à le meme nom de classe ex: "union" que celui du tab
    const contenusDuTab = this.elementHTML.querySelector(
      `.tab-container > .${target}`
    );
    if (contenusDuTab) {
      contenusDuTab.classList.add('is-active');
      // On mémorise pour le prochain clic
      this.activeTab = clicked;
      this.activeContent = contenusDuTab;
    }
  }
}
