export default class Tabs {
  constructor(root) {
    this.root = root;
    this.tabs = root.querySelectorAll('.js-tab');
    this.contents = root.querySelectorAll('.tab-container > div');
    this.init();
  }

  init() {
    // On utilise une flèche pour capturer "tab" dans la closure
    for (let i = 0; i < this.tabs.length; i++) {
      const tab = this.tabs[i];
      tab.addEventListener('click', () => this.activate(tab));
    }
  }

  activate(clicked) {
    // La deuxième classe est la target
    const target = clicked.classList[1];
    if (!target) return;

    // 1) Désactivation de tous les onglets et contenus
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].classList.remove('is-active');
    }
    for (let i = 0; i < this.contents.length; i++) {
      this.contents[i].classList.remove('is-active');
    }

    // 2) Activation du tab
    clicked.classList.add('is-active');

    // 3) Affichage du contenu associé
    const panel = this.root.querySelector(`.tab-container > .${target}`);
    if (panel) panel.classList.add('is-active');
  }
}
