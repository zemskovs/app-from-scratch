import { isEqual } from '../utils/mydash/util';
import { render } from '../templateEngine/index';

export class Route {
  _pathname;
  _blockClass;
  _block;
  _props;

  constructor(pathname, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
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
    if (!this._block) {
      this._block = new this._blockClass();
    }
    const el = document.getElementsByClassName('app');
    
    render(this._block.render(), el[0])
    this._block.show();
  }
}
