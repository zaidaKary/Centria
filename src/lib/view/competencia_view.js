export default () => {
    const divElem = document.createElement('div');
    const viewCompetencias =  `
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
  <table class="tableNosotros">
      <tbody>
          <tr>
              <td colspan="2" class="txtNosotros"><h1>COMPETENCIAS - COLABORADOR</h1></td>
             <td rowspan="5" class="tdImagen">
             <img  class="imagenSomos" src="./imgs/b2.png" alt="imagen quienes somos">
             </td>
          </tr>
        <tr>
          <td class="txtDescriptcion"><img class="icono" src="./imgs/icono2.png" alt="imagen"><label>Orientacion al logro</label></td>
          <td></td>
        </tr>
        <tr>
        <td></td>
          <td class="txtDescriptcion"><img class="icono" src="./imgs/icono2.png" alt="imagen"><label>Foco en el cliente</label></td>
        </tr>
        <tr>
          <td class="txtDescriptcion"><img class="icono" src="./imgs/icono2.png" alt="imagen"><label>Comunicación efectiva</label></td>
          <td></td>
        </tr>
         <tr>
         <td></td>
          <td class="txtDescriptcion"><img class="icono" src="./imgs/icono2.png" alt="imagen"><label>Autonomía</label></td>
        </tr>
      </tbody>
  </table>
  
  <table class="tableNosotros">
      <tbody>
          <tr>
            <td rowspan="5" class="tdImagen">
            <img  class="imagenSomos" src="./imgs/b3-4.png" alt="imagen quienes somos">
            </td>
              <td colspan="2" class="txtNosotros"><h1>COMPETENCIAS - LIDER</h1></td>
          </tr>
        <tr>
          <td class="txtDescriptcion"><img class="icono" src="./imgs/icono1.png" alt="imagen"><label>Orientacion al logro</label></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td class="txtDescriptcion"><img class="icono" src="./imgs/icono1.png" alt="imagen"><label>Visión estratégica</label></td>
        </tr>
        <tr>
          <td class="txtDescriptcion"><img class="icono" src="./imgs/icono1.png" alt="imagen"><label>Desarrollo de personas</label></td>
          <td></td>
        </tr>
         <tr>
          <td></td>
           <td class="txtDescriptcion"><img class="icono" src="./imgs/icono1.png" alt="imagen"><label>Generador de relaciones</label></td>
        </tr>
      </tbody>
  </table>
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
  </body>`;
   
    divElem.innerHTML = viewCompetencias;
    const hover = divElem.querySelector('#centria-usuarios');
    const centriaNosotros = divElem.querySelector('#centria-nosotros');
    const centriaPortales = divElem.querySelector('#centria-portales');
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
    return divElem;
  };
  