import { template } from '../templates/loginTemplate.js';
import { buttonTemplate } from '../../../common/templates/button.js';
import { cart } from '../templates/registrationCart.js';
import { render } from '../../../../templateEngine/index.js';
import { Registration } from './Registration.js';

const loginButtonTemplate = buttonTemplate({
  largeButton: true,
  text: 'Регистрация',
  buttonClasses: 'registration-button',
});

const rootClass = 'root';
// const registration = template({
//   cartTemplate: cart({
//     loginButton: loginButtonTemplate,
//   }),
// });

const rootElement = document.querySelector(`.${rootClass}`);

export const renderRegistration = () => {
  render(Registration(), rootElement);
};
