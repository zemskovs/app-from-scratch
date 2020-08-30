import { template } from './chatTemplate.js';
import { userTemplate } from '../../../common/templates/user.js';

const authUserTemplate = userTemplate({
  name: 'Виктор',
  lastDate: '2 минуты назад',
})
const auth = template({ userTemplate: authUserTemplate});

const rootClass = 'root';
const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = auth;
