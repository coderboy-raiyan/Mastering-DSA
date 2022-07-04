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

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const leader = this.findTheLeader(index - 1);
    const holdPointer = this.findHoldPointer(index);
    leader.next = newNode;
    newNode.next = holdPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === this.length) {
      const leader = this.findTheLeader(index - 2);
      (leader.next = null), (this.tail = leader);
      this.length--;

      return this.printList();
    }
    if (index === 0) {
      this.head = this.head.next;

      return this.printList();
    }

    if (index !== 0 || index !== this.length) {
      const leader = this.findTheLeader(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }

  findTheLeader(index) {
    let counter = 0;
    let currentHead = this.head;
    while (counter !== index) {
      currentHead = currentHead.next;
      counter++;
    }
    return currentHead;
  }
  findHoldPointer(index) {
    let counter = 0;
    let currentHead = this.head;
    while (counter !== index) {
      currentHead = currentHead.next;
      counter++;
    }
    return currentHead;
  }
}

// [1,24,6,7]

const myLinkedList = new MyLinkedList(5);

console.log(myLinkedList.append(10));
console.log(myLinkedList.append(20));
console.log(myLinkedList.append(30));
console.log(myLinkedList.prepend(15));
console.log(myLinkedList.insert(2, 33));
console.log(myLinkedList.remove(myLinkedList.length));
console.log(myLinkedList.remove(0));
