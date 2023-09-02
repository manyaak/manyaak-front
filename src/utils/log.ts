/**
 * `console.log` wrapper
 * - production이 아닐 때만 로그를 찍음
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const log = (type: 'log' | 'error', ...args: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    switch (type) {
      case 'log': {
        /* eslint-disable-next-line no-console */
        console.log(args);
        break;
      }
      case 'error': {
        /* eslint-disable-next-line no-console */
        console.error(args);
        break;
      }
      default: {
        /* eslint-disable-next-line no-console */
        console.log(args);
      }
    }
  }
};
