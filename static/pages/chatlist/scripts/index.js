import { template } from './chatListTemplate.js';
import { userTemplate } from '../../../common/templates/user.js';

const chatListPage = template();

const rootClass = 'root';
const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = chatListPage;
