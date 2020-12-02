import { render } from '../../modules/templateEngine';
import { RegistrationView } from './Auth.js';
import { Model } from '../../modules/model/model.js';
import { getRoot } from '../../modules/utils/helpers.js';

const rootElement = getRoot();

const initState = {
  mail: '',
  mailError: '',
  password: '',
};

export const model = new Model({
  container: rootElement,
  initState,
  render,
  component: RegistrationView,
});

render(RegistrationView(), rootElement);
