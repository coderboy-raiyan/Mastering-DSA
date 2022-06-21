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

  key() {
    let array = [];
    for (let i in this.data) {
      if (this.data[i]) {
        array.push(this.data[i][0][0]);
      }
    }
    return array;
  }
}

const obj1 = new myHasHTable(10);

console.log(obj1.set("apples", 1000)); // O(1)
console.log(obj1.set("grapes", 4000)); // O(1)
console.log(obj1.set("oranges", 9000)); // O(1)
console.log(obj1.get("oranges")); // O(1) or O(n) it can be anything depending on the conclusion memory allocation means if we do not have sufficient memory it will keep pushing in one allocation where we need to run loops for find the value

console.log(obj1.key()); //O(n)
