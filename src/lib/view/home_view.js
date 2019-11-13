import { itemPersona } from '../view/itemPersona.js';
export default (data) => {
  console.log(data);
  var d = new Date();
  const dia = d.getDate();
  var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  console.log(months[d.getMonth()]);
  const divElem = document.createElement('div');
  const viewHome = `
  <header>
  <section id="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a id ="logo-centria" class="navbar-brand" href="http://127.0.0.1:5500/src/index.html#/Home">
      <img  src="../src/imgs/LOGO CENTRIA.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
        <div class="wrap">
        <div class="search">
        <input type="text" class="searchTerm" placeholder="Search">
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
       </button>
        </div>
        </div>
          <li  id="centria-nosotros" class="nav-item">
          <a class="nav-link active" href="http://127.0.0.1:5500/src/index.html#/Nosotros"><img  class="centria" src="../src/imgs/C azul_Mesa de trabajo 1.png"></a>
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
		  
          <li id="centria-salas"class="nav-item">
          <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/sala.png"></a>
          <p class="texto">Salas</p>
		  </li>
		  
          <li id="centria-users" class="nav-item">
          <a  class="nav-link" href="#">
          <img  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="centria rounded-circle z-depth-0"
            alt="avatar image" height="55">
            </a>
            <p class="texto" >Erika Gomez</p>
          </li>
          
        </ul>
      </div>
    </nav>
  </section>
</header>
<body>
<div class="hover"></div>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner data-interval="2000">
    <div class="carousel-item active data-interval="2000">
      <img src="../src/imgs/IMG_1318 (1).JPG" class="d-block w-100 h-60" alt="...">
    </div>
    
    <div class="carousel-item data-interval="2000">
      <img src="../src/imgs/slide3 (1).jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item data-interval="2000">
      <img src="../src/imgs/code-coder-codes-34600 (1).jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="contenedor-padre">
    <div>
        <div class="card" style="width: 25rem;">
            <img src="../src/imgs/noticia.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Hoy iniciamos nuestra participación en la Hackathon de treinta y seis horas ininterrumpidas como parte del #TalentFest2019 organizado por Laboratoria, en donde resolveremos el reto de negocio planteado de la mano de las egresadas de Laboratoria.</p>
            </div>
           
          </div>
	</div>
	
	<div>
    <div id="hijo-contenedor">
        <!-- calendario -->
        <div class="google-calendar">
        <iframe src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLima&amp;src=Zm5ycmJyMnBqODg1OGtwN3RkazJrdm1ib29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23336699&amp;showTz=0&amp;showCalendars=0&amp;showPrint=0&amp;showTitle=0&amp;showNav=1" style="border-width:0" width="400" height="400" frameborder="0" scrolling="no"></iframe>
        </div>
        <!-- accesos directos -->
        <div class="div-acceso-directo">
            <div class="txtAcceso">
                <label>Accesos directos</label>
            </div>
            <div class="estiloAccesoDirecto">
            <div class="cuadrado-ad">
              <img src="../src/imgs/puzzle-piece-plugin.svg">
              <p>Portal de Rendiciones</p>
            </div>
      
            <div class="cuadrado-ad">
              <img src="../src/imgs/puzzle-piece-plugin.svg">
              <p>Formatos</p>
            </div>

            <div class="cuadrado-ad">
              <img src="../src/imgs/puzzle-piece-plugin.svg">
              <p>Rist</p>
            </div>
        </div>
        </div>
        <!-- fin de accesos directos -->    
    </div>

    <div>
        <div class="beneficios-div">
            <div>
             <img id="beneficios" class="img-beneficios"src="../src/imgs/Botón-Beneficios.jpg" >
            </div>

            <div>
            <img id="integridad"class="img-beneficios" src="../src/imgs/Botón-Canal-de-Integridad.jpg" >
            </div>

            <div>
            <img id ="oportunidades" class="img-beneficios" src="../src/imgs/Botón-Oportunidades-de-Desarrollo.jpg" >
            </div>

        </div>
    </div>
</div> <!-- end contenedor-padre -->
</div>

		<footer class="page-footer font-small blue">
		
		<p class="text-center " id="copyright">Mantente conectado</p>
		
		<div class="social text-senter redSocial">
		<a href="https://www.facebook.com/groups/680173985758480/"><img src="../src/imgs/facebook.png" alt="facebook" class="facebook"></a>
		<a href="https://www.instagram.com/c3.0centria/"><img src="../src/imgs/instragram.png" alt="instagram" class="instagram"></a>
		<a href="https://www.linkedin.com/company/centria---csc-grupo-breca/?viewAsMember=true"><img src="../src/imgs/linkelin.png" alt="instagram" class="linkelin"></a>
	  </div>
		<div class="footer-copyright text-center py-3"><strong>©2019 CENTRIA - TODOS LOS DERECHOS RESERVADOS </strong>
		</div>
    </footer>
    <div class="iconoRegalo">
    <a href="javascript:;" id="modal"><img src="../src/imgs/cumpleanos.png" alt="icono cumpleaños" class="imagenCumple"></a>
    </div>
</body>`;

  divElem.innerHTML = viewHome;
  //   const contenedorPersonasCumpleaños = divElem.querySelector('#contenedorPersona');
  const idModal = divElem.querySelector('#modal');
  const contenidoModal = document.createElement('div');
  const hover = divElem.querySelector('#centria-usuarios');
 const centriaNosotros = divElem.querySelector('#centria-nosotros');
 const centriaPortales = divElem.querySelector('#centria-portales');
 const centriaSalas = divElem.querySelector('#centria-salas');


  contenidoModal.innerHTML = `<label class="mes">${dia} ${(months[d.getMonth()])}</label>`;
  data.forEach((element) => {
    //   console.log(element.Nombres);
    //   console.log(element.FechaNacimiento);
    contenidoModal.appendChild(itemPersona(element.Nombres, element.imagen));
  })

  const templateUsuario = () =>{
    const templateLista = divElem.querySelector('.hover');
    templateLista.innerHTML =`<ul class="submenu Nosotros">
    <li><a href="https://appevaluaciondesempenio.azurewebsites.net/" target="_blank" class="noDecoration">Portal de Desempeño</a></li>
    <li><a href="https://appportalempleados.azurewebsites.net/" target="_blank" class="noDecoration">Portal de Colaboradores</a></li>
    <li><a href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=0000000c-0000-0000-c000-000000000000&redirect_uri=https%3A%2F%2Faccount.activedirectory.windowsazure.com%2F&response_mode=form_post&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3D2JGgPvv4cyvf3ogWDWmC41bmVEOKk9KtvzclBWD4sF8UCo_Gn27iJjQomNBtzwGbUgtV7RpJ7q4PtkEH7hfaQP36QY54awcxfsWXm17MUUA50G0LtBlrTUqs2sGJZOLzlO7ENk5GZn_dRvf3Pe0Hv5-vdXOsfcfaM7N8SGjz8bsilWZH3da0eTey9Nx6P1ybrbtC16Q5K1OAX9mrbkduwUibhqfWoq_ewo1RmtvT4toG_YU1Rcs2wTa-OOfTGqB2V7fpSo634xvN_mRr-ZqI73oWtjH-5fHQGS9iEF9Ra6C-RDDNKgZSmDMiWMiApbVCa1KchkhA8_zUvx-vveNumDU2bXAuVuGFUXy-LKvgSotFna-lejgW-ap5KRHLiJH5&nonce=1573574107.QnzlxyaeHRH5glRjxiMMlQ&nux=1&sso_reload=true" target="_blank" class="noDecoration">Portal de Beneficios</a></li>
    <li><a href="./RIT.pdf" target="_blank" class="noDecoration">RIT</a></li>
    <li><a href="./RISST.pdf" target="_blank" class="noDecoration">RISST</a></li>
    </ul>`  
  
}
const templatePortales = () =>{
  const templateLista = divElem.querySelector('.hover');
  templateLista.innerHTML =`<ul class="submenu">
  <li><a href="https://appportallegal.azurewebsites.net/main" target="_blank" class="noDecoration">Portal Atenea</a></li>
  <li><a href="https://login.microsoftonline.com/3e0289c2-e351-4c79-998b-8167c83a06d3/oauth2/authorize?response_type=id_token&redirect_uri=https%3A%2F%2Fappsistemarendiciones.azurewebsites.net%2F.auth%2Flogin%2Faad%2Fcallback&client_id=1ef02fe7-72fb-4c9c-a8ed-fa2a0b954759&scope=openid+profile+email&response_mode=form_post&nonce=9db0cf4dd83b4a5aa838620f4293800f_20191112232945&state=redir%3D%252F" target="_blank" class="noDecoration">Portal de Rendiciones</a></li>
  <li><a href="https://centriaprod.service-now.com/centria/" target="_blank" class="noDecoration">Mesa de Servicios</a></li>
  <li><a href="http://192.168.26.34/TeamCentral/Login/LoginPage.aspx?ReturnUrl=%2fTeamcentral%2f" target="_blank" class="noDecoration">Portal de Seguimiento de Auditoria</a></li>
  </ul>`  

}

hover.addEventListener('mouseover', () =>{
  templateUsuario();
    });
    // hover.addEventListener('mouseout', () => {
    //   document.querySelector('.hover').innerHTML = '';
    // }) ;

  const templateNosotros = () =>{
  const templateLista = divElem.querySelector('.hover');
  templateLista.innerHTML =`<ul class="submenu">
  <li><a href="http://127.0.0.1:5500/src/index.html#/Nosotros" class="noDecoration">Nosotros</a></li>
  <li><a href="http://127.0.0.1:5500/src/index.html#/Competencias" class="noDecoration">Competencias</a></li>
  <li><a href="http://127.0.0.1:5500/src/index.html#/Pilares" class="noDecoration">Pilares</a></li>
  <li><a href="./Organigrama (11.11.19).pdf" target="_blank" target="_blank" class="noDecoration">Organigrama</a></li>
  </ul>`  
}

  centriaNosotros.addEventListener('mouseover', () => {
    templateNosotros();
  
  }) ;
  // centriaNosotros.addEventListener('mouseout', () => {
  //   document.querySelector('.hover').innerHTML = '';
  
  // }) ;


centriaPortales.addEventListener('mouseover', () =>{
  templatePortales();
})

// centriaPortales.addEventListener('mouseout', () => {
//   document.querySelector('.hover').innerHTML = '';

// }) ;
  // hover.addEventListener('mouseout', () =>{
  //   console.log('hello')
  // } )

  var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function () {
      console.log('modal open');
    },
    onClose: function () {
      console.log('modal closed');
    },
    beforeClose: function () {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
      return false; // nothing happens
    }
  });

  // set content
  modal.setContent(contenidoModal.innerHTML);

  // open modal
  idModal.addEventListener('click', () => {
    modal.open();
  });
  // close modal
  // modal.close();
  
  
  return divElem;
};
