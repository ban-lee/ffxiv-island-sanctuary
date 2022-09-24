import superjson from 'superjson';
import { useLocalStorage as _useLocalStorage } from '@mantine/hooks';

const useLocalStorage = <T = string>(storageKey: string, defaultValue: T) => {
  const localStorage = _useLocalStorage<T>({
    key: storageKey,
    defaultValue,
    serialize: superjson.stringify,
    deserialize: (str) => (str === undefined ? defaultValue : superjson.parse(str)),
  });

  return localStorage;
};

export { useLocalStorage };
