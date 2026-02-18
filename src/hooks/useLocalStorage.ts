import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem(key);

      if (storedData) {
        setStoredValue(JSON.parse(storedData));
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
      }
    } catch (error) {
      console.error('로컬 스토리지 로드 에러:', error);
    }
  }, [key, initialValue]);

  const onSetValue = (value: T) => {
    try {
      setStoredValue(value);

      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('로컬 스토리지 등록 에러:', error);
    }
  };

  return [storedValue, onSetValue] as const;
}
