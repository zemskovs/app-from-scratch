import { render } from '../../../../templateEngine/index.js';
import { RegistrationView } from './Registration.js';
import { Model } from '../../../../model/model.js';

const rootClass = 'root';
const rootElement = document.querySelector(`.${rootClass}`);

const initState = {
  mail: '',
  mailError: '',
  password: '',
  passwordError: '',
  repeatPassword: '',
};

export const model = new Model({
  container: rootElement,
  initState,
  render,
  component: RegistrationView,
});

render(RegistrationView(), rootElement);
