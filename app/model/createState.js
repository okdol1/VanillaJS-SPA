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

export default createState;
