import { getUi } from "./ui";

function drawUi() {
  document.body.innerHTML = "";
  const ui = getUi();
  document.body.appendChild(ui);
}
