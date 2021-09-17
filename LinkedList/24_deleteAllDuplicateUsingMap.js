// ip 1 2 2 3 4 4 4 5
// op 1 3 5

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
    if (!this.head) {
      return false;
    }
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(2);
list.add(3);
list.add(4);
list.add(4);
list.add(4);
list.add(5);
// list.printLL();

const duplicate = (list) => {
  let current = list.head;
  let map = {};
  while (current) {
    if (current.data in map) {
      map[current.data]++;
    } else {
      map[current.data] = 1;
    }
    current = current.next;
  }

  let res = new LinkedList();
  for (x in map) {
    if (map[x] === 1) {
      res.add(x);
    }
  }

  return res;
};
let res = duplicate(list);
res.printLL();
