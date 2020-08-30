import { template } from './authTemplate.js';
import { cart } from '../components/authCart.js';

const rootClass = 'root';
const auth = template({ cartTemplate: cart()});

const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = auth;
