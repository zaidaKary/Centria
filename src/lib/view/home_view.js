import {itemPersona} from '../view/itemPersona.js';
export default (data) => {
	console.log(data);
	var d = new Date();
	const dia = d.getDate();
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[d.getMonth()]);
  const divElem = document.createElement('div');
  const viewHome =  `
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
            
            <div class="iconoRegalo">
            <a href="javascript:;" id="modal"><img src="../src/imgs/cumpleanos.png" alt="icono cumpleaños" class="imagenCumple"></a>
            </div>

        </div>
    </div>
</div> <!-- end contenedor-padre -->
</div>

		<footer class="page-footer font-small blue">
		<div  class="text-center py-3">
		<p id="copyright">Mantente conectado</p>
		</div>
		<div class="social text-senter redSocial">
		<a href="https://www.facebook.com/groups/680173985758480/"><img src="../src/imgs/facebook.png" alt="facebook" class="facebook"></a>
		<a href="https://www.instagram.com/c3.0centria/"><img src="../src/imgs/instragram.png" alt="instagram" class="instagram"></a>
		<a href="https://www.linkedin.com/company/centria---csc-grupo-breca/?viewAsMember=true"><img src="../src/imgs/linkelin.png" alt="instagram" class="linkelin"></a>
	  </div>
		<div class="footer-copyright text-center py-3"><strong>©2019 CENTRIA - TODOS LOS DERECHOS RESERVADOS </strong>
		</div>
	  </footer>
</body>`;
    divElem.innerHTML = viewHome;
//   const contenedorPersonasCumpleaños = divElem.querySelector('#contenedorPersona');
  const idModal = divElem.querySelector('#modal');
	const contenidoModal = document.createElement('div');
	contenidoModal.innerHTML=  `<label class="mes">${dia} ${(months[d.getMonth()])}</label>`;
  data.forEach((element) => {
	//   console.log(element.Nombres);
	//   console.log(element.FechaNacimiento);
	contenidoModal.appendChild(itemPersona(element.Nombres,element.imagen));
  })

  var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
modal.setContent(contenidoModal.innerHTML);

// open modal
idModal.addEventListener('click', () =>{
	modal.open();
});
// close modal
// modal.close();

  return divElem;
  };
