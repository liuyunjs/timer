type Setter = (callback: (...args: any[]) => void, ms?: number) => number;
type Clear = (handle: number) => void;

export const creator = (setterInput: Setter, clearInput: Clear) => {
  const timers: number[] = [];

  function set(callback: (...args: any[]) => void, ms?: number) {
    timers.push(setterInput(callback, ms));
  }

  function clear() {
    let timer;
    while ((timer = timers.pop())) {
      clearInput(timer);
    }
  }

  return { set, clear };
};
