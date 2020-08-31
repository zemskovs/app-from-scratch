import { template } from './chatListTemplate.js';
import { userTemplate } from '../../../common/templates/user.js';

const auth = template();

const rootClass = 'root';
const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = auth;
