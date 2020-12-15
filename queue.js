class _Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    enqueue(value){
        const node = new _Node(value)

        if(this.head == null){
            this.head = node;
        }
        if(this.tail){
            this.tail.next = node;
        }
        this.tail = node
    }
    dequeue(){
        if(this.head === null){
            return;
        }
        const node = this.head;
        this.head = this.head.next;

        if(node === this.tail){
            this.tail = null;
        }
        return node.value;
}
}
function peek(q){
    return q.head;
}
function isEmpty(q){
    if(q.head === null){
        return true;
    }
    return false;
}
function display(q){
    let currNode = q.head;
    let displayQueue = '';
    if(currNode === null){
        return 'No contents to diplay: queue is empty';
    }
    while(currNode !== null){
        currNode.next === null 
        ? displayQueue += currNode.value 
        : displayQueue += currNode.value + ', '

        currNode = currNode.next;
    }
    return displayQueue;
}
// Doubly Linked list Queue

class _DoubleNode{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null
    }
}
class DoubleQueue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enqueue(data){
        const node = new _DoubleNode(data);
        if(this.head === null){
            this.head = node;
        }
        if(this.last){
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;

    }
    dequeue(){
        if(this.head === null){
            return;
        }
        this.head.preious = null;

        const node = this.head
        this.head = this.head.next;

        if(node === this.tail){
            this.tail = null;
        }
        return node.value;
    }
}
//kirk is first on the queue







const starTrekQ = new DoubleQueue;

starTrekQ.enqueue('Kirk');
//starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

console.log(display(starTrekQ));
