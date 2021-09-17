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

    return this.head;
  }
  printLL() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.add(1);
list1.add(3);
list1.add(5);
list1.add(7);
list1.add(9);
list1.add(11);
list1.add(13);
list1.add(15);


list2.add(2);
list2.add(4);
list2.add(6);
list2.add(8);
list2.add(10);

// console.log('list1:', list1)
// console.log('list2:', list2)

// list1.printLL()
// list2.printLL()
let count = 1;
const merge = (list1, list2) => {
  if (!list2) {
    return list1;
  }
  let dummy = new LinkedList()
  dummy.add(-1) 
  p1 = list1.head;
  p2 = list2.head;
  let p3 = dummy;
   while (p1!=null && p2!=null) {
    if (p1.data < p2.data) {
      p3.next = p1;
      p1 = p1.next;
    } else {
      p3.next = p2;
      p2 = p2.next;
    }       
    p3 = p3.next;
  }
  if (p1!=null) {

    p3.next = p1;
  } else if (p2!=null) {
    
    p3.next = p2;
  }
  // console.log(p3)
  dummy.head=dummy.next;
  return dummy;
};

const mergedList = merge(list1, list2);
// console.log('mergedList:', mergedList)

mergedList.printLL()