export default () => {
    const divElem = document.createElement('div');
    const viewCompetencias =  `
  <body>
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
  </body>`;
   
    divElem.innerHTML = viewCompetencias;
    return divElem;
  };
  