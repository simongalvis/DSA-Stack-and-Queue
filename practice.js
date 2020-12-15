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

function hasMatchingParentheses(exp){
    const checkStack = new Stack;
    for(let i = 0; i<exp.length; i++){
        checkStack.push(exp[i])
    }
    let currNode = checkStack.top;
    let openingCount = 0;
    let closingCount = 0;
    for(let i = 0; currNode !== null; i++){
        if (currNode.data === '('){
            openingCount++;
        }
        if(currNode.data === ')'){
            closingCount++;
        }
        currNode = currNode.next;
    }
    if(openingCount === closingCount){
        return true;
    }
    else{
        if(openingCount > closingCount){
            if(openingCount - closingCount === 1){
                return `You are missing a ")"`
            }
            return `You are missing ${openingCount - closingCount} instances of ")"`
        }
        if(closingCount > openingCount){
            if(closingCount - openingCount === 1){
                return `You are missing a "("`
            }
            return `You are missing ${closingCount - openingCount} instances of "("`
        }
    }
    return `Opening count: ${openingCount}, Closing count: ${closingCount}`
}
// Keep working on this one 
/* function sort(stack){
    let currNode = stack.top;
    let max = null;

    if (currNode === null){
        return `No items to sort: stack is empty`
    }
    while(currNode !== null){
        
        if(currNode.data > max ){
            max = currNode.data;
            currNode = currNode.next;
        }

    }

} */

   //  console.log(display(sort()))

//console.log(hasMatchingParentheses('function))))(exp){ content }'));
 //   node .\practice.js   
const starTrek = new Stack;

starTrek.push('Kirk');
starTrek.push('Spock');
//starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.top = 'Kirk';


console.log(display(starTrek));




