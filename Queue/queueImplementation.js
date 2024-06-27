class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item)
  }
  dequeue() {
    this.items.shift()
  }
  peek() {
   return this.items[0]
  }
  isEmpty() {
    return this.items.length===0
  }
  print() {
    console.log(this.items)
  }
}

const queue = new Queue()
queue.print()
console.log(queue.isEmpty())
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(8)
console.log(queue.peek())
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
console.log(queue.isEmpty())
queue.print()