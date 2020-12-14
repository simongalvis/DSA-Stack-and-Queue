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
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const paliStack = new Stack;
    
    for(let i = 0; i<s.length; i++){
        paliStack.push(s[i])
    }

    let reversed = '';
    let currNode = paliStack.top;
    for(let i=0; currNode !== null; i++ ){
        reversed += currNode.data;
        currNode = currNode.next;
    }

    if(reversed === s){
        return true;
    }
        return false;
}


    
const starTrek = new Stack;

starTrek.push('Kirk');
starTrek.push('Spock');
//starTrek.push('McCoy');
starTrek.push('Scotty');


//console.log(display(starTrek));