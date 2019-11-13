export default () => {
  const divElem = document.createElement('div');
  const viewNosotros =  `
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
