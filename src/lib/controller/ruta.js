import Home from '../view/home_view.js';
import Nosotros from '../view/nosotros_view.js';
import {getCumpleañosPersonas} from '../model/model.js';
const components = {
  home: Home,
  nosotros: Nosotros,
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
      case '#/Nosotros':
            container.appendChild(components.nosotros());
          break;
    default:
      container.appendChild(components.home());
      break;
  }
};
