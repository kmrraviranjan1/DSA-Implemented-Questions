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
  insert(data) {
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
    return this.head;
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

// list.insert(2);
// list.insert(3);
// list.insert(1);
// list.insert(1);
list.insert(1);
list.insert(9);
list.insert(9);
// list.insert(9);
// list.insert(9);


//   add 1 to link list function

const add1 = (list) => {
  // if list empty return false
  if (!list) {
    return false;
  }
  //   reverse the given list
  let current = list.head;
  let prev = null;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;

  //   adding 1 to list

  let temp = list.head;
  temp.data = temp.data + 1;
  let carry = 0;

  while (temp !== null && (temp.data > 9 || carry > 0)) {
    temp.data += carry;
    carry = Math.floor(temp.data / 10);

    temp.data = temp.data % 10;

    temp = temp.next;
  }

  if (carry) {
    let node = new Node(1);   
    
    node.next = list.head;
    list.head = node;   
    return list; 
  } 
    current = list.head;
  

  
//   console.log(list);

  //   reversing list again

  prev = null;
  next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  list.head = prev;
  return list;
};

let res = add1(list);
// console.log("res:", res);
res.printLinkedList();
