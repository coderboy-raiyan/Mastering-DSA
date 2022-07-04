class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    (this.tail = this.head), (this.length = 1);
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentHead = this.head;
    while (currentHead !== null) {
      array.push(currentHead.value);
      currentHead = currentHead.next;
    }
    return array;
  }
}

const myLinkedList = new MyLinkedList(5);

console.log(myLinkedList.append(10));
console.log(myLinkedList.prepend(15));
console.log(myLinkedList.printList());
