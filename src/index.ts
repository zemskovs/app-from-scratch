import { app } from './app'
import { render } from './modules/templateEngine/index';

const root = document.querySelector(".root");
debugger;
render(app.render(), root);
