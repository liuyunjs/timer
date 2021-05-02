import React from 'react';
import { useWillMount } from 'react-will-mount-hook';
import { interval } from '../interval';
import { timeout } from '../timeout';

const createTimer = (creator: typeof interval) => {
  return () => {
    const timer = useWillMount(creator);

    React.useEffect(() => {
      return timer.clear;
    }, [timer.clear]);

    return timer;
  };
};

export const useTimeout = createTimer(timeout);
export const useInterval = createTimer(interval);
