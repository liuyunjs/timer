import { creator } from './timerBase';

export const timeout = () => creator(setTimeout, clearTimeout);
