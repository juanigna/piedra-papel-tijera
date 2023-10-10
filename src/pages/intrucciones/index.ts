export function initInstrucciones(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <el-texto tipoTexto="body">
        Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
    </el-texto>

    <mi-button class="mi-button" atributoBoton="¡Jugar!"></mi-button>
    
    <ppt-component></ppt-component>  
  `;
  const myButtonEvent = div.querySelector(".mi-button");
  myButtonEvent?.addEventListener("click", () => {
    params.goTo("/play");
  });
  return div;
}
