export function InitCompLose() {
  customElements.define(
    "perdiste-comp",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const myData = localStorage.getItem("resultados");
        const parseado = JSON.parse(myData ?? "null");
        div.className = "contenedor-imgLose";
        div.innerHTML = `
              <img src="https://imgur.com/1X3TDdF.png" alt="perdiste">
              <div class="contenedor-score">
                <el-texto tipoTexto="body">Score</el-texto>
                <el-texto tipoTexto="parrafo">Vos: ${parseado.jugador} puntos</el-texto>
                <el-texto tipoTexto="parrafo">La máquina: ${parseado.maquina} puntos</el-texto>
              </div>
              <mi-button class="mi-button" atributoBoton="Volver a jugar"></mi-button>

          `;

        shadow.appendChild(div);

        const buttonSearch = div.querySelector(".mi-button");
        buttonSearch?.addEventListener("click", () => {
          window.location.href = "/instrucciones";
        });

        const style = document.createElement("style");
        style.textContent = `
          
              .contenedor-imgLose{
                  display:flex;
                  flex-direction:column;
                  justify-content:center;
                  align-items:center;
                  background-color:rgba(137, 73, 73, 0.9);
              }
              .contenedor-score{
                width:259px;
                height:217px;
                top:307px;
                left:58px;
                border: solid 10px black;
                background-color:white;
                text-aling:center;
            }

          `;
        shadow.appendChild(style);
      }
    }
  );
}
