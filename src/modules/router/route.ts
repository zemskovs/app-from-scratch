import { isEqual } from '../utils/mydash/util';
import { render } from '../templateEngine/index';

export class Route {
  private _pathname: string;
  _blockClass;
  _block;
  _props;
  _rootContainer;

  constructor(pathname, view, rootContainer, props?) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
    this._rootContainer = rootContainer;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    // if (!this._block) {
    //   this._block = new this._blockClass();
    // }

    // if (typeof this._block.render === 'function') {
    //   render(this._block.render(), el[0]);
    //   return;
    // }
    render(this._blockClass(), this._rootContainer);
  }
}
