import { Router } from './modules/router/router';
import { App } from './app';

const router = new Router('.app');
router.use('/auth', App)
