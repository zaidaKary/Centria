import Home from '../view/home-view.js';
const components = {
  home: Home,
};

export const changeView = (route) => {
  const container = document.getElementById('root');
  container.innerHTML = '';
  switch (route) {
    case '#/Home':
      container.appendChild(components.home());
      break;
    default:
      container.appendChild(components.home());
      break;
  }
};
