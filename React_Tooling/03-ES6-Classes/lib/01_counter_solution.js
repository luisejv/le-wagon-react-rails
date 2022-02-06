class Counter {
  constructor(text) {
    this.map = new Map();
    if (text && text.length > 0) {
      text.split(" ").forEach((term) => {
        const key = term.toLowerCase();
        const value = this.map.get(key) ? this.map.get(key) + 1 : 1;
        this.map.set(key, value);
      });
    }
  }

  occurrences(word) {
    const value = this.map.get(word.toLowerCase());
    if (value) {
      return value;
    }
    return 0;
  }
}

module.exports = Counter;
