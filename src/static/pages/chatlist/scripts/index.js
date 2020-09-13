import { chatListTemplate } from './chatListTemplate.js';
import { getRoot } from '../../../../utils/helpers.js';

const chatListPage = chatListTemplate();

const rootElement = getRoot();

rootElement.innerHTML = chatListPage;
