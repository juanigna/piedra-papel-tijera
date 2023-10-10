import { initTextComponent } from "./components/text";
import { buttonComponent } from "./components/boton";
import { initComponentPPT } from "./components/piedra-papel-tijera";
import { initRouter } from "../src/router";
import { initComponentPlay } from "./components/ppt-play";
import { InitCompWin } from "./components/ganaste-comp";
import { InitCompLose } from "./components/perdiste-comp";

(function () {
  const container = document.querySelector(".root");
  initRouter(container);
  initTextComponent();
  buttonComponent();
  initComponentPPT();
  initComponentPlay();
  InitCompWin();
  InitCompLose();
})();
