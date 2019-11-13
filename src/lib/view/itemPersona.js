export const itemPersona = (nombres,imagen) => {
    const divElem = document.createElement('div');
    const itemPersona = `
    <div id="contenedorProduct" class="contenedorProducto">
    <img src="${imagen}" alt="" class="imagen-personal">
    <label>${nombres}</label>
    </div>`;
    divElem.innerHTML = itemPersona;
    return divElem;

};