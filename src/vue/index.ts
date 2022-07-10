import { onBeforeUnmount } from 'vue';
import { interval } from '../interval';
import { timeout } from '../timeout';

const createTimer = (creator: typeof interval) => {
  return () => {
    const timer = creator();
    onBeforeUnmount(timer.clear);
    return timer;
  };
};

export const useTimeout = createTimer(timeout);
export const useInterval = createTimer(interval);
