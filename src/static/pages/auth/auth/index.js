import { render } from '../../../../templateEngine/index.js';
import { RegistrationView } from './Auth.js';
import { Model } from '../../../../model/model.js';
import { getRoot } from '../../../../utils/helpers.js';

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
