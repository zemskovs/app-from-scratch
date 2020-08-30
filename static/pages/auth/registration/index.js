import { template } from '../auth/authTemplate.js';
import { cart } from '../components/registrationCart.js';

const rootClass = 'root';
const registration = template({ cartTemplate: cart()});

const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = registration;
