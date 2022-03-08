import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const storageValue = localStorage.getItem(key);
      if (!!storageValue) return JSON.parse(storageValue);
      return initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [value]);

  return [value, setValue];
};
