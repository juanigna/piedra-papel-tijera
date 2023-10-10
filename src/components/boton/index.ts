export function buttonComponent() {
  customElements.define(
    "mi-button",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const contentButton = this.getAttribute("atributoBoton");
        const divButton = document.createElement("div");
        divButton.className = "contenedor-button";
        divButton.innerHTML = `
            <button class="mi-button">
                <el-texto tipoTexto="body">${contentButton}</el-texto>
            </button>
        `;
        shadow.appendChild(divButton);
        const styleButton = document.createElement("style");
        styleButton.textContent = `

          .contenedor-button{
             display:flex;
             align-items:center;
             justify-content:center;
          }
            .mi-button{
                background-color:#006CFC;
                border: 10px solid #001997;
                padding:19px 90px;
                margin:20px;
                color:white; 
                cursor: pointer;
                transition: transform 0.2s;
            }
            
            .mi-button:active {
                transform: scale(0.95);
              }
        `;
        shadow.appendChild(styleButton);
      }
    }
  );
}
