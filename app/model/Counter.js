const createState = (initialValue) => {
  let _state = initialValue;
  let listeners = [];

  const getState = () => _state;

  const setState = (newValue) => {
    _state = newValue;
    listeners.forEach((listener) => listener(_state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    listener(_state);
  };

  return { getState, setState, subscribe };
};

export const counterState = createState(0);

export const setupCounter = () => {
  const counterElement = document.getElementById("count-display");
  const incrementButton = document.getElementById("increment-btn");

  if (!counterElement || !incrementButton) return;

  counterState.subscribe(render);

  incrementButton.addEventListener("click", () => {
    const currentCount = counterState.getState();
    counterState.setState(currentCount + 1);
  });
};

const render = (count) => {
  const counterElement = document.getElementById("count-display");
  if (counterElement) {
    counterElement.innerText = count;
  }
};
counterState.subscribe(render);
