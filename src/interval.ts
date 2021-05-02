import { creator } from './timerBase';

export const interval = () => creator(setInterval, clearInterval);
