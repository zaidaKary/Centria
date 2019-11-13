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
      const fecha = new Date();
      const dia = fecha.getDate();
      const mes = fecha.getMonth() +1;
      const newDia = `${dia}/${mes}`;
      // console.log(typeof newDia);
      console.log(newDia);
      console.log(mes);
      getCumpleañosPersonas(newDia,pintarDataCumpleaños);
      // getCumpleañosPersonas(pintarDataCumpleaños);
      break;
    default:
      container.appendChild(components.home());
      break;
  }
};
