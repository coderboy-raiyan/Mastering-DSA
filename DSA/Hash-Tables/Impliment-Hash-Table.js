class myHasHTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    const address = this._hash(key);
    if (this.data[address].length > 0) {
      for (let i in this.data[address]) {
        if (this.data[address][i][0] === key) {
          return this.data[address][i][1];
        }
      }
    } else {
      return this.data[address][1];
    }
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    } else {
      this.data[address].push([key, value]);
    }

    return this.data;
  }
}

const obj1 = new myHasHTable(2);

console.log(obj1.set("apples", 1000));
console.log(obj1.set("grapes", 4000));

console.log(obj1.get("apples"));
