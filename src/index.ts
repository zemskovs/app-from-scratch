import { app } from './app';
import { render } from './modules/templateEngine/index';

const root = document.querySelector('.root');
render(app.render(), root);
