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
    deleteAt(index){
        // if index is negative or greater than size or list is empty
        if(index>this.size || index < 0 || this.size===0){
            console.log(-1)
            return false;
        }
        let current=this.head;
        if(index===0){
          this.head=current.next;
          return true;
        }
        let i=0;
        let prev=null;
        while(i<index){
          prev=current
          current=current.next;
          i++;
        }
        prev.next=current.next
    }
    add(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
      //   console.log('temp:', temp)
        while (current.next) {
          current=current.next
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
  }
  
  const list = new LinkedList();
  // list.deleteAt(2)
  // list.deleteAt(-2)
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);
  // list.deleteAt(-2)
  // list.deleteAt(0)
  // list.deleteAt(3)
  list.deleteAt(4)
  list.printLinkedList()
//   console.log('list:', list)