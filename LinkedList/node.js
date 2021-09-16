class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


const node = new Node(0)
console.log('node:', node)


function Elem(name,age){
    this.name=name;
    this.age=age;
}

const elem = new Elem('ravi',25)

console.log('elem:', elem)

const newNode = new Node(elem)
console.log('newNode:', newNode)
