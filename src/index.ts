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
export const pages = {
  page404: '/404',
  page500: '/500',
  auth: '/',
  registration: '/registration',
  chatlist: '/chatlist',
  profile: '/profile',
};

router
  .use(pages.page404, Page404)
  .use(pages.page500, Page500)
  .use(pages.auth, Auth)
  .use(pages.registration, Registration)
  .use(pages.chatlist, ChatList)
  .use(pages.profile, Profile)
  .start();
