/*

1 2 3 4 5
Tc o(n)
Sc O(n)
a=[1 2 3 4 5]

a=[5 4 3 2 1]

create link list return head

5 4 3 2 1]
*/

/*

1 2 3 4 5
traverse and print

reverse link list

1 2 3 4 5
two pointer approach
prev null node 5:{4:{3:{2 : [1 : null]}
next null = 4
current first val = 5
*/

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
    add(data){
        const node = new Node(data)
        if(!this.head){
            this.head=node;
        }
        else{
            let current = this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }
    printLL(){
        let current= this.head;
        while(current){
            console.log(current.data)
            current=current.next;
        }
    }
    reverse(){
        // if list is empty 
        if(this.head===null){
            return false;
        }
        let prev = null;
        let next = null;
        let current = this.head;
        while( current){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
            // return prev
        }
        return prev;
    }
}
// prev 2 1: null
// curr 3
// next 3
// 1 2 3 4 5
const list = new LinkedList()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
// console.log('list:', list)
// list.printLL()
const reversed = list.reverse()
 console.log('reversed:', reversed)

const print = (reversed)=>{
    while(reversed){
        console.log(reversed.data)
        reversed=reversed.next;
    }
}
print(reversed)
