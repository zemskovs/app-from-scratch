import { isEqual } from '../utils/mydash/util';
import { Block } from '../block/block';

export class Route {
  private _pathname: string;
  _blockClass;
  _block: Block;
  _props;
  _rootContainer;

  constructor(pathname, view, rootContainer, props?) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = new Block(view, rootContainer);
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
    this._block.show();
  }
}
