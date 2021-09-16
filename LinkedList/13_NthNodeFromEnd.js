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
    nthFromLast(index){
        // if list is empty or index is negative or index is greater than size
        if(this.size===null||index<=0||index>this.size){
            return false;
        }
        let current = this.head;
        let first = current;
        let second = current;
        while(index>0){
            second= second.next;
            index--;
        }
       while(second){
           second=second.next;
           first=first.next;
       }
       console.log(first.data)
        
    }
  }
  
  const list = new LinkedList();
//   1 2 3 4 5
// 2
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);
  list.nthFromLast(7)
  list.nthFromLast(0)
  list.nthFromLast(-4)
  list.nthFromLast(4)
  list.nthFromLast(5)
  list.nthFromLast(1)
//   list.printLL()
  