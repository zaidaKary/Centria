import Home from '../view/home_view.js';
import Nosotros from '../view/nosotros_view.js';
import Competencias from '../view/competencia_view.js';
import Pilares from '../view/pilares_view.js';
import {getCumpleañosPersonas} from '../model/model.js';
const components = {
  home: Home,
  nosotros: Nosotros,
  competencias: Competencias,
  pilares:Pilares,
};

export const changeView = (route) => {
  const container = document.getElementById('root');
  container.innerHTML = '';
  switch (route) {
    case '#/Home':
      const pintarDataCumpleaños = (objetDataCumple) => {
        container.innerHTML = '';
        container.appendChild(components.home(objetDataCumple));
      };
      const fecha = new Date();
      const dia = fecha.getDate();
      const mes = fecha.getMonth() + 1;
      const newDia = `${dia}/${mes}`;
      // console.log(typeof newDia);
      console.log(newDia);
      console.log(mes);
      getCumpleañosPersonas(newDia, pintarDataCumpleaños);
      // getCumpleañosPersonas(pintarDataCumpleaños);
      break;
      case '#/Nosotros':
            container.appendChild(components.nosotros());
          break;
      case '#/Competencias':
            container.appendChild(components.competencias());
          break;    
      case '#/Pilares':
          container.appendChild(components.pilares());
          break;
    default:
      container.appendChild(components.home());
      break;
  }
};
