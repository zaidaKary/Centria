export default () => {
  const divElem = document.createElement('div');
  const viewHome =  `
  <header>
 
  <nav id="navbar-catalogo" class="navbar navbar-expand-lg navbar-light btn-white">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class ="buscador">
  <img class="log flex1" src="../src/imgs/LOGO CENTRIA.png">
  
  </div>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav nav-fill w-100 mr-auto mt-2 mt-lg-0">
      <li id="btnConservas" class="nav-item active">
        <a class="nav-link text-white">Conservas<span class="sr-only">(current)</span></a>
      </li>
      <li id="btnAceites" class="nav-item">
        <a class="nav-link text-white">Aceites</a>
      </li>
      <li id="btnPastas" class="nav-item">
        <a class="nav-link text-white">Pastas</a>
      </li>
      <li  id ="btnDetergentes" class="nav-item">
        <a class="nav-link text-white ">Detergentes</a>
      </li>
      <li id="btnJabones" class="nav-item">
        <a class="nav-link text-white" tabindex="-1" aria-disabled="true">Jabones</a>
      </li>
      
    </ul>
    <div class="infoMenuDerecha">
    <img class="nosotros" src="../src/imgs/multiple-users-silhouette.svg" alt="Usuario Perfil"/>
    <p id="name"></p>
  </div>
  </div>
  <div id="cuadro"> <p type="button"></p></div>
</nav>
  </header>
  
    <div>
      <p id="btnOk">→</p>
    </div>
    <div id="containerCentral" class ="cardProd">
    </div>
    <body>
    <div>
    <!--Carousel Wrapper-->
    <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel" data-interval="2000">
      <!--Indicators-->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-2" data-slide-to="1"></li>
        <li data-target="#carousel-example-2" data-slide-to="2"></li>
      </ol>
      <!--/.Indicators-->
      <!--Slides-->
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="view">
            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
              alt="First slide">
            <div class="mask rgba-black-light"></div>
          </div>
          <div class="carousel-caption">
            <h3 class="h3-responsive">Light mask</h3>
            <p>First text</p>
          </div>
        </div>
        <div class="carousel-item">
          <!--Mask color-->
          <div class="view">
            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide">
            <div class="mask rgba-black-strong"></div>
          </div>
          <div class="carousel-caption">
            <h3 class="h3-responsive">Strong mask</h3>
            <p>Secondary text</p>
          </div>
        </div>
        <div class="carousel-item">
          <!--Mask color-->
          <div class="view">
            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide">
            <div class="mask rgba-black-slight"></div>
          </div>
          <div class="carousel-caption">
            <h3 class="h3-responsive">Slight mask</h3>
            <p>Third text</p>
          </div>
        </div>
      </div>
      <!--/.Slides-->
      <!--Controls-->
      <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <!--/.Controls-->
    </div>
    <!--/.Carousel Wrapper-->
   </body>
    `;
 
  divElem.innerHTML = viewHome;
  return divElem;
};
/* <form class=" flex2 form-inline my-2 my-lg-0">
          <input id="buscar" class="form-input mr-sm-2" type="search" placeholder="¿Qué producto necesitas?">
          <i class="fa fa-search btn-search" aria-hidden="true"></i>

        </form> */