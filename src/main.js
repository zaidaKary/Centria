import { changeView } from './lib/controller/ruta.js';

const init = () => { 
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
