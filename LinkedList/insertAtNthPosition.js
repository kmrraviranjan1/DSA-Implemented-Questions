class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAt(data, index) {
    // is index>size or index is negative or empty linkedlist
    if (this.size < index || (index < 0 && this.size)) {
      return false;
    }
    const node = new Node(data);
    let current = this.head;
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = null;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      // insert at index
      previous.next = node;
      // move to inserted node
      previous = previous.next;
      // add remaining element
      previous.next = current;
      // increment size;
      this.size++;
    }
  }
  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printLinkedList() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
// list.insertAt(6, 0);
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
// console.log('size ',list.sizeOfLinkedList())
// list.insertAt(6,0)
list.insertAt(6, 1);
list.printLinkedList();
