class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }
  isEmpty() {
    return this.top === 0;
  }
  size() {
    return this.top;
  }
  add(element) {
    this.items[this.top] = element;
    this.top = this.top + 1;
  }

  remove() {
    if(!this.isEmpty()){
        this.top = this.top - 1;
        return this.items.pop();
    }
  }
  peek() {
    return this.items[this.top-1]
  }

  clear() {
    this.items.length = 0;
    this.top = 0
  }
  print(){
    console.log(this.items)
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.add(2);
console.log(stack.isEmpty());
console.log(stack.items);
stack.add(5);
stack.add(6);
stack.add(12);
console.log(stack.items);
console.log(stack.size());
stack.remove();
console.log(stack.size());
stack.print()
console.log(stack.items);
stack.clear();
console.log(stack.size());
console.log(stack.items);

