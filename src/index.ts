import { Router } from './modules/router/router';
import { ChatList } from './pages/chatList/ChatList';

import './styles.css';

const init = () => {
  const body = document.getElementsByTagName('body');
  const appNode = document.createElement('div');
  appNode.className = 'app';
  body[0].appendChild(appNode);
};

init();

const router = new Router('.app');
router.use('/', ChatList);
router.start();
