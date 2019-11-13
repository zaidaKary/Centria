import {itemPersona} from '../view/itemPersona.js';
export default (data) => {
	console.log(data);
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
<div class="contenedor-padre">
<div class="card" style="width: 25rem;">
  <img src="../src/imgs/noticia.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Hoy iniciamos nuestra participación en la Hackathon de treinta y seis horas ininterrumpidas como parte del #TalentFest2019 organizado por Laboratoria, en donde resolveremos el reto de negocio planteado de la mano de las egresadas de Laboratoria.</p>
  </div>
</div>
<div class="hijo-contenedor">
<div class="container">

		<div class="calendar">

			<div>				

				<h2>Noviembre</h2>

		

			</div>
			
			<table>
			
				<thead>
					
					<tr>
						
						<td>L</td>
						<td>M</td>
						<td>M</td>
						<td>J</td>
						<td>V</td>
						<td>S</td>
						<td>D</td>

					</tr>

				</thead>

				<tbody>
					
					<tr>
						<td class="prev-month">27</td>
						<td class="prev-month">28</td>
						<td class="prev-month">29</td>
						<td class="prev-month">30</td>
						<td class="prev-month">31</td>
						<td class="prev-month">1</td>
						<td>2</td>
					</tr>
					<tr>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>6</td>
						<td>7</td>
						<td>8</td>
						<td>9</td>
					</tr>
					<tr>
						<td>10</td>
						<td class="event">11</td>
						<td>12</td>
						<td class="current-day event">13</td>
						<td>14</td>
						<td>15</td>
						<td>16</td>
					</tr>
					<tr>
						<td>17</td>
						<td>18</td>
						<td>19</td>
						<td>20</td>
						<td>21</td>
						<td class="event">22</td>
						<td>23</td>
					</tr>

					<tr>
						<td >24</td>
						<td>25</td>
						<td>26</td>
						<td>27</td>
						<td>28</td>
						<td>29</td>
						<td>30</td>
					</tr>
					<tr>
						<td>1</td>
						<td class="next-month">2</td>
						<td class="next-month">3</td>
						<td class="next-month">4</td>
						<td class="next-month">5</td>
						<td class="next-month">6</td>
						<td class="next-month">7</td>
					</tr>

				</tbody>

			</table>

		</div> <!-- end calendar -->

  </div> <!-- end container -->
  </div> <!-- end contenedor-padre -->
  </div>
  <div id="contenedorPersona">
  </div>
</body>`;
 
  divElem.innerHTML = viewHome;
  const contenedorPersonasCumpleaños = divElem.querySelector('#contenedorPersona');
  data.forEach((element) => {
	  console.log(element.Nombres);
	  contenedorPersonasCumpleaños.appendChild(itemPersona(element.Nombres));
  })
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