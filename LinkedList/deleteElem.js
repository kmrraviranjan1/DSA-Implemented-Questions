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
    delete(data){
        let prev = null;
        let current = this.head;
        while(current){
            if(data===current.data){
                if(prev===null){
                    this.head=current.next;
                }
                else{
                    prev.next=current.next;
                }
                this.size--;
                // if any no is deleted return true;
                return true;
            }
            prev=current;
            current=current.next;
        }
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
  }
  
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);
  list.delete(5)
  list.delete(5)
  list.delete(1)
  console.log('list:', list)