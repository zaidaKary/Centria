export default (data) => {
    console.log(data);
    const divElem = document.createElement('div');
    const viewPilares = `
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
<div class="pilares">
<div><h1 class="titulo-pilares">PILARES DE NUESTRA CULTURA</h1></div>
<div class="parrafo"><img class="imagen-pilares" src="../src/imgs/pilares-02.png" alt=""><label class="labe">Garantizar la calidad de nuestros servicios y soluciones a través de una dinámica laboral ágil y pragmática dentro de un ambiente que facilite la gestión colaborativa.</label></div>
<div class="parrafo"><img class="imagen-pilares" src="../src/imgs/gestion.png" alt=""><label class="labe">Fomentar un espíritu de innovación y creatividad para la mejora continua de nuestros procesos en beneficio de nuestros clientes.</label></div>
<div class="parrafo"><img class="imagen-pilares" src="../src/imgs/clientes.png" alt=""><label class="labe">Generar valor a las empresas del grupo, brindando los mejores servicios y oluciones innovadoras, un compromiso mutuo.</label></div>
<div class="parrafo"><img class="imagen-pilares" src="../src/imgs/talento.png" alt=""><label class="labe">Ser un centro de excelencia en nuestros clientes con talento motivado, creativo y continuamente especializado.</label></div>
</div>
</body>`;

    divElem.innerHTML = viewPilares;
    return divElem;
};
