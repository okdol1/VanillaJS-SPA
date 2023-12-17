import { Listener } from "../types/index";

const createState = <T>(initialValue: T) => {
  let _state = initialValue;
  let listeners: Listener<T>[] = [];

  const getState = () => _state;

  const setState = (newValue: T) => {
    _state = newValue;
    listeners.forEach((listener) => listener(_state));
  };

  const subscribe = (listener: Listener<T>) => {
    listeners.push(listener);
    listener(_state);
  };

  return { getState, setState, subscribe };
};

export default createState;
