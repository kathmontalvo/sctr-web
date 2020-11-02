const sessionService = {

  setItem(key, value) {
    localStorage.setItem(key, value);
  },

  getItem(key) {
    return localStorage.getItem(key);
  },

  setObject(key, obj) {
    const value = JSON.stringify(obj);
    localStorage.setItem(key, value);
  },

  getObject(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  },

  destroy(key) {
    localStorage.removeItem(key);
  },
};

export default sessionService;
