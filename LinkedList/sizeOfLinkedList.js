class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    sizeOfLinkedList(){
        return this.size;
    }
    add(data){
        const node = new Node(data)
        if(!this.head){
            this.head=node;
        }
        else{
            let current= this.head;
            while(current.next){
                current=current.next
            }
            current.next=node;
        }
        this.size++;
    }
}

const list = new LinkedList();

console.log('sizeOfLinkedList:', list.sizeOfLinkedList())
list.add(1)
console.log('sizeOfLinkedList:', list.sizeOfLinkedList())
list.add(2)
console.log('sizeOfLinkedList:', list.sizeOfLinkedList())
list.add(3)
console.log('sizeOfLinkedList:', list.sizeOfLinkedList())

