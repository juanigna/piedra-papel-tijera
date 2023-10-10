export function initResultadoWin(params) {
  const div = document.createElement("div");
  div.innerHTML = `
        
  
      <ganaste-comp></ganaste-comp>

    
    `;
  const buttonEvent = div.querySelector(".mi-button");
  buttonEvent?.addEventListener("click", () => {
    params.goTo("/instrucciones");
  });
  return div;
}
