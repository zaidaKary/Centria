export default () => {
  const divElem = document.createElement('div');
  const viewHome =  `
  


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
        <p>Nosotros</p>
              </a>
        </li>
        <li id="centria-usuarios" class="nav-item">
        <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/usuario.png"></a>
        <p>Gestion Humana</p>
        </li>
        <li id="centria-portales" class="nav-item">
        <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/laptop (2).png"></a>
        <p>Portales</p>
        </li>
        <li id="centria-salas" class="nav-item">
        <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/sala.png"></a>
        <p>Salas</p>
        </li>
        <li id="centria-users" class="nav-item">
        <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/sala.png"></a>
        <p>Salas</p>
        </li>
      </ul>
    </div>

</nav>
</header>
<body>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../src/imgs/IMG_1318.JPG" class="d-block w-100 h-60" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../src/imgs/slide.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../src/imgs/slide1.jpg" class="d-block w-100" alt="...">
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
<div><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahdkjhfgfah</p></div>
</body>


    `;
 
  divElem.innerHTML = viewHome;
  return divElem;
};
// <!--Carousel Wrapper-->
//     <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel" data-interval="2000">
//       <!--Indicators-->
//       <ol class="carousel-indicators">
//         <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
//         <li data-target="#carousel-example-2" data-slide-to="1"></li>
//         <li data-target="#carousel-example-2" data-slide-to="2"></li>
//       </ol>
//       <!--/.Indicators-->
//       <!--Slides-->
//       <div class="carousel-inner" role="listbox">
//         <div class="carousel-item active">
//           <div class="view">
//             <img id="slider" class=" d-block" src="../src/imgs/IMG_1318.JPG"
//               alt="First slide">
//             <div class="mask rgba-black-light"></div>
//           </div>
//           <div class="carousel-caption">
//             <h3 class="h3-responsive">Light mask</h3>
//             <p>First text</p>
//           </div>
//         </div>
//         <div class="carousel-item">
//           <!--Mask color-->
//           <div class="view">
//             <img id ="slider1" class="r d-block " src="../src/imgs/slide1.jpg"
//               alt="Second slide">
//             <div class="mask rgba-black-strong"></div>
//           </div>
//           <div class="carousel-caption">
//             <h3 class="h3-responsive">Strong mask</h3>
//             <p>Secondary text</p>
//           </div>
//         </div>
//         <div class="carousel-item">
//           <!--Mask color-->
//           <div class="view">
//             <img id="slider2"class=" d-block " src="../src/imgs/slide2.jpg"
//               alt="Third slide">
//             <div class="mask rgba-black-slight"></div>
//           </div>
//           <div class="carousel-caption">
//             <h3 class="h3-responsive">Slight mask</h3>
//             <p>Third text</p>
//           </div>
//         </div>
//       </div>
//       <!--/.Slides-->
//       <!--Controls-->
//       <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="sr-only">Previous</span>
//       </a>
//       <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="sr-only">Next</span>
//       </a>
//       <!--/.Controls-->
//     </div>
//     <!--/.Carousel Wrapper-->
//    </body>