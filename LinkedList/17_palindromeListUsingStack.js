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
  isPalindrome(){
      let current = this.head;
      let stack = []
      while(current){
          stack.push(current.data)
          current=current.next
      }
      current = this.head;
      while(current){
          let temp = stack.pop()
          if(temp===current.data){

              current=current.next
          }
          else{
              return false;
          }
      }
      return true;
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(2);
list.add(1);
let res = list.isPalindrome()
console.log(res)


