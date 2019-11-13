export const itemPersona = (nombres) => {
    const divElem = document.createElement('div');
    const itemPersona = `
    <div id="contenedorProduct" class="contenedorProducto">
    <label>${nombres}</label>
    </div>`;
    divElem.innerHTML = itemPersona;
    return divElem;

};