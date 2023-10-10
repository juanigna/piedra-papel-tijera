import { state } from "../../state";
export function initPlay() {
  const div = document.createElement("div");
  div.innerHTML = `
  <ppt-play></ppt-play>
  `;

  return div;
}

export function ganador() {
  let resultadosString = localStorage.getItem("resultados");
  // si resultadosString tiene un valor (es decir, no es nulo ni indefinido), entonces se interpreta como una cadena JSON y se utiliza JSON.parse()
  // si no se encuentran resultados en localStorage, se crea un objeto de resultados inicial con valores de 0 para "maquina" y "jugador".
  let resultados = resultadosString
    ? JSON.parse(resultadosString)
    : { maquina: 0, jugador: 0 };

  const arrayPrincipal = state.getState();
  const primerArray = arrayPrincipal[0];

  if (primerArray[0] == "tijera" && primerArray[1] == "piedra") {
    console.log("perdiste");
    // Incrementar el valor de la máquina
    resultados.maquina++;
    // Guardar los nuevos valores actualizados en el localStorage
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      // Código que se ejecutará después de 2 segundos
      window.location.href = "/perdiste";
    }, 2000); // 2000 milisegundos = 2 segundos
  }

  if (primerArray[0] == "tijera" && primerArray[1] == "papel") {
    console.log("ganaste");
    // Incrementar el valor del jugador
    resultados.jugador++;
    // Guardar los nuevos valores actualizados en el localStorage
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      // Código que se ejecutará después de 2 segundos
      window.location.href = "/ganaste";
    }, 2000); // 2000 milisegundos = 2 segundos
  }
  if (primerArray[0] == "piedra" && primerArray[1] == "tijera") {
    console.log("ganaste");
    // Guardar los nuevos valores actualizados en el localStorage
    resultados.jugador++;
    // Guardar los nuevos valores actualizados en el localStorage
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      // Código que se ejecutará después de 2 segundos
      window.location.href = "/ganaste";
    }, 2000); // 2000 milisegundos = 2 segundos
  }
  if (primerArray[0] == "piedra" && primerArray[1] == "papel") {
    console.log("perdiste");
    // Incrementar el valor de la máquina
    resultados.maquina++;
    // Guardar los nuevos valores actualizados en el localStorage
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      // Código que se ejecutará después de 2 segundos
      window.location.href = "/perdiste";
    }, 2000); // 2000 milisegundos = 2 segundos
  }
  if (primerArray[0] == "papel" && primerArray[1] == "tijera") {
    console.log("perdiste");
    // Incrementar el valor de la máquina
    resultados.maquina++;
    // Guardar los nuevos valores actualizados en el localStorage
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      // Código que se ejecutará después de 2 segundos
      window.location.href = "/perdiste";
    }, 2000); // 2000 milisegundos = 2 segundos
  }
  if (primerArray[0] == "papel" && primerArray[1] == "piedra") {
    console.log("ganaste");
    resultados.jugador++;
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      // Código que se ejecutará después de 2 segundos
      window.location.href = "/ganaste";
    }, 2000); // 2000 milisegundos = 2 segundos
  }
  if (primerArray[0] == "papel" && primerArray[1] == "papel") {
    console.log("empate");

    setTimeout(function () {
      // Código que se ejecutará después de 2 segundos
      window.location.href = "/instrucciones";
    }, 2000); // 2000 milisegundos = 2 segundos
  }
  if (primerArray[0] == "tijera" && primerArray[1] == "tijera") {
    console.log("empate");
    setTimeout(function () {
      // Código que se ejecutará después de 2 segundos
      window.location.href = "/instrucciones";
    }, 2000); // 2000 milisegundos = 2 segundos

    console.log("empate");
  }
  if (primerArray[0] == "piedra" && primerArray[1] == "piedra") {
    console.log("empate");
    setTimeout(function () {
      // Código que se ejecutará después de 2 segundos
      window.location.href = "/instrucciones";
    }, 2000); // 2000 milisegundos = 2 segundos

    console.log("empate");
  }
}
