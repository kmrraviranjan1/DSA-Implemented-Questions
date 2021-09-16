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
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printLinkedList(){
      let current =this.head;
      
    while(current){
        console.log(current.data)
        current=current.next;
    }
  }
  printLinkedListWithIndex(){
      let current =this.head;
      let index=0;
    while(current){
        console.log(`data: ${current.data}, index: ${index++}`)
        current=current.next;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

list.printLinkedList()
list.printLinkedListWithIndex()
