import { Router } from './modules/router/router';
import { ChatList } from './pages/chatList/ChatList';

const router = new Router('.app');
router.use('/', ChatList).start()
