export function initResultadoLoser(params) {
  const div = document.createElement("div");
  div.innerHTML = `
      <perdiste-comp></perdiste-comp>
    `;
  const buttonEvent = div.querySelector(".mi-button");
  buttonEvent?.addEventListener("click", () => {
    params.goTo("/instrucciones");
  });
  return div;
}
