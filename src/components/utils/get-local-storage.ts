export const getLocalStorage = (key: string, defaultValue: any) => {
  const localStorageValue = localStorage.getItem(key);
  return localStorageValue ? JSON.parse(localStorageValue) : defaultValue;
};
