import Scrolly from './components/Scrolly';
import Header from './components/Header';
import Form from './components/Form';
import Tabs from './components/Tabs';

export default class ComponentFactory {
  constructor() {
    this.componentList = {
      Header,
      Scrolly,
      Form,
      Tabs,
    };
    this.init();
  }

  init() {
    console.log('Initialisation du ComponetFacory');
    // Scrolly
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      console.log(element);
      const componentName = element.dataset.component;

      new this.componentList[componentName](element);
    }
  }
}
