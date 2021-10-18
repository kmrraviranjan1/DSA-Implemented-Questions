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
list.add(2);
list.add(3);
list.add(4);
list.add(5);
// list.printLL()
// console.log(list)

const reverse=(head)=> {
  if (!head) {
    return false;
  }
  let first = null;
  let second = null;
  let current = head.head;
  while (current) {
    second = current.next;
    current.next = first;
    first = current;
    current = second;
  }
  return first;
}
let res = reverse(list);

console.log(list)
console.log(res)
