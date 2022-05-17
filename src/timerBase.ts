export const creator = (interval?: boolean) => () => {
  let globalHandle: number | null;

  return {
    set(callback: (...args: any[]) => void, ms: number = 0) {
      let start: number;
      const request = () => {
        const handle = (globalHandle = requestAnimationFrame((time: number) => {
          start = start || time;
          if (handle === globalHandle) globalHandle = null;
          if (time - start >= ms) {
            start = time;
            callback();
            if (!interval) return;
          }
          return request();
        }));
      };
      return request();
    },
    clear() {
      if (globalHandle != null) {
        cancelAnimationFrame(globalHandle);
        globalHandle = null;
      }
    },
  };
};
