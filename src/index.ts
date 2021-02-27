import { Router } from './modules/router/router';
import { ChatList } from './pages/chatList/ChatList';
import { Auth } from './pages/auth/Auth';
import { Registration } from './pages/registration/Registration';
import { Page404 } from './pages/errors/Page404';
import { Page500 } from './pages/errors/Page500';

import './styles.css';
import { Profile } from './pages/profile/Profile';

const appRoot = 'app';
const init = () => {
  const body = document.getElementsByTagName('body');
  const appNode = document.createElement('div');
  appNode.className = appRoot;
  body[0].appendChild(appNode);
};

init();

export const router = new Router(`.${appRoot}`);
router
  .use('/404', Page404)
  .use('/500', Page500)
  .use('/auth', Auth)
  .use('/registration', Registration)
  .use('/chatlist', ChatList)
  .use('/', Profile)
  .start();
