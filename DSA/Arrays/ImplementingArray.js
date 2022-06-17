class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  splice(index, deleteCount, ...addItem) {
    if (deleteCount) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      if (index == this.length - 1) {
        delete this.data[index];
      }
      delete this.data[this.length - 1];
      this.length--;
    } else {
      console.log(addItem[0]);
    }
  }
}

const newArray = new myArray();

newArray.push("hello");
newArray.push("I'm");
newArray.push("Raiyan");

newArray.splice(2, 0, "Then");

console.log(newArray);
