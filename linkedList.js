class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  apped(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }

  traverse(callback) {
    let currentNode = this.head;

    while (currentNode !== null) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const printNode = (node) => {
  const nextValue = node.next ? node.next.value : null;
  console.log(`Value: ${node.value} | Next: ${nextValue}`);
};

const list = new LinkedList();
list.apped(1);
list.apped(2);
list.apped(3);

list.traverse(printNode);
