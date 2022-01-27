class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log('2. 使用 Linked List 實作 Stack', arr);
    return <>{arr}</>
  }

}



const myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.print()


const LinkedList = () => {

  return (
    <>
      <div>2. 使用 Linked List 實作 Stack</div>
      <div>finish push()</div>
      {/* <div>{`myStack.push(1) ${myStack.push(1)}`}</div>
      <div>{`myStack.push(2) ${myStack.push(2)}`}</div>
      <div>{`myStack.push(3) ${myStack.push(3)}`}</div>
      <div>{`myStack.print() ${myStack.print()}`}</div> */}
    </>
  )
}



export default LinkedList;