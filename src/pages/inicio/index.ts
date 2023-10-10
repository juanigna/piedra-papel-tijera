export function initWelcome(params) {
  const div = document.createElement("div");
  div.className = "contenedor-inicio";
  div.innerHTML = `
    
  <el-texto tipoTexto="title">Piedra Papel ó Tijera</el-texto>
  <mi-button class="mi-button" atributoBoton="Empezar"></mi-button>
  <ppt-component></ppt-component>  
`;

  const buttonEvent = div.querySelector(".mi-button");
  buttonEvent?.addEventListener("click", () => {
    params.goTo("/instrucciones");
  });
  return div;
}
