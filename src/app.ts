import { Block } from './modules/block/block';
import { h } from './modules/templateEngine/index';

class App extends Block {
  constructor(props = {}) {
    // Создаем враппер дом-элемент button
    super('button', props);
  }

  render() {
    // В проект должен быть ваш собственный шаблонизатор
    return h('div', { className: 'hel' }, 'Hello world');
  }
}

export const app = new App();
