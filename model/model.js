class Model {
  state = {};

  constructor({ render, component, container, initState }) {
    this.render = render;
    this.component = component;
    this.container = container;
    this.state = initState;
  }

  renderElement = () => {
    this.render(this.component(), this.container);
  };

  setState = (newState) => {
    this.state = newState;
    this.renderElement();
  };

  useState = () => [this.state, this.setState];
}

export { Model };
