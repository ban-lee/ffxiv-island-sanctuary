import { useEffect, useRef } from 'react';

export function useLocale() {
  const locale = useRef<string|undefined>();

  useEffect(() => {
    const userLocale =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.language;

    locale.current = userLocale;
  }, []);

  return locale.current;
}
