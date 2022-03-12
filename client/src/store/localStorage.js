const LocalStorage = new (class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  set(name, value) {
    this.storage.setItem(name, JSON.stringify(value));
  }

  get(name) {
    const value = this.storage.getItem(name);
    return value ? JSON.parse(value) : null;
  }

  clear(name) {
    this.storage.removeItem(name);
  }
})();

export default LocalStorage;
