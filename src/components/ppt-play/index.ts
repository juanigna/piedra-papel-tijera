import { state } from "../../state";
import { ganador } from "../../pages/play";

export function initComponentPlay() {
  customElements.define(
    "ppt-play",
    class extends HTMLElement {
      shadow: ShadowRoot;
      constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.render();
      }
      count = 3;
      arrayDeValores: string[] = [];
      render() {
        const divContenedorImg = document.createElement("div");
        const imgTijera = require("url:../../img/tijera.png");
        const imgPiedra = require("url:../../img/piedra.png");
        const imgPapel = require("url:../../img/papel.png");
        divContenedorImg.innerHTML = `
                <div class="contenedor-img2">
                      
                    <div>
                        <img class="img-random" src="https://imgur.com/Mc7opyX.png" alt="tijera-rotado" valor="tijera" />
                        
                    </div>
                    <div>
                          <img class="img-random" src="https://imgur.com/WxZ1n4a.png" alt="piedra-rotado" valor="piedra"/>
                  
                    </div>
                    <div>
                        <img class="img-random" src="https://imgur.com/0KGjK2M.png" alt="papel-rotado" valor="papel" />
              
                    </div>
                </div>

             <div class="counter">${this.count} </div>
             <div class="maquina"> </div>

               <div class="contenedor-img">
                    <div>
                          <img class="mi-img" src="${imgTijera}" alt="tijera" data-valor="tijera" />
                    </div>

                    <div>
                          <img class="mi-img" src="${imgPiedra}" alt="piedra" data-valor="piedra"/>
                   </div>

                    <div>
                        <img class="mi-img" src="${imgPapel}" alt="papel" data-valor="papel" />
                    </div>
               </div>
          `;
        this.shadow.appendChild(divContenedorImg);
        const style = document.createElement("style");
        style.textContent = `
              .contenedor-img{
                  display:flex;
                  justify-content: space-around;
              }

              .contenedor-img2{
                display:none;
               }

              .counter{
                display:flex;
                align-items:center;
                justify-content:center;
                font-size: 5rem; /* Ajusta el tamaño de fuente según lo necesario */
                width: 200px;
                height: 100px;
                margin:50px auto;
                padding:50px 0;
                border: 10px solid black;
                border-radius:200px;

              }

              .mi-img{
                transition: transform 0.3s;
                opacity 0.3s;
                width:80px;
                height:183px;
            }

            .mi-img:hover{
                transform: scale(1.50); 
                opacity: 0.8; 
                width:80px;
                height:183px;
            }
          `;
        this.shadow.appendChild(style);

        ///Evento de la imagen al dar click
        const imgEvent = this.shadow.querySelectorAll(".mi-img");
        const contenedorImg = this.shadow.querySelector(".contenedor-img");
        let clickOcurred = false;
        imgEvent.forEach((imagenClickeada) => {

          imagenClickeada.addEventListener("click", () => {
            clickOcurred = true;
            const valor = imagenClickeada.getAttribute("data-valor");

            // Ocultar todas las imágenes excepto la clickeada
            //recorremos de nuevo el evento de la img, y comparamos con la imagen clickeada, si no son iguales entra al if y le damos style none
            imgEvent.forEach((img) => {
              if (img !== imagenClickeada) {
                (img as HTMLImageElement).style.display = "none";
                (contenedorImg as HTMLElement).style.justifyContent = "center";
              }
            });

            if (this.arrayDeValores.length === 0) {
              if (valor !== null) {
                this.arrayDeValores.push(valor);
                //El valor lo pusheo en mi array de string
              }
              state.addItem(this.arrayDeValores);
            }
          });
        }
        );

        ///Evento del countdown
        const contadorElement = this.shadow.querySelector(".counter");
        const interval = setInterval(() => {
          if (contadorElement) {
            contadorElement.textContent = this.count.toString();
            this.count--;
            if (this.count < 0) {
              clearInterval(interval);
              //si clickOcurred es falso entonces entra al if
              if (!clickOcurred) {
                // Recargar la página con esta url
                window.location.href = "/instrucciones";
              }
              contadorElement.remove();
              this.showRandomImage();
            }
          }
        }, 1000);
      }
      showRandomImage() {
        const images: { src: string; data: string }[] = [];

        //Agregar mis imagenes a un array
        const imgMaquina = this.shadow.querySelectorAll(".img-random");
        const divContentMaquina = this.shadow.querySelector(".maquina");
        const div = document.createElement("div");
        div.className = "contenedor-maquina";
        const style = document.createElement("style");

        imgMaquina.forEach((img) => {
          const src = img.getAttribute("src");
          const myData = img.getAttribute("valor");
          if (src !== null && myData !== null) {
            // Verificar que src no sea null
            images.push({ src: src, data: myData });
          }
        });

        const randomPosicion = Math.floor(Math.random() * images.length);

        const imageArray = images[randomPosicion];
        const randomImageSrc = images[randomPosicion].src;
        const randomImageData = images[randomPosicion].data;

        const imageElement = this.shadow.querySelector(
          ".img-random"
        ) as HTMLImageElement;

        if (imageElement !== null) {
          imageElement.src = randomImageSrc;
          imageElement.setAttribute("valor", randomImageData);
        }

        //Obtenemos el valor del atributo de la imagen random para agregar al array de string
        const valorMaquina = imageElement.getAttribute("valor");

        if (valorMaquina !== null) {
          this.arrayDeValores.push(valorMaquina);
        }
        state.addItem(this.arrayDeValores);

        div.innerHTML = `
          <img class="img-maquina" src="${imageElement.src}">
        `;

        divContentMaquina?.appendChild(div);

        style.textContent = `
          .contenedor-maquina{
            display:flex;
            justify-content:center;
            align-items:center;
            margin: 50px 0;
          }
          .img-maquina{
            width:80px;
            height:183px;
          }
        `;
        divContentMaquina?.appendChild(style);

        ganador();
      }
    }
  );
}
