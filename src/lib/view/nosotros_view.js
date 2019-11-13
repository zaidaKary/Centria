import {itemPersona} from '../view/itemPersona.js';
export default (data) => {
	console.log(data);
  const divElem = document.createElement('div');
  const viewNosotros =  `
  <header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white ">
  
    <a id ="logo-centria"class="navbar-brand" href="#">
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
<div class="quienesSomos">
    <div>
    <img  class="imagenSomos" src="./imgs/b1.jpg" alt="imagen quienes somos">
    </div>
    <div class="textoNosotros">
    <h1>¿QUIENES SOMOS?</h1>
    <label>Somos una empresa de servicios administrativos enfocada en identificar 
    sinergias y generar eficianecias para las empresas del Grupo Breca.</label>
    <h1>PROPÓSITO</h1>
    <label>Crear soluciones para que las personas y negocios desarrollen todo su potencial.</label>
    </div>
</div>
<div class="quienesSomos">
    <div class="textoNosotros">
    <h1>COMPETENCIAS-COLABORADOR</h1>
    <label>Orientacion al logro</label>
    <label>Foco en el cliente</label>
    <label>Comunicación efectiva</label>
    <label>Autonomía</label>
    </div>
    <div>
    <img  class="imagenSomos" src="./imgs/b2.png" alt="imagen quienes somos">
    </div>
</div>
<div class="quienesSomos">
    <div class="textoNosotros">
    <h1>COMPETENCIAS-COLABORADOR</h1>
    <label>Orientacion al logro</label>
    <label>Foco en el cliente</label>
    <label>Comunicación efectiva</label>
    <label>Autonomía</label>
    </div>
    <div>
    <img  class="imagenSomos" src="./imgs/imagenNosotros.JPG" alt="imagen quienes somos">
    </div>
</div>
</body>`;
 
  divElem.innerHTML = viewNosotros;
  return divElem;
};
