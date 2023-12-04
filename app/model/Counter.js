import createState from "./createState.js";

const counterState = createState(0);

const render = (count) => {
  const counterElement = document.getElementById("count-display");
  if (!counterElement) return;

  counterElement.innerText = count;
};

const setupCounter = () => {
  const counterElement = document.getElementById("count-display");
  const incrementButton = document.getElementById("increment-btn");

  if (!counterElement || !incrementButton) return;

  counterState.subscribe(render);

  incrementButton.addEventListener("click", () => {
    const currentCount = counterState.getState();
    counterState.setState(currentCount + 1);
  });
};

export { counterState, setupCounter };
