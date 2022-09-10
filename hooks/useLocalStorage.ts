import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function replacer(unused: string, value: unknown) {
  if(value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()),
    };
  } else if(value instanceof Set) {
    return {
      dataType: 'Set',
      value: Array.from(value.entries()),
    };
  }

  return value;
}

function reviver(unused: string, value: unknown) {
  if(typeof value === 'object' && value !== null) {
    const castedValue = value as {[key: string]: unknown};
    if ('dataType' in castedValue && castedValue['dataType'] === 'Map') {
      return new Map(castedValue.value as []);
    } else if ('dataType' in castedValue && castedValue['dataType'] === 'Set') {
      return new Set(castedValue.value as []);
    }
  }
  return value;
}

const useLocalStorage = <T>(storageKey: string, fallbackState: T): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(fallbackState);

  useEffect(() => {
    try {
      const storageValue = localStorage.getItem(storageKey);
      if (storageValue) {
        setValue(JSON.parse(storageValue, reviver));
      }
    } catch (e) {
      console.error(e);
    }

    // On Init only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value, replacer));
  }, [value, storageKey]);

  return [value, setValue];
};

export { useLocalStorage };
