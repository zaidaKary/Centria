export default () => {
  const divElem = document.createElement('div');
  const viewHome = `
  <header class="barra-menu" id="barra-menu">
  <div class="contenedor-logo">
      <img class="logo-menu" src="./img/logoMenu2.png" alt="Logo live & travel" />
  </div>
  <div class="contenedor-menu">
      <input type="checkbox" id="btn-menu">
      <label class="glyphicon glyphicon-align-justify menu-movil" for="btn-menu"></label>
      <nav class="menu">
          <ul>
              <li id="btn-perfil"><a> PERFIL </a></li>
              <li id="btn-cerrar"><a>CERRAR SESIÓN</a></li>
          </ul>
      </nav>
  </div>
</header>
    <div id="vista-home">
    </div>`;
 
  divElem.innerHTML = viewHome;
  return divElem;
};
