import pino from 'pino';

export const logger = pino({
  name: 'is-planner',
  level: 'info',
});
