// 0 based index
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
  delete(data) {
    let prev = null;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
    }
  }
  isEmpty() {
    return this.size === 0 ? true : false;
  }
  sizeOfLinkedList() {
    return this.size;
  }
  printLinkedList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  printLinkedListWithIndex() {
    let current = this.head;
    let index = 0;
    while (current) {
      console.log(`index: ${index++} element: ${current.data}`);
      current = current.next;
    }
  }
  insertAt(data, index) {
    // console.log('index:', index)
    // if my list is empty or index > size or index < 0
    if (index > this.size || index < 0) {
      return false;
    }
    const node = new Node(data);
    let current = this.head;
    let prev = null;
    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      // inserting the node
      prev.next = node;
      // traversing to inserted node
      prev = prev.next;
      // adding the remaining node
      prev.next = current;
    }
    // increment size
    this.size++;
  }

  deleteAt(index) {
    // if index is negative, if index > list size
    if (index >= this.size || index < 0) {
      return false;
    }

    let current = this.head;
    let prev = null;
    if (index === 0) {
      this.head = current.next;
    } else {
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = current.next;
    }
    this.size--;
    return true;
  }
}

const list = new LinkedList();
// console.log('list:', list)

// console.log(list.isEmpty())
// console.log(list.sizeOfLinkedList())
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
// console.log('list:', list)
// console.log(list.isEmpty())
// console.log(list.sizeOfLinkedList())
// list.printLinkedList()
// list.printLinkedListWithIndex()

// list.delete(1)
// list.delete(5)
// list.printLinkedList()
// console.log(list.sizeOfLinkedList())
// list.printLinkedListWithIndex()

// list.insertAt(6,0)
// list.insertAt(6,2)
// list.printLinkedListWithIndex()
// console.log(list.sizeOfLinkedList())

// list.deleteAt(0)
// list.printLinkedList()
// list.deleteAt(6)
// list.printLinkedList()
// list.printLinkedListWithIndex()
// console.log(list.sizeOfLinkedList())
