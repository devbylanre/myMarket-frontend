export const LocalStorage = {
  get: (name: string) => {
    const item = localStorage.getItem(name);

    return JSON.parse(item || 'null');
  },

  set: (name: string, data: unknown) => {
    const stringify = JSON.stringify(data);
    const item = localStorage.setItem(name, stringify);

    return item;
  },

  remove: (name: string) => {
    return localStorage.removeItem(name);
  },
};

export const SessionStorage = {
  get: (name: string) => {
    const item = sessionStorage.getItem(name);

    return JSON.parse(item || 'null');
  },

  set: (name: string, data: unknown) => {
    const stringify = JSON.stringify(data);
    const item = sessionStorage.setItem(name, stringify);

    return item;
  },
};
