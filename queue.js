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
const starTrekQ = new Queue;

starTrekQ.enqueue('Kirk');
//starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

console.log(display(starTrekQ));
