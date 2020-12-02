import { render } from '../../modules/templateEngine';
import { RegistrationView } from './Registration.js';
import { Model } from '../../modules/model/model';
import { getRoot } from '../../modules/utils/helpers';

const rootElement = getRoot();

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
