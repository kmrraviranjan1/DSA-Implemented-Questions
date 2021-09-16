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
  printLL() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  middleNode() {
    if (!this.head) {
      return false;
    }
    let current = this.head;
    let size = 0;
    while (current) {
      size++;
      current = current.next;
    }
    // console.log(current)
    let middle = Math.floor(size / 2);
    // console.log('size:', size)
    // console.log("middle:", middle);
    let i = 0;
    current = this.head;
    // console.log('current:', current)
    while (i < middle) {
      //  console.log(current.data)
      current = current.next;
      i++;
    }
    // console.log('current:', current)
    console.log(current.data);
  }
}

const list = new LinkedList();

list.add(1);
// list.middleNode();
list.add(2);
// list.middleNode();
list.add(3);
// list.middleNode();
list.add(4);
// list.middleNode();
list.add(5);
list.middleNode();
// console.log('list:', list)
// list.printLL()
