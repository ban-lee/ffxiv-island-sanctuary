import { useEffect } from 'react';

/**
 * Wrapper hook for useEffects intended to be executed once and only once.
 * @param initFunc
 */
export function useInit(initFunc: () => void) {
  useEffect(() => {
    return initFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
