const store = [];

module.exports = class Store {
  constructor(text) {
    this.text = text;
  }

  save() {
    store.push(this);
  }

  static getItemList() {
    return store;
  }
};