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
}

const list = new LinkedList();
list.add(1);
list.add(1);
list.add(1);
list.add(1);
list.add(1);
list.add(2);
list.add(2);
list.add(2);
list.add(3);
list.add(4);
list.add(4);
list.add(4);
list.add(4);
list.add(4);
list.add(5);
list.add(5);
list.add(5);
list.add(5);
list.add(5);
list.add(5);

// list.printLL();

const duplicate = (list) => {
  if (!list) {
    return false;
  }
  let current = list.head;
  if (!current || !current.next) {
    return list;
  }
  let dummyNode = new Node(-1);
  let prev = dummyNode;
  prev.next = current;
  prev=prev.next;
  current = current.next;
  while (current) {
    while (current && current.data === prev.data) {
      current = current.next;
    }
    prev.next = current;
    prev=prev.next
    if (current) {
      current = current.next;
    }
  }
  list.head = dummyNode.next;
  return list;
};
const res = duplicate(list);
res.printLL();
