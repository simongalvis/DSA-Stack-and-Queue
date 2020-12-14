class _Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}
class Stack{
    constructor(){
        this.top = null;
    }

    push(data){
        if(this.top === null){
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop(){
        let node = this.top;
        this.top = node.next;
        return node.data;
    }
}

//Stack helper functions
function peek(stack){
    return stack.top;
}
function isEmpty(stack){
    if(stack.top === null){
        return true;
    }
    return false;
}
function display(stack){
    let stackContainer = '';
    let currNode = stack.top;

    if(stack.top === null){
        return 'Stack is empty'
    }
    while(currNode !== null){
        stackContainer += currNode.data + '\n'
        currNode = currNode.next
    }
    return stackContainer;
}
    
const starTrek = new Stack;

starTrek.push('Kirk');
starTrek.push('Spock');
//starTrek.push('McCoy');
starTrek.push('Scotty');


console.log(display(starTrek));