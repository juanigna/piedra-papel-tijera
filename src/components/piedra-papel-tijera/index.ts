export function initComponentPPT() {
  customElements.define(
    "ppt-component",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const divContenedorImg = document.createElement("div");
        divContenedorImg.className = "contenedor-img";
        divContenedorImg.innerHTML = `
            <div>
                 <img class="mi-img" src="https://imgur.com/Gqdl1YG.png" alt="" />
                
            </div>
            <div>
                  <img class="mi-img" src="https://imgur.com/fpPGp5O.png" alt="" />
           
             </div>
            <div>
                <img class="mi-img" src="https://imgur.com/MQQxM7r.png" alt="" />
      
            </div>
        `;
        shadow.appendChild(divContenedorImg);
        const style = document.createElement("style");
        style.textContent = `
            .contenedor-img{
                display:flex;
                justify-content: space-around;

            }

            .mi-img{
                transition: transform 0.2s;

            }

            .mi-img:active{
                transform: scale(0.80);
            }
        `;
        shadow.appendChild(style);
      }
    }
  );
}
