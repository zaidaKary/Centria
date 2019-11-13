import Home from '../view/home_view.js';
import {getCumpleañosPersonas} from '../model/model.js';
const components = {
  home: Home,
};

export const changeView = (route) => {
  const container = document.getElementById('root');
  container.innerHTML = '';
  switch (route) {
    case '#/Home':
      const pintarDataCumpleaños = (objetDataCumple) => {
        container.innerHTML='';
        container.appendChild(components.home(objetDataCumple));
      };
      getCumpleañosPersonas(pintarDataCumpleaños);
      break;
    default:
      container.appendChild(components.home());
      break;
  }
};
