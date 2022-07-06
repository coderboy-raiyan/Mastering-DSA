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
    this.tail = this.head;
    this.length = 1;
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
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index > this.length) {
      this.append(value);
      this.length++;
      return this.printList();
    }
    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this.printList();
    }
    const leader = this.findTheLeader(index - 1);

    if (index === this.length) {
      this.append(value);
      this.length++;
      return this.printList();
    }
    const currentHoldingNode = leader.next;
    leader.next = newNode;
    newNode.next = currentHoldingNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      const leader = this.findTheLeader(index);
      this.head = leader.next;
      return this.printList();
    }
    if (index === this.length) {
      const leader = this.findTheLeader(index - 3);
      leader.next = null;
      this.tail = leader;
      return this.printList();
    }
    const leader = this.findTheLeader(index - 1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode.next;
    this.length--;
    return this.printList();
  }
  findTheLeader(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

// [20, 1 , 10]

const myLinkedList = new MyLinkedList(10);
console.log(myLinkedList.append(1));
console.log(myLinkedList.prepend(20));
console.log(myLinkedList.insert(myLinkedList.length, 80));
console.log(myLinkedList.remove(0));
