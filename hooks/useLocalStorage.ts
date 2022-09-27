import isEqual from 'lodash/isEqual';
import superjson from 'superjson';
import { SetState } from 'types';
import { useEffect, useState } from 'react';
import { useLocalStorage as _useLocalStorage } from '@mantine/hooks';

function deserialize<T>(str: string|undefined|null, defaultValue: T): T {
  return (str === undefined || str === null) ? defaultValue : superjson.parse(str);
}

const useLocalStorage = <T = string>(storageKey: string, defaultValue: T): [T, SetState<T>] => {
  const [key, setKey] = useState(storageKey);
  const [defaultVal, setDefaultVal] = useState(defaultValue);
  const [lsValue, setLsValue] = _useLocalStorage<T>({
    key: storageKey,
    defaultValue,
    serialize: superjson.stringify,
    deserialize: superjson.parse,
  });

  useEffect(() => {
    if (key === storageKey) return;

    setKey(storageKey);

    const valueFromStorage = deserialize(localStorage.getItem(storageKey), defaultVal);
    setLsValue(valueFromStorage);

  }, [storageKey, key, defaultVal, setLsValue]);

  useEffect(() => {
    if (isEqual(defaultVal, defaultValue)) return;

    setDefaultVal(defaultValue);
  }, [defaultValue, defaultVal]);

  return [lsValue, setLsValue];
};

export { useLocalStorage };
