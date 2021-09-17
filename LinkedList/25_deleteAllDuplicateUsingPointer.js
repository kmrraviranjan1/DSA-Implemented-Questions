// ip 1 2 2 3 4 4 4 5 6 6 6
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
// list.add(1);
list.add(2);
list.add(2);
// list.add(2);
// list.add(2);
// list.add(2);
list.add(3);
// list.add(3);
list.add(4);
list.add(4);
list.add(4);

// list.add(4);
list.add(5);
list.add(6);
list.add(6);
list.add(6);

// list.add(6);
// list.add(6);
console.log("------------------------- Input -------------------");
list.printLL();
console.log("------------------- deleting duplicates -------------------");


const duplicates=(list)=>{
    if(!list){
        return null;
    }
    let current = list.head;
    if(!current  || !current.next){
        return list;
    }
    let dummy = new Node(-1);
    let prev = dummy;
    prev.next=current;
    current=current.next; 
    while(current){
        let isduplicate = false;
        while(current && prev.next.data===current.data){
            isduplicate=true;
            current=current.next;
        }
        if(isduplicate){
            prev.next=current;
        }
        else{
            prev=prev.next
        }
        if(current){

            current=current.next;
        }
    }
  
    list.head=dummy.next
    return list;
}

// ip 1 2 2 3 4 4 4 5
// op 1 3 5

let res = duplicates(list)
res.printLL()
// console.log('res:', res)