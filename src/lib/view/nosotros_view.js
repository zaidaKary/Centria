export default () => {
  const divElem = document.createElement('div');
  const viewNosotros =  `
  <header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white ">
  
    <a id ="logo-centria"class="navbar-brand" href="#/Home">
          <img class="log flex1" src="../src/imgs/LOGO CENTRIA.png" alt="">
        </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="  navbar-nav ml-auto">
        <li id="centria-nosotros" class="nav-item active">
        <a class="nav-link active" href="#!"><img  class="centria" src="../src/imgs/C azul_Mesa de trabajo 1.png"></a>
        <p class="texto">Nosotros</p>
              </a>
        </li>
        <li id="centria-usuarios" class="nav-item">
        <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/usuario.png"></a>
        <p class="texto">Gestion Humana</p>
        </li>
        <li id="centria-portales" class="nav-item">
        <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/laptop (2).png"></a>
        <p class="texto">Portales</p>
        </li>
        <li id="centria-salas" class="nav-item">
        <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/sala.png"></a>
        <p class="texto">Salas</p>
        </li>
        <li id="centria-users" class="nav-item avatar">
        <a id="user-icon" class="nav-link" href="#">
          <img  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
            alt="avatar image" height="55">
            <p class="texto" id="cuenta-user">Erika Quispe</p>

        </a>
      </li>
      </ul>
    </div>

</nav>
</header>

<body>

<table class="tableNosotros">
    <tbody>
        <tr>
            <td rowspan="4" class="tdImagen">
            <img  class="imagenSomos" src="./imgs/b1.jpg" alt="imagen quienes somos">
            </td>
            <td class="txtNosotros"><h1>¿QUIENES SOMOS?</h1></td>
        </tr>
      <tr>
        <td class="txtDescriptcion">
        <div>
        <label>Somos una empresa de servicios administrativos enfocada </br> 
        en identificar sinergias y generar eficianecias para las </br> 
        empresas del Grupo Breca 
        </label></div></td>
      </tr>
      <tr>
        <td class="txtNosotros"><h1>PROPÓSITO</h1></td>
      </tr>
      <tr>
        <td class="txtDescriptcion"><label>Crear soluciones para que las personas y negocios desarrollen</br> 
        todo su potencial.</label></td>
      </tr>
    </tbody>
</table>
</body>`;
 
  divElem.innerHTML = viewNosotros;
  return divElem;
};
