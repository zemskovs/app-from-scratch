import { template } from './profileTemplate.js';

const profilePage = template();

const rootClass = 'root';
const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = profilePage;
