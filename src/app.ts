import { Block } from './modules/block/block';
import { h } from './modules/templateEngine/index';

class App extends Block {
  constructor(props = {}) {
    super('app', props);
  }

  render() {
    return h('div', { className: 'hel' }, 'Hello world');
  }
}

export const app = new App();
