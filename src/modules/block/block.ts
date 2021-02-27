import { force, render } from '../templateEngine';

export class Block {
  private container: HTMLElement;
  private rootContainer: HTMLElement;
  private isRender = false;
  private blockFunction: Function;

  constructor(blockFunction: Function, rootContainer: HTMLElement) {
    this.rootContainer = rootContainer;
    this.blockFunction = blockFunction;
    this.container = document.createElement('div');
    this.rootContainer.appendChild(this.container);
    this.container.hidden = true;
  }

  hide() {
    force();
    this.container.hidden = true;
  }

  show() {
    if (!this.isRender) {
      render(this.blockFunction(), this.container);
      this.isRender = true;
    }
    this.container.hidden = false;
  }
}
